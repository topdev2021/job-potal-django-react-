import React, { useState } from 'react'
import { Modal, Form, Col, Button } from 'react-bootstrap'

// Import Redux Stuff
import { connect } from 'react-redux'
import { addAvailability } from '../../../../actions/profile'

const ProfileAvailabilityModal = ({ show, onHide, user, addAvailability }) => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    availability_type: '',
    ready_to_start_in: '',
  })

  const { availability_type, ready_to_start_in } = formData

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
    addAvailability(user.id, availability_type, ready_to_start_in)
    onHide(true)
    setValidated(true)
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='profile__modal'
    >
      <Modal.Header closeButton>
        <Modal.Title>Availability</Modal.Title>
      </Modal.Header>
      <Modal.Body className='pt-0'>
        <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
          <Form.Row>
            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Type of availability</Form.Label>
              <Form.Control
                as='select'
                required
                name='availability_type'
                value={availability_type}
                onChange={(e) => onChange(e)}
              >
                <option></option>
                <option value='Not Available'>Not Available</option>
                <option value='Part Time'>Part Time</option>
                <option value='Full Time'>Full Time</option>
                <option value='Pre FullTime'>Pre FullTime</option>
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                Please select type of availability
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Ready to start</Form.Label>
              <Form.Control
                as='select'
                required
                name='ready_to_start_in'
                value={ready_to_start_in}
                onChange={(e) => onChange(e)}
              >
                <option></option>
                <option value='now'>Now</option>
                <option value='in 1 week'>in 1 week</option>
                <option value='in 2 weeks'>in 2 weeks</option>
                <option value='in 1 month'>in 1 month</option>
                <option value='more than 1 month'>in more than 1 month</option>
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                Please select an option
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

export default connect(mapStateToProps, { addAvailability })(
  ProfileAvailabilityModal
)
