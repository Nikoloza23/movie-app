import NoteListItem from './NoteListitItem';
import { useContext } from 'react';
import { NotesContext } from '../../contexts/NotesProvider.js';
import './note-list.css';

//take notelist from notesContext
function NoteList(props) {
	const { noteList } = useContext(NotesContext);
	return (
		<>
			{noteList.map((item) => {
				return <NoteListItem item={item} key={item.id} />;
			})}
		</>
	);
}

export default NoteList;
