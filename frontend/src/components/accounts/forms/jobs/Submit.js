import React, { useState } from 'react'
import { Button, Row, Col, Card, Form, Table } from 'react-bootstrap'

// Import Libraries
import { Redirect } from 'react-router-dom'

// Import Redux Stuff
import { connect } from 'react-redux'
import { AddJob } from '../../../../actions/job'

const Submit = ({ values, prevStep, AddJob, user }) => {
  const [success, setSuccess] = useState(false)

  const {
    title,
    description,
    skills,
    work_email,
    hiring_needs,
    current_employees,
    name,
    phone,
    website,
  } = values

  const selectedSkills = skills.filter((skill) => skill.isChecked === true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title,
      description,
      selectedSkills,
      work_email,
      hiring_needs,
      current_employees,
      name,
      phone,
      website,
    }
    if (
      AddJob(
        user.id,
        title,
        description,
        work_email,
        hiring_needs,
        current_employees,
        name,
        phone,
        website,
        selectedSkills
      )
    ) {
      setSuccess(!success)
    }
  }

  if (success) {
    return <Redirect to='/job-detail/2' />
  }

  return (
    <>
      <h4>Review your job</h4>
      <hr />
      <Card>
        <Card.Body>
          <Row>
            <Col md={12}>
              <h5>Title and Description</h5>
            </Col>
            <Col md={12} className='mt-3'>
              <p>
                <b>Title:</b> {`${title}`}
              </p>
              <p>
                <b>Description:</b> {`${description}`}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className='mt-3 submit__skills__view'>
        <Card.Body>
          <Row>
            <Col md={12}>
              <h5>Skills</h5>
            </Col>
            <Col md={12} className='mt-3'>
              <b>Skills:</b>{' '}
              <Table size='sm' className='mt-3'>
                <tbody>
                  {selectedSkills.map((skill) => (
                    <tr key={skill.id}>
                      <td>{skill.text}</td>
                      <td>{skill.rating > 0 ? skill.rating : ''}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className='mt-3'>
        <Card.Body>
          <Row>
            <Col md={12}>
              <h5>Basic Info</h5>
            </Col>
            <Col md={12} className='mt-3'>
              <p>
                <b>Job Type:</b> {`${hiring_needs}`}
              </p>
              <p>
                <b>Company Size:</b> {`${current_employees}`}
              </p>
              <p>
                <b>Name:</b> {`${name}`}
              </p>
              <p>
                <b>Phone:</b> {`${phone}`}
              </p>
              <p>
                <b>Website:</b> {`${website}`}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Form.Group className='mt-4' style={{ textAlign: 'right' }}>
        <Button variant='info' onClick={prevStep}>
          Back
        </Button>{' '}
        <Button variant='primary' onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form.Group>
    </>
  )
}

// Import States
const mapStateToProps = (state) => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { AddJob })(Submit)
