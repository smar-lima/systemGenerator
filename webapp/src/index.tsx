import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app';
import store from './store';



const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);