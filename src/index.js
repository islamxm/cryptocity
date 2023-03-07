import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import { MetaMaskProvider } from "metamask-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <MetaMaskProvider>
        <App />
        </MetaMaskProvider>
       
      </Provider>
      
    </Router>
    
  </React.StrictMode>
);


