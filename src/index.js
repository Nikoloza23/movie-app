import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import index from './redux/store/index'

ReactDOM.render(
	<BrowserRouter>
	<Provider store={index}>
			<App />
			</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
