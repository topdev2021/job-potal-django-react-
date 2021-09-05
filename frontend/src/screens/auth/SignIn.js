import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'

// Import Libraries
import { Link, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaRegEnvelope, FaLock } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

// Import Components
import Screen from '../../components/auth/Screen'
import Alerts from '../../components/layout/Alerts'
import AuthLoader from '../../components/layout/AuthLoader'

// Import Redux Stuff
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

const SignIn = ({ login, isAuthenticated, loading }) => {
  const { register, handleSubmit, errors } = useForm()

  // Button Loader
  const loader = () => <AuthLoader />

  // On Form Submit
  const onSubmit = (data) => {
    const { email, password } = data
    login(email, password)
  }

  // Check if user authenticated
  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <Screen>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <Container className='auth-page'>
        <Row>
          <Col md={6} className='m-auto'>
            <h1>Sign In</h1>
            <p>Please sign in to see your account.</p>
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
                    autoComplete='new-email'
                  />
                </Form.Group>
                <Form.Text className='text-danger'>
                  {errors.email && 'Please enter a valid email.'}
                </Form.Text>
              </div>

              <div className='input-field'>
                <Form.Group controlId='formBasicPassword'>
                  <FaLock className='icon' />
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    name='password'
                    ref={register({ required: true })}
                    autoComplete='new-password'
                  />
                </Form.Group>
                <Form.Text className='text-danger'>
                  {errors.password && 'Please enter a password.'}
                </Form.Text>
              </div>

              <Button className='py-2' variant='primary' type='submit' block>
                {loading ? loader() : 'SIGNIN'}
              </Button>
            </Form>
            <div style={{ float: 'left' }}>
              <div>
                <Link to='/forget-password'>Forget Password?</Link>
              </div>
              <div style={{ textAlign: 'right' }}>
                <Link to='/signup'>Create an account</Link>
              </div>
            </div>
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

export default connect(mapStateToProps, { login })(SignIn)
