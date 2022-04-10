import { Routes, Route } from 'react-router';

import Register from './pages/register/Register';
import Start from './pages/start/Start';
import Submited from './pages/submited/Submited';
import Detail from './pages/detail/Detail';

import './app.scss';
import Home from './pages/home/Home';
import SoundBar from './components/soundbar/SoundBar';
//Make routing on pages

function App() {
	return (
		<div className="App">
			<SoundBar />
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/start" element={<Start />} />
				<Route path="/submited" element={<Submited />} />
				<Route path="/main" element={<Home />} />
				<Route path="/detail/:id/:keyword" element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
