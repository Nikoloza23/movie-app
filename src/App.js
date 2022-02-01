import { Routes, Route } from "react-router-dom";

import './App.css';
import HomePage from './pages/home-page';
import NotePage from './pages/notes-page/notes-page';
import Navigation from './components/navigation/navigation'
import Profile from './pages/profile/profile';

import ClassCounter from './pages/class-counter/class-counter';
import Theme from './components/theme/theme';


//Make routing on pages 
function App() {
  return (
    <div className="App">
      <Navigation />
      <Theme>
      <Routes>
      <Route path="/notes"  element={<NotePage/>} />
      </Routes>
      
      <Routes>
        <Route path='/profile' element={<Profile title='Secured Profile Page'/>} />
      </Routes>

      <Routes>
      <Route path="/counter" element={<ClassCounter title="Class Counter Example" initialValue={10}/>} />
      </Routes>

        <Routes>
          <Route path="/" element={<HomePage/>} /> 
        </Routes>
      </Theme>
    </div>
  );
}

export default App;