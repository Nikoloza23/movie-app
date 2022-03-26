import { Routes, Route } from 'react-router';
import Register from './pages/register/Register';
import Login from './pages/form/Login';
import './app.css';

//Make routing on pages
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/login" element={<Login/>} />
			</Routes>
		</div>
	);
}

export default App;
