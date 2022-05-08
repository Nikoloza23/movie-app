import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Autoplay } from 'swiper';

import Navbar from '../../components/navbar/Navbar';
import List from '../../components/list/List';
import Featured from '../../components/featured/Featured';

import axios from 'axios';

import 'swiper/swiper.scss';
import './home.scss';

//here i maked (filter) all of components
const Home = () => {
	const URL = `https://api.themoviedb.org/3`;
	const [movies, setMovies] = useState([]);
	const [popMovie, setPopMovie] = useState([]);
	const [tredMovie, setTredpMovie] = useState([]);
	const [popSeries, setPopSeries] = useState([]);

	const url1 =
		'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
	const url2 =
		'https://api.themoviedb.org/3/movie/top_rated?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1';
	const url3 =
		'https://api.themoviedb.org/3/tv/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1';

	useEffect(() => {
		const fetchMovies = async () => {
			const {
				data: { results },
			} = await axios.get(`${URL}/discover/movie?&api_key=250f1b16e72111b02a281e86ec9e23c2&`, {
				params: {},
			});
			setMovies(results);
		};
		const fetchpopMovie = async (url) => {
			await axios.get(url).then((res) => setPopMovie(res.data.results.slice(0, 9)));
		};

		const fetchtredMovie = async (url) => {
			await axios({
				url: url,
				method: 'GET',
			}).then((res) => setTredpMovie(res.data.results.slice(0, 9)));
		};

		const fetchpopSeries = async (url) => {
			await axios({
				url: url,
				method: 'GET',
			}).then((res) => setPopSeries(res.data.results.slice(0, 9)));
		};
		fetchMovies();
		fetchpopMovie(url1);
		fetchtredMovie(url2);
		fetchpopSeries(url3);
	}, [url1, url2, url3, URL]);

	return (
		<div className="home">
			<Navbar />
			<Swiper
				modules={[Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				speed={1000}
				grabCursor={true}
				autoplay={{ delay: 3000 }}
				loop
			>
				{movies.slice(0, 6).map((movie) => {
					return (
						<SwiperSlide key={movie.id}>
							<Featured movie={movie} />
						</SwiperSlide>
					);
				})}
			</Swiper>
			<span className="listTitle">Treding to Watch</span>
			<List data={popMovie} keyword={'movie'} />
			<span className="listTitle">Popular to Watch</span>
			<List data={tredMovie} keyword={'movie'} />
			<span className="listTitle">Serials</span>
			<List data={popSeries} keyword={'tv'} />
		</div>
	);
};

export default Home;
