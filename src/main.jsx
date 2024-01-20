import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Removed .jsx extension
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
);
