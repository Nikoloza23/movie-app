import { createStore } from 'redux';
import form from '../reducer';

const store = createStore(form);

export default store;