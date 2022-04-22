import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { DEL_MOVIE } from '../../redux/action/index';

import './favourites.scss';
import { Link } from 'react-router-dom';

const AddFavourites = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

	const handleClose = (item) => {
		dispatch(DEL_MOVIE(item));
	};

	const product = (product) => {
		return (
			<div className="favourites_container" key={product.id}>
				<div className="favourites_list">
					<button onClick={() => handleClose(product)} className="favourites_delete" style={{position:"relative", left:"-180px"}}>
						X
					</button>
					<Link to={`/detail/${product.id}/movie`} style={{textDecoration:"none", display: "flex", justifyContent: "center"}}>
						<img src={`${IMGPATH}${product.poster_path}`} alt="" className="favourties_image" />
					</Link>
					<h3 className="favourites_title">
						{product.title}
						{product.original_name}
					</h3>
				</div>
			</div>
		);
	};

	return (
		<div className="favourites">
			<Navbar />
			{state.length !== 0 && state.map(product)}
		</div>
	);
};
export default AddFavourites;
