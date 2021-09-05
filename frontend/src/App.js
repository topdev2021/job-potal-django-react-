import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Screens
import Home from './screens/Home'
import SignIn from './screens/auth/SignIn'
import SignUp from './screens/auth/SignUp'
import ActivateAccount from './screens/auth/ActivateAccount'
import ForgetPassword from './screens/auth/ForgetPassword'
import SetPassword from './screens/auth/SetPassword'
import JobListings from './screens/jobs/JobListings'
import HireEngineers from './screens/hiring/HireEngineers'
import Dashboard from './screens/accounts/Dashboard'
import Settings from './screens/accounts/Settings'
import JobsList from './screens/accounts/jobs/JobsList'
import JobDetail from './screens/accounts/jobs/JobDetail'
import TechnicalAssessment from './screens/accounts/TechnicalAssessment'
import Profile from './screens/accounts/Profile'
import AssessmentTest from './screens/accounts/test/AssessmentTest'
import AddJob from './screens/accounts/jobs/AddJob'
import UserDetail from './screens/accounts/users/UserDetail'

// Store Settings
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route
            exact
            path='/activate/:uid/:token'
            component={ActivateAccount}
          />
          <Route exact path='/forget-password' component={ForgetPassword} />
          <Route
            exact
            path='/password/reset/confirm/:uid/:token'
            component={SetPassword}
          />
          <Route exact path='/jobs' component={JobListings} />
          <Route exact path='/hire-engineers' component={HireEngineers} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/profile' component={Profile} />
          <Route exact path='/jobs-list' component={JobsList} />
          <Route exact path='/job-detail/:id' component={JobDetail} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/add-job' component={AddJob} />
          <Route exact path='/user-detail/:id' component={UserDetail} />
          <Route
            exact
            path='/technical-assessment'
            component={TechnicalAssessment}
          />
          <Route exact path='/assessment-test' component={AssessmentTest} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
