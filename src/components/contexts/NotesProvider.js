import  React, {useEffect, useState} from 'react'
/* import notesList from '../../data/note-list'*/ 
import API_SERVICE from '../services/api';
export const NotesContext = React.createContext(null);

//Provaider -> store value
//Consumet -> use value

/* because the list list file is not overloaded 
and does not relate to many function  because the  note-list 
file is not overloaded and does not relate to many functions*/
function NotesProviderComponent({children}){
    const [noteList, setNoteList] = useState([]);

    const loadTodoListAsync = async () => {
        const list = await API_SERVICE.getTodoListAsync({start:60, limit: 20})
        setNoteList(list);
    }
    
    useEffect(() =>{
      API_SERVICE.getTodoList({ callback: setNoteList, start: 50, limit: 15 });
    }, []);

    const addNewNote = (newNote) =>{
        //  console.log("NEWNOTE", newNote);
         const newList = [...noteList, newNote];
        //  newObject !== oldObject 
         setNoteList(newList);
    };


    const onItemClick = (itemId) => {
      const itemIndex = noteList.findIndex((item) => item.id === itemId);
      if(!noteList[itemIndex].done){
        const newListState = [
            ...noteList.slice(0, itemIndex),
            {
              ...noteList[itemIndex],
              done: true
  
            },
            ...noteList.slice(itemIndex + 1)
        ]
        setNoteList(newListState);
      }
      else{
          const newListState = noteList.filter(n => n.id !== itemId);
          setNoteList(newListState);

      }
    };
    
    NotesContext.displayName = "NotesContext";

    return (
    <NotesContext.Provider
    value={{addNewNote, onItemClick, noteList, setNoteList}}>
      {children}
    </NotesContext.Provider> 
    )
}

export default NotesProviderComponent;
