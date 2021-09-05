import React, { useState } from 'react'
import { Modal, Form, Col, Button } from 'react-bootstrap'

// Import Redux Stuff
import { connect } from 'react-redux'
import { addEducation } from '../../../../actions/profile'

const ProfileEducationModal = ({ show, onHide, addEducation, user }) => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    degree: '',
    college: '',
    start_date: '',
    end_date: '',
  })

  const { degree, college, start_date, end_date } = formData

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
    addEducation(user.id, degree, college, start_date, end_date)
    onHide(true)
    setValidated(true)
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='profile__modal'
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Education</Modal.Title>
      </Modal.Header>
      <Modal.Body className='pt-0'>
        <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
          <Form.Row>
            <Form.Group as={Col} md='12' controlId='validationCustom04'>
              <Form.Label>Type of availability</Form.Label>
              <Form.Control
                type='text'
                placeholder='Degree'
                name='degree'
                value={degree}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your degree
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='12' controlId='validationCustom04'>
              <Form.Label>College</Form.Label>
              <Form.Control
                type='text'
                placeholder='College'
                name='college'
                value={college}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your college
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type='date'
                name='start_date'
                value={start_date}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please select start date
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type='date'
                name='end_date'
                value={end_date}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please select end date
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

export default connect(mapStateToProps, { addEducation })(ProfileEducationModal)
