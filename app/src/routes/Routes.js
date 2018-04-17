/*********************************
  DEPENDENCIES
*********************************/
import React from 'react'
import { Route } from 'react-router-dom' 

/*********************************
  ROUTE COMPONENTS
*********************************/
import Main from './main/Main'

/*********************************
  ROUTES
*********************************/
const Routes = () => (
  <div>
    <Route component={Main} exact path='/' />
  </div>
)

export default Routes