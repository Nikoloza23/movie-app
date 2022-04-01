import { Routes, Route } from 'react-router';

import Register from './pages/register/Register';
import Start from './pages/start/Start';
import SoundBar from './components/soundbar/SoundBar';
import Submited from './pages/submited/Submited';

//Make routing on pages
function App() {
	return (
		<div className="App">
			<SoundBar />
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/start" element={<Start />} />
				<Route path="/submited" element={<Submited />} />
			</Routes>
		</div>
	);
}

export default App;
