// STACK
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

// DEV
const log = console.log // eslint-disable-line no-unused-vars

// API
import {callApiFunction} from '../api/app'

// COMPONENTS
// import AppBody from './body/AppBody'

// IMG
// import logo from './../assets/img/tn-logo.png'


class App extends Component {
  
  render() {

    const sys_state = this.props.sys_state

    return (
      
      <div className='app-cont'>

        <p style={{textAlign: 'center', width: '90%', paddingTop: '50px'}} > 
          <i style={{fontSize: '40px'}} className="fa fa-star" />
        </p>

        <p style={{textAlign: 'center', width: '100%', paddingTop: '50px'}} > 
          <i style={{fontSize: '60px'}} className="fa fa-cube" />
        </p>

      </div>
    )
  }
}



const mapStateToProps = state => ({
    sys_state: state
})

App.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(App)