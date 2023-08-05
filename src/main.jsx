import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import "./assets/css/style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import store from "./redux/store/Store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
