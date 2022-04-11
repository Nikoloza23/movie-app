import { Routes, Route } from 'react-router';

import Register from './pages/register/Register';
import Start from './pages/start/Start';
import Submited from './pages/submited/Submited';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import MovieList from './pages/detail/movies/MovieList'

import './app.scss';

//Make routing on pages
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/start" element={<Start />} />
				<Route path="/submited" element={<Submited />} />
				<Route path="/main" element={<Home />} />
				<Route path="/detail/:id/:keyword" element={<Detail />} />
				<Route path="/movies" element={<MovieList/>}/>
				<Route path="/tvseries" element={<tvSeries/>}/>
			</Routes>
		</div>
	);
}

export default App;
