import {createStore} from 'redux';
import rootReducers from '../moviefav/Favourite'

const store = createStore(rootReducers);

export default store;