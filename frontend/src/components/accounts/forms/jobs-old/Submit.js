import React from 'react'
import { Button, Row, Col, Card, Form } from 'react-bootstrap'

const Submit = ({ formData, navigation }) => {
  const {
    title,
    description,
    skills,
    hiring_need,
    company_size,
    name,
    phone,
    website,
  } = formData
  const { go, previous } = navigation

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <h4>Review your data</h4>
      <hr />
      <Card>
        <Card.Body>
          <Row>
            <Col md={10}>
              <h5>Title and Description</h5>
            </Col>
            <Col md={2} style={{ textAlign: 'right' }}>
              <Button variant='info' onClick={() => go('title')} size='sm'>
                Edit
              </Button>
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

      <Card className='mt-3'>
        <Card.Body>
          <Row>
            <Col md={10}>
              <h5>Skills</h5>
            </Col>
            <Col md={2} style={{ textAlign: 'right' }}>
              <Button variant='info' onClick={() => go('skills')} size='sm'>
                Edit
              </Button>
            </Col>
            <Col md={12} className='mt-3'>
              <p>
                <b>Skills:</b>{' '}
                {skills.map((skill) => (
                  <>{skill.isChecked}</>
                ))}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className='mt-3'>
        <Card.Body>
          <Row>
            <Col md={10}>
              <h5>Basic Info</h5>
            </Col>
            <Col md={2} style={{ textAlign: 'right' }}>
              <Button variant='info' onClick={() => go('basic_info')} size='sm'>
                Edit
              </Button>
            </Col>
            <Col md={12} className='mt-3'>
              <p>
                <b>Job Type:</b> {`${hiring_need}`}
              </p>
              <p>
                <b>Company Size:</b> {`${company_size}`}
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
        <Button variant='info' onClick={previous}>
          Back
        </Button>{' '}
        <Button variant='primary' onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form.Group>
    </>
  )
}

export default Submit
