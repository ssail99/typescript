import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware } from 'redux'
import rootReducer, { rootSaga } from './modules'
import Thunk from 'redux-thunk'
import CreateSageMiddleware from 'redux-saga'

const sagaMilderware=CreateSageMiddleware();
const store =createStore(rootReducer,applyMiddleware(sagaMilderware));
sagaMilderware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
