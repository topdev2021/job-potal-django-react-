import React from 'react'
import { Form, Button } from 'react-bootstrap'

const TitlePart = ({ values, onChange, nextStep }) => {
  const { title, description } = values

  const nextSection = (e) => {
    e.preventDefault()
    nextStep()
  }

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
            onChange={onChange('title')}
          />
        </Form.Group>
        <Form.Group controlId='description' className='mt-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            name='description'
            value={description}
            onChange={onChange('description')}
            style={{ minHeight: '100px' }}
          />
        </Form.Group>
        <Form.Group className='mt-3' style={{ textAlign: 'right' }}>
          <Button
            variant='primary'
            onClick={nextSection}
            disabled={!title || !description ? true : false}
          >
            Next
          </Button>
        </Form.Group>
      </div>
    </>
  )
}

export default TitlePart
