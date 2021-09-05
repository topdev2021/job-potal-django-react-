import React from 'react'
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
import { resetPassword } from '../../actions/auth'

const SetPassword = ({ resetPassword, isAuthenticated, loading, match }) => {
  const { register, handleSubmit, errors, getValues } = useForm()

  // Button Loader
  const loader = () => <AuthLoader />

  // On Form Submit
  const onSubmit = (data) => {
    const uid = match.params.uid
    const token = match.params.token
    const { new_password, re_new_password } = data
    resetPassword(uid, token, new_password, re_new_password)
  }

  // Check if user authenticated
  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <Screen>
      <Helmet>
        <title>Set New Password</title>
      </Helmet>
      <Container className='auth-page'>
        <Row>
          <Col md={6} className='m-auto'>
            <h1>Set New Password</h1>
            <Alerts />
            <Form className='my-4' onSubmit={handleSubmit(onSubmit)}>
              <div className='input-field'>
                <Form.Group controlId='formNewPassword'>
                  <FaRegEnvelope className='icon' />
                  <Form.Control
                    type='password'
                    placeholder='New Password'
                    name='new_password'
                    ref={register({ required: true })}
                    autoComplete='new_password'
                  />
                </Form.Group>
                <Form.Text className='text-danger'>
                  {errors.new_password && 'Please enter a password.'}
                </Form.Text>
              </div>
              <div className='input-field'>
                <Form.Group controlId='formConfirmPassword'>
                  <FaRegEnvelope className='icon' />
                  <Form.Control
                    type='password'
                    placeholder='Confirm Password'
                    name='re_new_password'
                    ref={register({
                      required: 'You must specify confirm password.',
                      validate: (value) => {
                        if (value === getValues()['new_password']) {
                          return true
                        } else {
                          return 'Passwords do not match'
                        }
                      },
                    })}
                    autoComplete='re_new_password'
                  />
                </Form.Group>
                <Form.Text className='text-danger'>
                  {errors.re_new_password && errors.re_new_password.message}
                </Form.Text>
              </div>
              <Button className='py-2' variant='primary' type='submit' block>
                {loading ? loader() : 'Set Password'}
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

export default connect(mapStateToProps, { resetPassword })(SetPassword)
