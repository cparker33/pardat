
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './src/store/store'
import 'normalize.css'
import './src/assets/scss/app.scss'
import App from './src/components/App'
 
// const App = () => import('./src/components/App')


ReactDOM.render (
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)