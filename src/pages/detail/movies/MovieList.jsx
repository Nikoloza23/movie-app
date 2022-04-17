import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../components/navbar/Navbar';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './movieList.scss';
import { Link } from 'react-router-dom';

//More Movies
const MovieList = () => {
	const [movieList, setMovieList] = useState([]);
	const [searchKey, setSearchKey] = useState('');
	const [page, setPage] = useState(1);
	const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

	useEffect(() => {
		const fetchMovies = async () => {
			const type = searchKey ? 'search' : 'discover';
			const {
				data: { results },
			} = await axios.get(
				`https://api.themoviedb.org/3/${type}/movie?&api_key=250f1b16e72111b02a281e86ec9e23c2&${
					searchKey ? `query=${searchKey}` : `page=${page}`
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
	}, [searchKey, page]);

	const handleChange = (event, value) => {
		setPage(value);
	};

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
					<>
						<h2 className="movie_page_numeration">Page:{`${page}`}</h2>
						<Link
							to={`/detail/${movies.id}/movie`}
							style={{ textDecoration: 'none', cursor: 'pointer' }}
							key={movies.id}
						>
							<div className="movies_container">
								{movies.poster_path ? (
									<img src={`${IMGPATH}${movies.poster_path}`} alt="" />
								) : (
									<div className="without_image">No Image Found</div>
								)}
								<h1>{movies.title}</h1>
							</div>
						</Link>
					</>
				);
			})}
			<div className="pagination">
				<Stack spacing={2}>
					<Pagination
						count={10}
						onChange={handleChange}
						page={page}
						style={{ background: 'white', borderRadius: '30px', margin: '1rem' }}
					/>
				</Stack>
			</div>
		</div>
	);
};

export default MovieList;
