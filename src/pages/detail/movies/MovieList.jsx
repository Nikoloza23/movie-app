import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../components/navbar/Navbar';

import './movieList.scss';
import { Link } from 'react-router-dom';

const MovieList = () => {
	const [movieList, setMovieList] = useState([]);
	const [searchKey, setSearchKey] = useState('');

	const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

	useEffect(() => {
		const fetchMovies = async () => {
			const type = searchKey ? 'search' : 'discover';
			const {
				data: { results },
			} = await axios.get(
				`https://api.themoviedb.org/3/${type}/movie?&api_key=250f1b16e72111b02a281e86ec9e23c2&${
					searchKey ? `query=${searchKey}` : 'page=1'
				}`,
				{
					params: {
						query: searchKey,
					},
				}
			);
			setMovieList(results);
		};
		fetchMovies();
	}, [searchKey]);
	return (
		<div className="movies_section">
			<Navbar />

			<input
				className="movies_searcher"
				type="text"
				placeholder="search!"
				onChange={(e) => setSearchKey(e.target.value)}
			/>
			{movieList.slice(0, 15).map((movies) => {
				return (
					<Link to={`/detail/${movies.id}/movie`} style={{ textDecoration: 'none', cursor: 'pointer' }} key={movies.id}>
						<div className="movies_container">
							<div className="movies_border">
								<img src={`${IMGPATH}${movies.poster_path}`} alt="/" />
								<h1>{movies.title}</h1>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default MovieList;
