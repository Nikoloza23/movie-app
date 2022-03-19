import * as types from '../actiontypes';

const initialState = {
	validate: {},
};

const form = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_FORM_TYPE: {
			return { ...state, validate: action.payload };
		}
		default:
			return state;
	}
};

export default form;
