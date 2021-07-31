import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import QuantityIncrement from './components/references/QuantityIncrement';
import UsernamePasswordLogin from './components/references/UsernamePasswordLogin';
import Fibonacci from "./components/Fibonacci.js";
import HoverClass from "./components/HoverClass.js";

ReactDOM.render(

  <React.StrictMode>
    <HoverClass/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
