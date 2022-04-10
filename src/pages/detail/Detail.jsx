import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Autoplay } from 'swiper';

import axios from 'axios';

import 'swiper/swiper.scss';
import './detail.scss';
import Navbar from '../../components/navbar/Navbar';

const Detail = () => {
	const [data, setData] = useState([]);
	const [casts, setCast] = useState([]);
	const { id } = useParams();
	const { keyword } = useParams();
	const url = `https://api.themoviedb.org/3/${keyword}/${id}?api_key=04c35731a5ee918f014970082a0088b1`;
	const url2 = `https://api.themoviedb.org/3/${keyword}/${id}/credits?api_key=04c35731a5ee918f014970082a0088b1`;
	const bg = `${`https://image.tmdb.org/t/p/w1280` + data.backdrop_path || data.poster_path}`;

	useEffect(() => {
		window.scroll(0, 0);
		axios.get(url).then((response) => {
			setData(response.data);
		});
		axios.get(url2).then((response) => {
			setCast(response.data.cast);
		});
	}, [id, keyword, url, url2]);

	const Videos = (props) => {
		const videoUrl = `https://api.themoviedb.org/3/${props.catalog}/${props.id}/videos?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`;
		const [video, setVideo] = useState([]);
		useEffect(() => {
			axios.get(videoUrl).then((response) => {
				setVideo(response.data.results.slice(0, 1));
			});
		}, [videoUrl]);

		return (
			<>
				{video.map((el) => {
					return (
						<div className="video" key={el.id}>
							<div className="video_title">
								<h2>{el.name}</h2>
							</div>
							<iframe className="video_2" src={`https://www.youtube.com/embed/${el.key}`} title="video"></iframe>
						</div>
					);
				})}
			</>
		);
	};

	return (
		<div className="detail_container">
			<Navbar/>
			<div className="detail_banner" style={{ backgroundImage: `url(${bg})` }}></div>
			<div className="detail_list">
				<img
					className="detail_container_poster"
					src={`${`https://image.tmdb.org/t/p/w1280` + data.poster_path}`}
					alt=""
					width="100%"
					height="400px"
				/>
				<div className="detail_container_wrapper">
					<div className="detail_container_content">
						<h1>{data.original_title}</h1>
					</div>
					<div className="detail_container_language">
						<div className="language">{data.original_language}</div>
					</div>
					<p>{data.overview}</p>
				</div>
			</div>
			<div style={{ padding: '0 2rem', display: 'flex', justifyContent: 'center' }}>
				<Swiper
					modules={[Autoplay]}
					spaceBetween={0}
					slidesPerView={5}
					speed={1000}
					grabCursor={true}
					autoplay={{ delay: 3000 }}
					loop
				>
					<div className="cast_wrap">
						{casts.length !== 0
							? casts.slice(0, 10).map((el) => {
									return (
										<SwiperSlide key={el.id}>
											<div key={el.id} className="cast_wrap_item">
												<img
													className="cast_actors"
													src={`${`https://image.tmdb.org/t/p/w1280` + el.profile_path}`}
													alt=""
												/>
												<li className="actor_original_name">{el.original_name}</li>
											</div>
										</SwiperSlide>
									);
							  })
							: null}
					</div>
				</Swiper>
			</div>
			<Videos id={id} catalog={keyword} />
		</div>
	);
};

export default Detail;
