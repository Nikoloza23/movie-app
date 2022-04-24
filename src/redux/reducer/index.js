import * as types from '../actiontypes';

const cart = [];

const form = (state = cart, action) => {
	const product = action.payload;
	switch (action.type) {
		case 'ADDMOVIE': {
			const product = action.payload;
			const exist = state.find((x) => x.id === product.id);
			if (exist) {
				return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
			} else {
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

		case types.ADD_FORM_TYPE: {
			return { ...state, validate: action.payload };
		}

		default:
			return state;
	}
};

export default form;
