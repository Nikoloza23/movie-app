import * as types from '../actiontypes';

export const ADD_FORM = (data) => ({
	type: types.ADD_FORM_TYPE,
	payload: data,
});

export const UPLOAD_DATA = () => ({
	type: types.UPLOAD_DATA_TYPE,
});
