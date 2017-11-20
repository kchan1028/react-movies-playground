import React from 'react'
import { Route } from 'react-router-dom'
import UserNav from '../ui/UserNav'

// Sub Layouts
import BrowseUsersPage from '../pages/BrowseUsersPage'
import AddUserPage from '../pages/AddUserPage'
import UserProfilePage from '../pages/UserProfilePage'

const UserSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
        <Route path={match.path} exact component={BrowseUsersPage} />
        <Route path={`${match.path}/add`} exact component={AddUserPage} />
        <Route path={`${match.path}/:userId`}  component={UserProfilePage} />
    </div>
  </div>
)

export default UserSubLayout