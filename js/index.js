// StyleSheets
require("../css/00-global.css");

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";
// import reducers from './reducers';

// Redux Logger
import createLogger from 'redux-logger';

// React Router
// import {Router, Route, IndexRoute, Link, IndexLink, IndexRedirect, hashHistory} from 'react-router';

// Components / Containers
import Test from './components/test';

// Consts
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore);

const app = document.getElementById("app");

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
		<Test />,
	// </Provider>,
app

);