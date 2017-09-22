
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './src/store/store'
import { BrowserRouter as Router} from 'react-router-dom'
import 'normalize.css'
import './src/assets/scss/app.scss'
import App from './src/components/App'
 
// const App = () => import('./src/components/App')


ReactDOM.render (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)