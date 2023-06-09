import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import {createStore } from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const store = createStore(allReducers);


const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);


root.render(
  <StrictMode>
   <Provider store={store}>
    <App />
    </Provider>, 
  </StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals