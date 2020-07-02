import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import crudreducer from 'reducer/reducers'

let store = createStore(crudreducer, applyMiddleware(thunk));

const Apps = () => (
	<Provider store={store} >
		<App />
	</Provider>
)
ReactDOM.render((<Apps />), document.getElementById('app'));