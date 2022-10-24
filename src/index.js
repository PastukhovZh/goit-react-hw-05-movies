import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);
