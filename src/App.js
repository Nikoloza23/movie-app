import {Routes, Route } from "react-router-dom";

import './App.css';
import HomePage from '../src/pages/home-page';
import NotePage from '../src/pages/notes-page/notes-page';
import Navigation from '../src/components/navigation/navigation'
import Profile from '../src/pages/profile/profile';

import ClassCounter from '../src/pages/class-counter/class-counter';
import Theme from '../src/components/theme/theme';


//Make routing on pages 
function App() {
  return (
    <div className="App">
      <Navigation />
      <Theme>
      <Routes>
      <Route path="/notes"  element={<NotePage/>} />
       <Route path="/profile" element={<Profile title='Secured Profile Page'/>} />
       <Route path="/counter" element={<ClassCounter title="Class Counter Example" initialValue={10}/>} />
       <Route path="/" element={<HomePage/>} /> 
      </Routes>
      </Theme>
    </div>
  );
  
}

export default App;