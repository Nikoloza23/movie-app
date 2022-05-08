import axios from 'axios';
import * as types from '../actiontypes';

const initialState = {
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

		default:
			return state;
	}
};

export default form;
