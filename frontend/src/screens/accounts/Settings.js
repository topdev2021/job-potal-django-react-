import React from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'

// Import Libraries
import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet'

// Import Components
import Screen from '../../components/accounts/Screen'
import PageTitle from '../../components/accounts/PageTitle'
import Alerts from '../../components/layout/Alerts'
import AuthLoader from '../../components/layout/AuthLoader'

// Import Redux Stuff
import { connect } from 'react-redux'
import { update_password } from '../../actions/auth'

const Settings = ({ update_password, loading, user }) => {
  const { register, handleSubmit, errors, getValues } = useForm()

  // Button Loader function
  const loader = () => <AuthLoader />

  // On Form Submit
  const onSubmit = (data) => {
    const { current_password, new_password, re_new_password } = data
    update_password(current_password, new_password, re_new_password)
  }

  return (
    <Screen>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <PageTitle title='Account Settings' />
      <Container fluid className='p-0'>
        <Row>
          <Col md={12}>
            <h5>
              <b>Email Address</b>
            </h5>
            <p>{user.email}</p>
          </Col>
          <Col md={6} className='mt-3'>
            <h5>
              <b>Update Your Password</b>
            </h5>
            <Alerts />
            <Form className='my-4' onSubmit={handleSubmit(onSubmit)}>
              <div className='input-field'>
                <Form.Group controlId='formCurrentPassword'>
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Current Password'
                    name='current_password'
                    ref={register({ required: true })}
                    autoComplete='current_password'
                  />
                </Form.Group>
                <Form.Text className='text-danger'>
                  {errors.current_password &&
                    'Please enter your current password.'}
                </Form.Text>
              </div>

              <div className='input-field'>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='New Password'
                    name='new_password'
                    ref={register({ required: true })}
                    autoComplete='new-password'
                  />
                </Form.Group>
                <Form.Text className='text-danger'>
                  {errors.new_password && 'Please enter a password.'}
                </Form.Text>
              </div>

              <div className='input-field'>
                <Form.Group controlId='formBasicPassword2'>
                  <Form.Label>Confirm Password</Form.Label>
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
                    autoComplete='new-password'
                  />
                </Form.Group>
                <Form.Text className='text-danger'>
                  {errors.re_new_password && errors.re_new_password.message}
                </Form.Text>
              </div>

              <Button className='py-2' variant='dark' type='submit'>
                Update Password {loading ? loader() : ''}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Screen>
  )
}

// Import State
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  user: state.auth.user,
})

export default connect(mapStateToProps, { update_password })(Settings)
