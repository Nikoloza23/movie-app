import AddNoteForm from "../../components/forms/add-note-form/";
import NoteList from "../../components/list/note-list";
import NotesProviderComponent from '../../components/contexts/NotesProvider';


/* Note Page Functional when you clicked here comes new
item of note also you can type your description
and  Title */
function NotePage(props){
    return(
    <NotesProviderComponent>
    <div className="row">
        <h2>Notes Page</h2>
        <div className="col-4">
         <AddNoteForm />
         </div>
         <div className="col-8 d-flex flex-wrap">
        <NoteList  />
         </div>
     </div>
     </NotesProviderComponent>
    )
}

export default NotePage;