import React, { useState, useEffect } from 'react'
import { Modal, Form, Col, Button } from 'react-bootstrap'

// Import Redux Stuff
import { connect } from 'react-redux'
import {
  updateProfile,
  getSingleProfileInfo,
} from '../../../../actions/profile'

const EditProfileInfoModal = ({
  id,
  show,
  onHide,
  updateProfile,
  getSingleProfileInfo,
  userData,
  user,
}) => {
  useEffect(() => {
    if (show) {
      getSingleProfileInfo(id)
    }
  }, [getSingleProfileInfo, id])

  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    first_name: userData && userData.first_name,
    last_name: userData && userData.last_name,
    country: userData && userData.country,
    phone: userData && userData.phone,
    bio: userData && userData.bio,
    github_username: userData ? userData.github_username : '',
    linkedin_username: userData ? userData.linkedin_username : '',
  })

  const {
    first_name,
    last_name,
    country,
    phone,
    bio,
    github_username,
    linkedin_username,
  } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    updateProfile(
      id,
      user.id,
      first_name,
      last_name,
      country,
      phone,
      bio,
      github_username,
      linkedin_username
    )
    onHide(true)
    setValidated(true)
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
      size='lg'
      className='profile__modal'
    >
      <Modal.Header closeButton>
        <Modal.Title>Update Developer Information</Modal.Title>
      </Modal.Header>
      <Modal.Body className='pt-0'>
        <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
          <Form.Row>
            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='First Name'
                name='first_name'
                value={first_name}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your first name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Last name'
                name='last_name'
                value={last_name}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your last name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type='text'
                name='country'
                value={country}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please add your country.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type='text'
                name='phone'
                value={phone}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please add your phone number.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='12' controlId='validationCustom04'>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as='textarea'
                name='bio'
                value={bio}
                rows={3}
                onChange={(e) => onChange(e)}
                className='text-area'
              />
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Github Username (optional)</Form.Label>
              <Form.Control
                type='text'
                name='github_username'
                value={github_username}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Linkedin Username (optional)</Form.Label>
              <Form.Control
                type='text'
                name='linkedin_username'
                value={linkedin_username}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
          </Form.Row>

          <Button variant='primary' type='submit' className='mt-3'>
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

// Import State
const mapStateToProps = (state) => ({
  user: state.auth.user,
  userData: state.profile.userData,
})

export default connect(mapStateToProps, {
  updateProfile,
  getSingleProfileInfo,
})(EditProfileInfoModal)
