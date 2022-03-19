import { Routes, Route  } from "react-router";
import Registrer from "./pages/form/Registrer";
import Loading from "./pages/loading/Loading";

//Make routing on pages
function App() {
	return( 
	<div className="App">
     <Routes>
		 <Route path="/" element={<Registrer/>} /> 
		 <Route path="/loading" element={<Loading/>} />
	 </Routes>
	</div>
	);
}

export default App;
