import { Link } from 'react-router-dom';

import './featured.scss';

//Backdrop with Swiper Animation
const Featured = ({ movie }) => {
	const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

	return (
		<div className="featured">
			{movie.backdrop_path ? (
				<img className="backdrop" src={`${IMGPATH}${movie.backdrop_path}`} alt="/" />
			) : (
				<div>No Image Found</div>
			)}
			<div className="info">
				<div className="movie_title">{movie.title}</div>
				<span className="desc">{movie.overview}</span>
				<div className="buttons">
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
