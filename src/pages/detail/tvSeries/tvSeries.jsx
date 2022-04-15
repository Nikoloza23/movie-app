import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../../components/navbar/Navbar';

import axios from 'axios';
import './tvSeries.scss';

const TVSeries = () => {
	const [tvSeries, setTvSeries] = useState([]);
	const [searchKey, setSearchKey] = useState('');

	const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

	useEffect(() => {
		const fetchTV = async () => {
			const type = searchKey ? 'search' : 'discover';

			const {
				data: { results },
			} = await axios.get(
				`https://api.themoviedb.org/3/${type}/tv?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1${
					searchKey ? `query=${searchKey}` : `page=`
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
	}, [searchKey]);

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
					<Link
						to={`/detail/${series.id}/tv`}
						style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}
						key={series.id}
					>
						<div className="series_container">
							<img src={`${IMGPATH}${series.poster_path}`} alt="/" />
							<h1>{series.original_name}</h1>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default TVSeries;
