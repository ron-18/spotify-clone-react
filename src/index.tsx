import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DataLayer} from "./components/dataLayer";
import {initialState , reducer} from "./components/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer >
      <App />
    </DataLayer>
    
  </React.StrictMode>,
  document.getElementById('root')
);
