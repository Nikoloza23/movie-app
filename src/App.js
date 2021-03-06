import { Routes, Route } from 'react-router';

import Home from './pages/home/Home';

import Detail from './pages/detail/Detail';
import MovieList from './pages/detail/movies/MovieList';
import Series from './pages/detail/tvSeries/Series';
import AddFavourites from './components/favourites/AddFavourites';

import './app.scss';

//Make routing on pages
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id/:keyword" element={<Detail />} />
				<Route path="/movies" element={<MovieList />} />
				<Route path="/tvseries" element={<Series />} />
				<Route path="/favourties" element={<AddFavourites />} />
			</Routes>
		</div>
	);
}

export default App;
