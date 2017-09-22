// STACK
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class App extends Component {
  
  render() {
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