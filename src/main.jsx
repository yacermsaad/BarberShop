import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer.js';

const store=createStore(reducer)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
