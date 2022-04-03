import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../../components/moviecards/MovieCard';

import './movieList.css';

function MovieList() {
	const API_URL =
		'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState({});
	const [searchKey, setSearchKey] = useState('');

	const fetchMovies = async (searchKey) => {
		try {
			const type = searchKey ? 'search' : 'discover';
			const {
				data: { results },
			} = await axios.get(`${API_URL}/${type}/movie`, {
				params: {
					api_key: process.env.REACT_APP_MOVIE_API_KEY,
					query: searchKey,
				},
			});

			setSelectedMovie(results[0]);
			setMovies(results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	const renderMovies = () => movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

	const searchMovies = (e) => {
		e.preventDefault();
		fetchMovies(searchKey);
	};

	return (
		<div className="App">
			<header className="header">
				<div className="header_content max_center">
					<span>Movie Tralier App</span>
					<form onSubmit={searchMovies}>
						<input className="movies_searcher" type="text" onChange={(e) => setSearchKey(e.target.value)} />
						<button className="movies" type="submit">
							Search
						</button>
					</form>
				</div>
			</header>
			<div className="hero">
				<div className="hero_content max_center">
					<h1>{selectedMovie.title}</h1>
					{selectedMovie.overview ? <p> {selectedMovie.overview}</p> : null}
				</div>
			</div>

			<div className="container_4 max_center">{renderMovies()}</div>
		</div>
	);
}

export default MovieList;
