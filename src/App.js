import { Routes, Route } from 'react-router';
import Register from './pages/register/Register';
import Start from './pages/form/Start';
import './app.css';

//Make routing on pages
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/start" element={<Start/>} />
			</Routes>
		</div>
	);
}

export default App;
