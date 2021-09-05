import React, { Fragment } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

// import { FaAdn } from 'react-icons/fa'

const SkillsPart = ({
  values,
  onChange,
  nextStep,
  prevStep,
  setFormData,
  formData,
}) => {
  const { skills, work_email } = values

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

  return (
    <>
      <h4>Skills</h4>
      <hr />
      <div className='mt-4 skills'>
        <Form.Group controlId='skills'>
          <Form.Label>Skills</Form.Label>
          <div className='radio-toolbar'>
            {skills.map((s, id) => (
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
            ))}
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

        <Form.Group controlId='email' className='mt-3'>
          <Form.Label>Work email address</Form.Label>
          <Form.Control
            type='email'
            name='work_email'
            onChange={onChange('work_email')}
            value={work_email}
          />
        </Form.Group>
        <Form.Group className='mt-3' style={{ textAlign: 'right' }}>
          <Button variant='info' onClick={prevStep}>
            Previous
          </Button>{' '}
          <Button
            variant='primary'
            onClick={nextStep}
            disabled={!work_email || !skills ? true : false}
          >
            Next
          </Button>
        </Form.Group>
      </div>
    </>
  )
}

export default SkillsPart
