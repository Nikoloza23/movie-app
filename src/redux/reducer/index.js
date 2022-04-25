import axios from 'axios';
import * as types from '../actiontypes';

const initialState = {
	validate: {},
	cart: [],
};

const form = (state = initialState, action) => {
	switch (action.type) {
		case 'ADDMOVIE': {
			const product = action.payload;
			const exist = state.cart.find((x) => x.product.id === product.id);
			const cartItem = exist
				? state.cart.map((item) => {
						return item;
				  })
				: [...state.cart, { product, qty: 1 }];

			return {
				...state,
				cart: cartItem,
			};
		}

		case 'DELMOVIE': {
			const id = action.payload;
			const newProduct = state.cart.filter((x) => x.product.id !== id);

			return {
				...state,
				cart: newProduct,
			};
		}

		case types.ADD_FORM_TYPE: {
			return { ...state, validate: action.payload };
		}

		case types.UPLOAD_DATA_TYPE: {
			const data = action.payload;
			axios
				.post(`https://62471cb24bd12c92f4fbfdc8.mockapi.io/movies`, {
					...data,
				})
				.then((res) => console.log('server response', res))
			return {
				validate: {},
			};
		}

		default:
			return state;
	}
};

export default form;
