import { Routes, Route } from 'react-router';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import './app.scss'

//Make routing on pages
function App() {
	return (
		<div className="App">
         <Routes>
			 <Route path="/" element={<Register/>} />
			 <Route path="/login" element={<Login/>} />
			 <Route path="/home" element={<Home/>} />
		 </Routes>
		</div>
	);
}

export default App;
