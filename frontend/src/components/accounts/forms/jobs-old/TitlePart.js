import React from 'react'
import { Form, Button } from 'react-bootstrap'

const TitlePart = ({ setFormData, formData, navigation }) => {
  const { title, description } = formData
  const { next } = navigation
  return (
    <>
      <h4>Title and Description</h4>
      <hr />
      <div className='mt-4'>
        <Form.Group controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            name='title'
            value={title}
            onChange={setFormData}
          />
        </Form.Group>
        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            name='description'
            value={description}
            onChange={setFormData}
          />
        </Form.Group>
        <Form.Group className='mt-3' style={{ textAlign: 'right' }}>
          <Button variant='primary' onClick={next}>
            Next
          </Button>
        </Form.Group>
      </div>
    </>
  )
}

export default TitlePart
