import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import App from './App';

//reducers
import authReducer from './contollers/redux/authslice'
import bugReducer from './contollers/redux/bugslice'
import userReducer from './contollers/redux/userslice'

// Redux configure
const reducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer,
})
const store = configureStore({
  reducer
})

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
  ,
  document.getElementById('root')
);

