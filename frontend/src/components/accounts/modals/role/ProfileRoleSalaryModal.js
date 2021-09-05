import React, { useState } from 'react'
import { Modal, Form, Col, Button } from 'react-bootstrap'

// Import Redux Stuff
import { connect } from 'react-redux'
import { addRole } from '../../../../actions/profile'

const ProfileRoleSalaryModal = ({ show, onHide, addRole, user }) => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    preferred_role: '',
    current_salary: '',
  })

  const { preferred_role, current_salary } = formData

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
    addRole(user.id, preferred_role, current_salary)
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
        <Modal.Title>Role and current salary</Modal.Title>
      </Modal.Header>
      <Modal.Body className='pt-0'>
        <p className='mb-3'>
          Turing offers full-time (40 hours/week), long-term (multiple years)
          engagements with a career development track. Enter your current salary
          for a full-time, local position.
        </p>
        <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
          <Form.Row>
            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Preferred role</Form.Label>
              <Form.Control
                as='select'
                required
                name='preferred_role'
                value={preferred_role}
                onChange={(e) => onChange(e)}
              >
                <option></option>
                <option value='Web Frontend'>Web Frontend</option>
                <option value='Web Backend'>Web Backend</option>
                <option value='Fullstack (BE Heavy)'>
                  Fullstack (BE Heavy)
                </option>
                <option value='Fullstack (FE Heavy)'>
                  Fullstack (FE Heavy)
                </option>
                <option value='Mobile'>Mobile</option>
                <option value='Machine Learning'>Machine Learning</option>
                <option value='DevOps'>DevOps</option>
                <option value='Other'>Other</option>
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                Please select a role
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Current annual salary</Form.Label>
              <Form.Control
                type='text'
                placeholder='Years of remote experience'
                name='current_salary'
                value={current_salary}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please select current annual salary
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

// Import State
const mapStateToProps = (state) => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { addRole })(ProfileRoleSalaryModal)
