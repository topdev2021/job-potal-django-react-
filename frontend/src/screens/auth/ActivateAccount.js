import React, { useState } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

// Import Libraries
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'

// Import Components
import Screen from '../../components/auth/Screen'

// Import Redux Stuff
import { connect } from 'react-redux'
import { activateAccount } from '../../actions/auth'

const SignUp = ({ activateAccount, match, isAuthenticated }) => {
  const [activated, setActivated] = useState(false)

  // Account activate function
  const accountVerify = (e) => {
    e.preventDefault()
    const uid = match.params.uid
    const token = match.params.token
    activateAccount(uid, token)
    setActivated(true)
  }

  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  if (activated) {
    return <Redirect to='/' />
  }

  return (
    <Screen>
      <Helmet>
        <title>Activate Account</title>
      </Helmet>
      <Container className='auth-page'>
        <Row>
          <Col md={6} className='m-auto'>
            <h1>Activate Account</h1>
            <p>Please click on button below to activate your account.</p>
            <Button variant='primary' onClick={(e) => accountVerify(e)}>
              Activate Account
            </Button>
          </Col>
        </Row>
      </Container>
    </Screen>
  )
}

// Import State
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {
  activateAccount,
})(SignUp)
