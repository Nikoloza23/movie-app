
export const ADD_MOVIE = (product) => {
	return {
		type: 'ADDMOVIE',
		payload: product,
	};
};

//For Delete Movie From Cart
export const DEL_MOVIE = (id) => {
	return {
		type: 'DELMOVIE',
		payload: id,
	};
};

