import { useContext } from 'react';
import { NotesContext } from '../../contexts/NotesProvider.js';
import './NoteListItem.css';

//take click funqtional from NotesContext
function NoteListItem({ item }) {
	const { onItemClick } = useContext(NotesContext);

	const onClick = () => {
		onItemClick(item.id);
	};

	return (
		<div className={`card note-list-item text-white ${item.done ? 'bg-danger' : 'bg-primary'}`}>
			<div className="card-body">
				<h5 className="card-title">{item.title}</h5>
				<p className="card-text">{item.description}</p>
				<button className={`btn ${item.done ? 'btn-warning' : 'btn-danger'}`} onClick={onClick}>
					{item.done ? 'REMOVE' : 'DONE'}
				</button>
			</div>
		</div>
	);
}

export default NoteListItem;
