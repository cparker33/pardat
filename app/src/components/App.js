import React, { Component } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div
          className='app-cont'>

          <p style={{textAlign: 'center', width: '90%', paddingTop: '50px'}} > 
            <i style={{fontSize: '40px'}} className="fa fa-star" />
          </p>

          <p style={{textAlign: 'center', width: '100%', paddingTop: '50px'}} > 
            <i style={{fontSize: '60px'}} className="fa fa-cube" />
          </p>

        </div>
      </Router>
    )
  }
}

const mapStateToProps = function(appState) {
   // console.log(appState) 
  return {
    app_state: appState
  }
}

export default connect(mapStateToProps)(App)