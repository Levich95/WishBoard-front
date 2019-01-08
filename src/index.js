import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/configureStore';
import { Provider } from 'react-redux'
import './index.css';
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
//registerServiceWorker()