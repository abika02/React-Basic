import React from 'react';//const React = reruire("react")
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //equivalent const App = reruire("App")

//strict mode strictly follow the react syntax
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
