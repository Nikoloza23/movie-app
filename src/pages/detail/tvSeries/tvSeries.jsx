import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../../components/navbar/Navbar';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import axios from 'axios';
import './tvSeries.scss';

//TvSerieals
const TVSeries = () => {
	const [tvSeries, setTvSeries] = useState([]);
	const [searchKey, setSearchKey] = useState('');
	const [tvpage, setTvPage] = useState(1);

	const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

	useEffect(() => {
		const fetchTV = async () => {
			const type = searchKey ? 'search' : 'discover';

			const {
				data: { results },
			} = await axios.get(
				`https://api.themoviedb.org/3/${type}/tv?api_key=04c35731a5ee918f014970082a0088b1&${
					searchKey ? `query=${searchKey}` : `page=${tvpage}`
				}`,
				{
					params: {
						query: searchKey,
					},
				}
			);
			setTvSeries(results);
		};
		fetchTV();
	}, [searchKey, tvpage]);

	const TVChange = (event, value) => {
		setTvPage(value);
	};
	return (
		<div className="tvSeries_container">
			<Navbar />

			<input
				className="series_searcher"
				type="text"
				placeholder="search!"
				onChange={(e) => setSearchKey(e.target.value)}
			/>

			{tvSeries.slice(0, 15).map((series) => {
				return (
					<>
						<h2 className="movie_page_numeration" key={series.id}>Page:{`${tvpage}`}</h2>

						<Link
							to={`/detail/${series.id}/tv`}
							style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}
							key={series.id}
						>
							<div className="series_container">
								{series.poster_path ? (
									<img src={`${IMGPATH}${series.poster_path}`} alt="" />
								) : (
									<div className="without_image">No Image Found</div>
								)}

								<h1>{series.original_name}</h1>
							</div>
						</Link>
					</>
				);
			})}
			<div className="pagination">
				<Stack spacing={2}>
					<Pagination
						count={10}
						onChange={TVChange}
						page={tvpage}
						style={{ background: 'white', borderRadius: '30px', margin: '1rem' }}
					/>
				</Stack>
			</div>
		</div>
	);
};

export default TVSeries;
