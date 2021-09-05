import React, { useState, useEffect } from 'react'
import { Modal, Form, Col, Button } from 'react-bootstrap'

// Import Redux Stuff
import { connect } from 'react-redux'
import {
  getSingleExperience,
  updateExperience,
} from '../../../../actions/profile'

const EditProfileExperienceModal = ({
  id,
  show,
  onHide,
  user,
  getSingleExperience,
  updateExperience,
  userExperience,
}) => {
  useEffect(() => {
    if (show) {
      getSingleExperience(id)
    }
  }, [getSingleExperience, id])

  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    years_of_experience: userExperience && userExperience.years_of_experience,
    years_of_remote_experience:
      userExperience && userExperience.years_of_remote_experience,
    english_proficiency: userExperience && userExperience.english_proficiency,
  })

  const {
    years_of_experience,
    years_of_remote_experience,
    english_proficiency,
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
    updateExperience(
      id,
      user.id,
      years_of_experience,
      years_of_remote_experience,
      english_proficiency
    )
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
        <Modal.Title>Update Overall Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body className='pt-0'>
        <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
          <Form.Row>
            <Form.Group as={Col} md='6' controlId='validationCustom03'>
              <Form.Label>Years of experience</Form.Label>
              <Form.Control
                type='text'
                placeholder='Years of experience'
                name='years_of_experience'
                value={years_of_experience}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Years of experience must be a number from 0 to 50
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Years of remote experience</Form.Label>
              <Form.Control
                type='text'
                placeholder='Years of remote experience'
                name='years_of_remote_experience'
                value={years_of_remote_experience}
                onChange={(e) => onChange(e)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Years of remote experience must be a number from 0 to 50
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>English proficiency</Form.Label>
              <Form.Control
                as='select'
                required
                name='english_proficiency'
                value={english_proficiency}
                onChange={(e) => onChange(e)}
              >
                <option></option>
                <option value='Great'>Great</option>
                <option value='Average'>Average</option>
                <option value='Basic'>Basic</option>
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
  userExperience: state.profile.userExperience,
})

export default connect(mapStateToProps, {
  getSingleExperience,
  updateExperience,
})(EditProfileExperienceModal)
