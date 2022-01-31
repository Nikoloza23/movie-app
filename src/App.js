import './App.css';
import HomePage from './pages/home-page'
import NotePage from './pages/notes-page/notes-page';
import Navigation from './components/navigation'
import {useState} from 'react'
import ClassCounter from './pages/class-counter/class-counter';
import Theme from './components/theme';

//Here is function about this Functional
//take all of this components data and source
function App() {
  const [page, setPage] = useState({
   homePage: true,
   notesPage: false,
   classCounter: false
  });

  //Current Pages I II and III
  const [currentPage, setCurrentPage] = useState("homePage");

  const updatePage = (pageKey) => {
     const updateActivePage = { ...page };
     let newCurrentPage = '';

     Object.keys(updateActivePage).forEach(key => {
       if(key === pageKey){
         updateActivePage[pageKey] = true;
         newCurrentPage =pageKey;
       }
       else{
        updateActivePage[key] = false;
       }
     });

    setPage(updateActivePage);
    setCurrentPage(newCurrentPage);

  };
  
  return (
    <div className="App">
      <Navigation  page={currentPage} setPage={updatePage} />
       <Theme mode={currentPage} >
        {page.homePage && <HomePage/> }
        {page.notesPage && <NotePage/>}
        {page.classCounter && <ClassCounter title="Class Counter Example" initialValue={10}
        />}
       </Theme>
    </div>
  );
}

export default App;