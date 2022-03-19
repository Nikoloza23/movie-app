import { Routes, Route } from 'react-router';
import Registrer from './pages/form/Registrer';
import Main from './pages/main/Main';
//Make routing on pages
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Registrer />} />
				<Route path="/main" element={<Main />} />
			</Routes>
		</div>
	);
}

export default App;
