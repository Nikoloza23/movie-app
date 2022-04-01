import axios from 'axios';
import * as types from '../actiontypes';

const initialState = {
	validate: {},
};

const form = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_FORM_TYPE: {
			return { ...state, validate: action.payload };
		}

		case types.UPLOAD_DATA_TYPE: {
			axios
				.post(`https://62471cb24bd12c92f4fbfdc8.mockapi.io/movies`, {
					...state.validate,
				})
				.then((res) => console.log('server response', res));

			return {
				validate: {},
			};
		}

		default:
			return state;
	}
};

export default form;
