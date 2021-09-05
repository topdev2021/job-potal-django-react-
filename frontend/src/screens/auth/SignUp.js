import React from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'

// Import Libraries
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaRegEnvelope, FaLock, FaRegUser } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

// Import Components
import Screen from '../../components/auth/Screen'
import Alerts from '../../components/layout/Alerts'
import AuthLoader from '../../components/layout/AuthLoader'

// Import Redux Stuff
import { connect } from 'react-redux'
import { registerUser } from '../../actions/auth'
import { setAlert } from '../../actions/alert'

const SignUp = ({ registerUser, loading, isAuthenticated, setAlert }) => {
  const { register, handleSubmit, errors, getValues } = useForm()

  // Button Loader
  const loader = () => <AuthLoader />

  // On Form Submit
  const onSubmit = (data) => {
    const { name, email, type, password, re_password } = data
    if (password !== re_password) {
      setAlert('Passwords are not same.', 'light')
    } else {
      registerUser(name, email, type, password, re_password)
    }
  }

  return (
    <Screen>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <Container className='auth-page'>
        <Row>
          <Col md={6} className='m-auto'>
            <h1>Sign Up</h1>
            <p>Please sign up to see your account.</p>
            <Alerts />
            <Form className='my-4' onSubmit={handleSubmit(onSubmit)}>
              {/* <Form.Control
                type='hidden'
                name='type'
                ref={register}
                value='user'
              /> */}
              <div className='input-field'>
                <Form.Group controlId='formBasicName'>
                  <FaRegUser className='icon' />
                  <Form.Control
                    type='text'
                    placeholder='Name'
                    name='name'
                    ref={register({ required: true })}
                    autoComplete='new-name'
                  />
                </Form.Group>
                <Form.Text className='text-danger'>
                  {errors.email && 'Please enter a valid email.'}
                </Form.Text>
              </div>

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

              <div className='input-field'>
                <Form.Group controlId='formBasicPassword2'>
                  <FaLock className='icon' />
                  <Form.Control
                    type='password'
                    placeholder='Confirm Password'
                    name='re_password'
                    ref={register({
                      required: 'You must specify confirm password.',
                      validate: (value) => {
                        if (value === getValues()['password']) {
                          return true
                        } else {
                          return 'Passwords do not match'
                        }
                      },
                    })}
                    autoComplete='new-password'
                  />
                </Form.Group>
                <Form.Text className='text-danger'>
                  {errors.re_password && errors.re_password.message}
                </Form.Text>
              </div>

              <div className='input-field'>
                <Form.Label>
                  <b>Account Type</b>
                </Form.Label>
                <br />
                <Form.Check
                  inline
                  label='Company'
                  type='radio'
                  name='type'
                  id='inline-radio-1'
                  value='company'
                  ref={register({ required: true })}
                />
                <Form.Check
                  inline
                  label='User'
                  type='radio'
                  name='type'
                  id='inline-radio-2'
                  value='user'
                  ref={register}
                />
                <Form.Text className='text-danger'>
                  {errors.type && 'Please select an account type.'}
                </Form.Text>
              </div>

              <Button className='py-2' variant='primary' type='submit' block>
                {loading ? loader() : 'SIGNUP'}
              </Button>
            </Form>
            <Link to='signin'>Already an account?</Link>
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

export default connect(mapStateToProps, { registerUser, setAlert })(SignUp)
