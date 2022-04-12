import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../../components/moviecards/MovieCard';

import './movieList.css';

function MovieList() {
	const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';
	const URL = `https://api.themoviedb.org/3`;
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState({});
	const [searchKey, setSearchKey] = useState('');
	const [movieTrailer, setMovieTrailer] = useState();
	const [playTrailer, setPlayTrailer] = useState(false);


	const fetchMovie = async (id) => {
		const { data } = await axios.get(`${URL}/movie/${id}`, {
			params: {
				api_key: process.env.REACT_APP_MOVIE_API_KEY,
				append_to_response: 'videos',
			},
		});

		return data;
	};

	const fetchMoviesTrailer = (id) => {
		axios({
			method: 'GET',
			url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`,
		}).then((res) => {
			setMovieTrailer(res.data.results[0].key);
		});
	};

	const selectMovie = (movie) => {
		const data = fetchMovie(movie.id);
		console.log(data)
		fetchMoviesTrailer(movie.id);
		setSelectedMovie(movie);
		setPlayTrailer(false);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			const fetchMovies = async () => {
				try {
					const type = searchKey ? 'search' : 'discover';
					const {
						data: { results },
					} = await axios.get(
						`${URL}/${type}/movie?&api_key=250f1b16e72111b02a281e86ec9e23c2&${
							searchKey ? `query=${searchKey}` : 'page=1'
						}`,
						{
							params: {
								query: searchKey,
								append_to_response: 'videos',
							},
						}
					);
					setSelectedMovie(results[0]);

					setMovies(results);
				} catch (error) {
					console.log(error);
				}
			};

			fetchMovies();
		}, 100);

		return () => clearTimeout(timeout);
	}, [searchKey, URL]);

	const renderMovies = () =>
		movies.map((movie) => <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />);

	const clickedOnDataVideo = (num) => {
		setPlayTrailer((prev) => (prev === num ? null : num));
	};
	return (
		<div className="App">
			<header className="header">
				<div className="header_content max_center">
					<span>Movie Tralier App</span>

					<input
						className="movies_searcher"
						placeholder="Search!"
						type="text"
						onChange={(e) => setSearchKey(e.target.value)}
					/>
				</div>
			</header>
			<div
				className="hero"
				style={{
					backgroundImage: `url('${IMAGE_PATH}${selectedMovie.backdrop_path}')`,
				}}
			>
				<div className="hero_content max_center">
					<iframe
						className="movie_video"
						src={`https://www.youtube.com/embed/${movieTrailer}`}
						title="video"
						style={playTrailer === 1 ? {} : { display: 'none' }}
					></iframe>
					<button className="hero_button" onClick={() => clickedOnDataVideo()}>
						{playTrailer ? (
							<div className="close_trailer" >
								Close Trailer
							</div>
						) : (
							<div className="button" >
								Play Trailer
							</div>
						)}
					</button>

					<h1 className="hero_title">{selectedMovie.title}</h1>
					{selectedMovie.overview ? <p className="hero_overview"> {selectedMovie.overview}</p> : null}
				</div>
			</div>
			<div className="container_4 max_center">{renderMovies()}</div>
		</div>
	);
}

export default MovieList;
