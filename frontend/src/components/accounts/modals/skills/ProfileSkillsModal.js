import React, { useState, Fragment } from 'react'
import { Modal, Form, Col, Button, Row } from 'react-bootstrap'

// Import Redux Stuff
import { connect } from 'react-redux'
import { AddUserSkills } from '../../../../actions/profile'

const ProfileSkillsModal = ({
  show,
  onHide,
  AddUserSkills,
  user,
  userSkills,
}) => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    skills: [
      {
        id: 1,
        text: 'React',
        value: 'React',
        rating: 0,
        isChecked: false,
      },
      {
        id: 2,
        text: 'Node.js',
        value: 'Node.js',
        rating: 0,
        isChecked: false,
      },
      {
        id: 3,
        text: 'Python',
        value: 'Python',
        rating: 0,
        isChecked: false,
      },
      {
        id: 4,
        text: 'Angular',
        value: 'Angular',
        rating: 0,
        isChecked: false,
      },
      {
        id: 5,
        text: 'Swift',
        value: 'Swift',
        rating: 0,
        isChecked: false,
      },
      {
        id: 6,
        text: 'React Native',
        value: 'React Native',
        rating: 0,
        isChecked: false,
      },
      {
        id: 7,
        text: 'Android',
        value: 'Android',
        rating: 0,
        isChecked: false,
      },
      {
        id: 8,
        text: 'Java',
        value: 'Java',
        rating: 0,
        isChecked: false,
      },
      {
        id: 9,
        text: 'Ruby on Rails',
        value: 'Ruby on Rails',
        rating: 0,
        isChecked: false,
      },
      { id: 10, text: 'Go', value: 'Go', rating: 0, isChecked: false },
      {
        id: 11,
        text: 'Vue.js',
        value: 'Vue.js',
        rating: 0,
        isChecked: false,
      },
      {
        id: 12,
        text: 'PHP',
        value: 'PHP',
        rating: 0,
        isChecked: false,
      },
      {
        id: 13,
        text: 'DevOps',
        value: 'DevOps',
        rating: 0,
        isChecked: false,
      },
      {
        id: 14,
        text: 'Machine Learning',
        value: 'Machine Learning',
        rating: 0,
        isChecked: false,
      },
      {
        id: 15,
        text: 'Scala',
        value: 'Scala',
        rating: 0,
        isChecked: false,
      },
      {
        id: 16,
        text: 'TypeScript',
        value: 'TypeScript',
        rating: 0,
        isChecked: false,
      },
    ],
  })

  const { skills } = formData

  // Skills Checks
  const handleCheckSkills = (e) => {
    let skill = skills
    skill.forEach((s) => {
      if (s.value === e.target.value) s.isChecked = e.target.checked
    })
    setFormData({ ...formData, skills: skill })
  }

  // SELECTED SKILLS
  const selectedSkills = skills.filter((skill) => skill.isChecked === true)

  // Skills Checks
  const handleChangeRating = (e) => {
    let skill = skills
    skill.filter((s) => {
      if (s.id == e.target.id) s.rating = parseInt(e.target.value)
    })
    setFormData({ ...formData, skills: skill })
  }

  //   const onChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value })
  //   }

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    selectedSkills.map((skill) =>
      AddUserSkills(user.id, skill.text, skill.rating)
    )
    window.location.reload()
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
        <Modal.Title>Add Skills</Modal.Title>
      </Modal.Header>
      <Modal.Body className='pt-0'>
        <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
          <div className='mt-2 skills'>
            <Form.Group controlId='skills'>
              <div className='radio-toolbar'>
                {skills.map((s, id) =>
                  userSkills.filter((us) => us.name === s.text).length === 0 ? (
                    <Fragment key={id}>
                      <Form.Check
                        inline
                        id={id}
                        value={s.value}
                        checked={s.isChecked}
                        label={s.text}
                        name='name'
                        onChange={(e) => handleCheckSkills(e)}
                      />
                    </Fragment>
                  ) : (
                    <Fragment key={id}>
                      <Form.Check
                        inline
                        id={id}
                        value={s.value}
                        checked={s.isChecked}
                        label={s.text}
                        name='name'
                        onChange={(e) => handleCheckSkills(e)}
                        disabled
                      />
                    </Fragment>
                  )
                )}
              </div>
            </Form.Group>

            <Form.Group className='mt-3'>
              {selectedSkills.map((skill) => (
                <Row key={skill.id} className='skill__fields mb-2'>
                  <Col md={9}>
                    <Form.Control type='text' value={skill.text} disabled />
                  </Col>
                  <Col md={3}>
                    <Form.Control
                      type='number'
                      name='rating'
                      onChange={(e) => handleChangeRating(e)}
                      placeholder='Required Rating'
                      value={skill.rating > 0 ? skill.rating : ''}
                      id={skill.id}
                      pattern='^-?[0-9]\d*\.?\d*$'
                    />
                  </Col>
                </Row>
              ))}
            </Form.Group>
          </div>

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
  userSkills: state.profile.userSkills,
})

export default connect(mapStateToProps, { AddUserSkills })(ProfileSkillsModal)
