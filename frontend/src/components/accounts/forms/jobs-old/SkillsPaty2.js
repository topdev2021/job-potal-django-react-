import React, { Fragment } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const SkillsPart = ({
  values,
  onChange,
  handleInputChange,
  nextStep,
  prevStep,
  setFormData,
  formData,
}) => {
  const { skills, email } = values

  const jobSkills = [
    { text: 'React', value: 'React', isChecked: false },
    { text: 'Node.js', value: 'Node.js', isChecked: false },
    { text: 'Python', value: 'Python', isChecked: false },
    { text: 'Angular', value: 'Angular', isChecked: false },
    { text: 'Swift', value: 'Swift', isChecked: false },
    { text: 'React Native', value: 'React Native', isChecked: false },
    { text: 'Android', value: 'Android', isChecked: false },
    { text: 'Java', value: 'Java', isChecked: false },
    { text: 'Ruby on Rails', value: 'Ruby on Rails', isChecked: false },
    { text: 'Go', value: 'Go', isChecked: false },
    { text: 'Vue.js', value: 'Vue.js', isChecked: false },
    { text: 'PHP', value: 'PHP', isChecked: false },
    { text: 'DevOps', value: 'DevOps', isChecked: false },
    { text: 'Machine Learning', value: 'Machine Learning', isChecked: false },
    { text: 'Scala', value: 'Scala', isChecked: false },
    { text: 'TypeScript', value: 'TypeScript', isChecked: false },
  ]

  // Skills Checks
  const handleCheckSkills = (e) => {
    let skill = skills
    skill.forEach((s) => {
      if (s.value === e.target.value) s.isChecked = e.target.checked
    })
    setFormData({ ...formData, skills: skill })
    console.log(skills)
  }

  return (
    <>
      <h4>Skills</h4>
      <hr />
      <div className='mt-4 skills'>
        <Form.Group controlId='skills'>
          <Form.Label>Skills</Form.Label>
          {/* {skills.map((s, i) => (
            <Row key={i}>
              <Col md={8}>
                <Form.Control
                  as='select'
                  name='skill'
                  value={skills.skill}
                  onChange={(e) => handleInputChange(e, i)}
                >
                  <option>Select Skill</option>
                  {jobSkills.map((skill, key) => (
                    <option key={key}>{skill.text}</option>
                  ))}
                </Form.Control>
              </Col>
              <Col md={3}>
                <Form.Control
                  type='number'
                  name='rating'
                  value={skills.rating}
                  onChange={(e) => handleInputChange(e, i)}
                  placeholder='Enter Rating'
                />
              </Col>
              <Col md={1}>
                <>
                  {skills.length !== 1 && (
                    <Button onClick={() => handleRemoveClick(i)}>Remove</Button>
                  )}
                  {skills.length - 1 === i && (
                    <Button variant='primary' onClick={handleAddClick}>
                      Add
                    </Button>
                  )}
                </>
              </Col>
            </Row>
          ))} */}
          <div className='radio-toolbar'>
            {skills.map((s, id) => (
              <Fragment key={id}>
                <Form.Check
                  id={id}
                  value={s.value}
                  checked={s.isChecked}
                  label={s.text}
                  name='skills'
                  onChange={(e) => handleCheckSkills(e)}
                />
                {/* <label htmlFor={id}>{s.text}</label> */}
              </Fragment>
            ))}
          </div>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Work email address</Form.Label>
          <Form.Control
            type='text'
            name='email'
            onChange={onChange('email')}
            value={email}
          />
        </Form.Group>
        <Form.Group className='mt-3' style={{ textAlign: 'right' }}>
          <Button variant='info' onClick={prevStep}>
            Previous
          </Button>{' '}
          <Button variant='primary' onClick={nextStep}>
            Next
          </Button>
        </Form.Group>
      </div>
    </>
  )
}

export default SkillsPart
