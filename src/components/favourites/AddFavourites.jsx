import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { DEL_MOVIE } from '../../redux/action/index';
import { Link } from 'react-router-dom';
import './favourites.scss';

const AddFavourites = () => {
	const fav = useSelector((state) => state.cart);

	const dispatch = useDispatch();
	const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

	const handleClose = (id) => {
		dispatch(DEL_MOVIE(id));
	};

	return (
		<div className="favourites">
			<Navbar />
			{fav.length > 0 ? (
				<>
					{fav.map((item) => {
						return (
							<div className="favourites_container" key={item.product.id}>
								<div className="favourites_list">
									<button
										onClick={() => handleClose(item.product.id)}
										className="favourites_delete"
										style={{ position: 'relative', left: '-180px' }}
									>
										X
									</button>
									<Link
										to={`/detail/${item.product.id}/movie`}
										style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
									>
										<img
											src={`${IMGPATH}${item.product.poster_path}`}
											alt=""
											className="favourties_image"
										/>
									</Link>
									<h3 className="favourites_title">
										{item.product.title}
										{item.product.original_name}
									</h3>
								</div>
							</div>
						);
					})}
				</>
			) : (
				''
			)}
		</div>
	);
};
export default AddFavourites;
