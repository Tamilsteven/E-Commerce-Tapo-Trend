import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Store } from './components/Store'
import { Provider } from 'react-redux';
import { getTotals } from './components/Product/Cartslice';
 Store.dispatch(getTotals())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
   
);


