// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// Components
import store from './store/store'
import App from './App'
// Styles
import "./assets/css/main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
