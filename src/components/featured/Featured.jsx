import { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './featured.scss';

const Featured = ({ movie }) => {
	const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
	const [movieTrailer, setMovieTrailer] = useState();
	const [playTrailer, setPlayTrailer] = useState();

	const { id } = movie;

	const fetchMoviesTrailer = (id) => {
		axios({
			method: 'GET',
			url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`,
		}).then((res) => {
			if (res.data.results.length === 0) {
				setMovieTrailer([]);
			} else {
				setMovieTrailer(res.data.results[0].key);
			}
			console.log(res.data);
		});
	};

	const clickedOnDataVideo = (num) => {
		setPlayTrailer((prev) => (prev === num ? null : num));
	};

	return (
		<div className="featured">
			{playTrailer ? (
				<img
					style={{
						filter: 'blur(10px)',
						'-webkit-filter': 'blur(150%)',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
					src={`${IMGPATH}${movie.backdrop_path}`}
					alt="/"
				/>
			) : null}
			{movie.backdrop_path ? (
				<img className="backdrop" src={`${IMGPATH}${movie.backdrop_path}`} alt="/" />
			) : (
				<div>No Image Found</div>
			)}
			<div className="info">
				<div className="movie_title">{movie.title}</div>
				<span className="desc">{movie.overview}</span>
				<div className="buttons">
					<iframe
						className="watch_trailer"
						title="video"
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${movieTrailer}`}
						frameBorder="0"
						style={playTrailer === true ? {} : { display: 'none' }}
						allowFullScreen
					></iframe>
					<button className="play" onClick={() => fetchMoviesTrailer(id)}>
						{playTrailer ? (
							<span onClick={() => setMovieTrailer(false)}>
								<span onClick={() => clickedOnDataVideo(false)}>Close</span>
							</span>
						) : (
							<span onClick={() => clickedOnDataVideo(true)}>Watch Trailer</span>
						)}
					</button>
					<Link to={`/detail/${movie.id}/movie`} style={{ textDecoration: 'none' }}>
						<div className="play">Watch Now</div>
					</Link>
				</div>
			</div>
			<div className="featured_display">
				<img className="backdrop_path_mini" src={`${IMGPATH}${movie.poster_path}`} alt="/" />
			</div>
		</div>
	);
};

export default Featured;
