import * as types from '../actiontypes';

export const ADD_FORM = (data) => ({
	type: types.ADD_FORM_TYPE,
	payload: data,
});


export const ADD_MOVIE = (product) =>{
	return{
		type: "ADDMOVIE",
		payload: product
	}
 }
 
 //For Delete Movie From Cart
 export const DEL_MOVIE = (product) =>{
	 return{
		 type: "DELMOVIE",
		 payload: product
	 }
  }