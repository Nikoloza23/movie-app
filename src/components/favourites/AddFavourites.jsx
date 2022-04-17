import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { DEL_MOVIE } from '../../redux/action/index';
import './favourites.scss';

const AddFavourites = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleClose = (item) => {
		dispatch(DEL_MOVIE(item));
	};

	const product = (data) => {
		return (
			<div className="px-4 my-5 bg-light rounded-3" key={data.id}>
				<Navbar />
				<div className="container">
					<button
						onClick={() => handleClose(data)}
						className="btn-close float-end"
						aria-label="Close"
					></button>
					<div className="row justify-content-center">
						<div className="col-md-4">
							<img src={data.image} alt={data.title} height="200px" width="180px" />
						</div>
						<div className="col-md-4">
							<h3>{data.title}</h3>
							<p className="load fw-bold">{data.price}</p>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return <>{state.length !== 0 && state.map(product)}</>;
};
export default AddFavourites;
