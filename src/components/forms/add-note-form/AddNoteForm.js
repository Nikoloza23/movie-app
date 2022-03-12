import { useState, useContext } from 'react';
import Button from '../../../ui/button';
import { NotesContext } from '../../contexts/NotesProvider.js';

//Here is a description and title of notes page
function AddNoteForm(props) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [done, setDone] = useState(false);

	const { addNewNote } = useContext(NotesContext);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(title, description);
		const newNote = {
			title,
			description,
			done,
			id: Math.random().toString(),
		};
		addNewNote(newNote);
	};

	return (
		<form className="row g-1" onSubmit={onSubmit}>
			<div className="mb-2">
				<label htmlFor="title" className="form-label">
					Title - {title}
				</label>
				<input
					type="text"
					className="form-control"
					id="title"
					placeholder=""
					value={title}
					onChange={({ target }) => {
						setTitle(target.value);
					}}
					required
				/>
			</div>
			<div className="mb-2">
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<textarea
					className="form-control"
					id="description"
					rows="3"
					value={description}
					onChange={({ target }) => {
						setDescription(target.value);
					}}
					required
				></textarea>
			</div>
			<div className="mb-3 form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="done"
					onChange={({ target }) => {
						setDone(target.checked);
					}}
				/>
				<label className="form-check-label" htmlFor="done">
					Done
				</label>
			</div>
			<Button type="submit" className="btn btn-primary btn-md" text="Add Note" />
		</form>
	);
}

export default AddNoteForm;
