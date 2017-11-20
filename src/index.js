import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import AuthorizedRoute from './AuthorizedRoute'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

// Layouts
import PrimaryLayout from './layouts/PrimaryLayout'
//import UnauthorizedLayout from './layouts/UnauthorizedLayout'

// ** See notes on this `<App>` component at the bottom of this file **
const App = props => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          
          <AuthorizedRoute component={PrimaryLayout} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker();
