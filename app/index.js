/*********************************
  DEPENDENCIES
*********************************/
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'

/*********************************
  ASSETS
*********************************/
import 'normalize.css'
import './src/assets/scss/app.scss'

/*********************************
  STORE
*********************************/
import store from './src/store/store'

/*********************************
  COMPONENTS
*********************************/
import App from './App'

ReactDOM.render (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)