import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'

// Import Libraries
import { Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaRegEnvelope } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

// Import Components
import Screen from '../../components/auth/Screen'
import Alerts from '../../components/layout/Alerts'
import AuthLoader from '../../components/layout/AuthLoader'

// Import Redux Stuff
import { connect } from 'react-redux'
import { resetPasswordRequest } from '../../actions/auth'

const ForgetPassword = ({ resetPasswordRequest, isAuthenticated, loading }) => {
  const { register, handleSubmit, errors } = useForm()

  // Button Loader
  const loader = () => <AuthLoader />

  // On Form Submit
  const onSubmit = (data) => {
    const { email } = data
    resetPasswordRequest(email)
  }

  // Check if user authenticated
  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <Screen>
      <Helmet>
        <title>Forget Password</title>
      </Helmet>
      <Container className='auth-page'>
        <Row>
          <Col md={6} className='m-auto'>
            <h1>Forget Password</h1>
            <p>
              Please enter your Work Email Address below to reset your password.
            </p>
            <Alerts />
            <Form className='my-4' onSubmit={handleSubmit(onSubmit)}>
              <div className='input-field'>
                <Form.Group controlId='formBasicEmail'>
                  <FaRegEnvelope className='icon' />
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    name='email'
                    ref={register({ required: true })}
                    autoComplete='new-email2'
                  />
                </Form.Group>
                <Form.Text className='text-danger'>
                  {errors.email && 'Please enter a valid email.'}
                </Form.Text>
              </div>
              <Button className='py-2' variant='primary' type='submit' block>
                {loading ? loader() : 'Reset Password'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Screen>
  )
}

// Import States
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
})

export default connect(mapStateToProps, { resetPasswordRequest })(
  ForgetPassword
)
