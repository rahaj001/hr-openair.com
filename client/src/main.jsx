import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from "./components/language/LanguageContext";
//import App from './App';
//import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <h1>Hallo Welt ..</h1>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
