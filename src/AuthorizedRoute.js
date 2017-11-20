import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
//import { getLoggedUser } from './utils/xhr'

class AuthorizedRoute extends React.Component {

  componentWillMount() {
   // getLoggedUser()
  }

  render() {
    const { component: Component, pending, logged, ...rest } = this.props
    console.log('log',this.props)
    return (
      <Route {...rest} render={props => {
        return  <Component {...props} />
      }} />
    )
  }
}

const stateToProps = ({ loggedUserState }) => ({
  pending: loggedUserState.pending,
  logged: loggedUserState.logged
})

export default connect(stateToProps)(AuthorizedRoute)