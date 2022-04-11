import Navbar from '../../../components/navbar/Navbar';

import './movieList.scss';

const MovieList = () => {
	return (
		<div className="movies_section">
			<Navbar />
			<div className="movies_container"></div>
		</div>
	);
};

export default MovieList;
