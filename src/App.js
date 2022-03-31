import { Routes, Route } from 'react-router';

import Register from './pages/register/Register';
import Start from './pages/start/Start';
import SoundBar from './components/soundbar/SoundBar';

import './App.css';
//Make routing on pages
function App() {
	return (
		<div>
			<SoundBar />
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/start" element={<Start />} />
			</Routes>
		</div>
	);
}

export default App;
