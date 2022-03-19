import { Routes, Route } from 'react-router';
import Abs from './pages/abs';
import Registrer from './pages/form/Registrer';
import Registered from './pages/registered/Registered';
//Make routing on pages
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Registrer />} />
				<Route path="/registered" element={<Registered />} />
				<Route path="/absds" element={<Abs/>} />
			</Routes>
		</div>
	);
}

export default App;
