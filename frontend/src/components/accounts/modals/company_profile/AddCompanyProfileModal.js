import React, { useState } from 'react'
import { Modal, Form, Col, Button } from 'react-bootstrap'

// Import Redux Stuff
import { connect } from 'react-redux'
import { addCompanyProfile } from '../../../../actions/profile'

const AddCompanyProfileModal = ({ show, onHide, addCompanyProfile, user }) => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    phone: '',
    address: '',
    website: '',
    linkedin_link: '',
    twitter_link: '',
  })

  const {
    name,
    about,
    phone,
    address,
    website,
    linkedin_link,
    twitter_link,
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
    addCompanyProfile(
      user.id,
      name,
      about,
      phone,
      address,
      website,
      linkedin_link,
      twitter_link
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
        <Modal.Title>Add Company Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body className='pt-0'>
        <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
          <Form.Row>
            <Form.Group as={Col} md='12' controlId='validationCustom04'>
              <Form.Label>Type of availability</Form.Label>
              <Form.Control
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your company name
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='12' controlId='validationCustom04'>
              <Form.Label>About</Form.Label>
              <Form.Control
                as='textarea'
                name='about'
                value={about}
                rows={3}
                onChange={(e) => onChange(e)}
                className='text-area'
              />
            </Form.Group>

            <Form.Group as={Col} md='12' controlId='validationCustom04'>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type='text'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your company phone
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='12' controlId='validationCustom04'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Address'
                name='address'
                value={address}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your company address
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='12' controlId='validationCustom04'>
              <Form.Label>Website</Form.Label>
              <Form.Control
                type='text'
                placeholder='Website'
                name='website'
                value={website}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your company website
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='12' controlId='validationCustom04'>
              <Form.Label>Linkedin Profile</Form.Label>
              <Form.Control
                type='text'
                placeholder='Linkedin Profile'
                name='linkedin_link'
                value={linkedin_link}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your company linkedin profile
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='12' controlId='validationCustom04'>
              <Form.Label>Twitter</Form.Label>
              <Form.Control
                type='text'
                placeholder='Twitter'
                name='twitter_link'
                value={twitter_link}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your company twitter
              </Form.Control.Feedback>
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

// Import States
const mapStateToProps = (state) => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { addCompanyProfile })(
  AddCompanyProfileModal
)
