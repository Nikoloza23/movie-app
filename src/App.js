import { Routes, Route } from 'react-router';


import Register from './pages/register/Register';
import Start from './pages/start/Start';
import SoundBar from './components/soundbar/SoundBar';
import Submited from './pages/submited/Submited';

import './app.css';
import MovieList from './pages/movies/MovieList';
//Make routing on pages

function App() {

	return (
		<div className="App">
			<SoundBar />
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/start" element={<Start />} />
				<Route path="/submited" element={<Submited />} />
				<Route path="/movies" element={<MovieList />} />
			</Routes>
		</div>
	);
}

export default App;
