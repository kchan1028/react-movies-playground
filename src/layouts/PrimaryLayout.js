import React from 'react'
import { Route } from 'react-router-dom'
import PrimaryHeader from '../ui/PrimaryHeader'
import AppHomePage from '../pages/AppHomePage'

// Sub Layouts
import UserSubLayout from './UserSubLayout'
import ProductSubLayout from './ProductSubLayout'

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
        <Route path='/' exact component={AppHomePage} />
        <Route path='/users' component={UserSubLayout} />
        <Route path={`${match.path}/products`} component={ProductSubLayout} />
    </main>
  </div>
)

export default PrimaryLayout