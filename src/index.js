import React from 'react';
import ReactDOM from 'react-dom';
import 'element-theme-default'
import './index.css';
import App from './App';
import {
	Provider
} from 'react-redux';
import store from './redux/store/store.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();