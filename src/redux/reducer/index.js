import axios from 'axios';
import * as types from '../actiontypes';

const cart = [];

const form = (state = cart, action) => {
	const product = action.payload;
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

		case 'ADDMOVIE': {
			const exist = state.find((x) => x.id === product.id);
			if (exist) {
				return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
			} else {
				const product = action.payload;
				return [
					...state,
					{
						...product,
						qty: 1,
					},
				];
			}
		}

		case 'DELMOVIE': {
			const exist1 = state.find((x) => x.id === product.id);
			if (exist1.qty === 1) {
				return state.filter((x) => x.id !== exist1.id);
			} else {
				return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty - 1 } : x));
			}
		}
		default:
			return state;
	}
};

export default form;
