import React, { Fragment } from 'react'
import { Form, Button } from 'react-bootstrap'

const BasicInfoPart = ({ setFormData, formData, navigation }) => {
  const { company_size, hiring_need, name, phone, website } = formData
  const { previous, next } = navigation

  const hiringNeeds = [
    {
      id: 1,
      title: 'Part Time',
    },
    {
      id: 2,
      title: 'Fulltime',
    },
  ]

  const companySize = [
    {
      id: 3,
      title: '1-3',
    },
    {
      id: 4,
      title: '4-10',
    },
    {
      id: 5,
      title: '11-50',
    },
    {
      id: 6,
      title: '51-1000',
    },
    {
      id: 7,
      title: '1000+',
    },
  ]

  return (
    <>
      <h4>Information</h4>
      <hr />
      <div className='mt-4 basic_info'>
        <Form.Group>
          <Form.Label>Your hiring needs</Form.Label>
          <div className='radio-toolbar'>
            {hiringNeeds.map((hn) => (
              <Fragment key={hn.id}>
                <input
                  type='radio'
                  name='hiring_need'
                  id={hn.id}
                  value={hn.title}
                  onChange={setFormData}
                />
                <label htmlFor={hn.id}>{hn.title}</label>
              </Fragment>
            ))}
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Current employees in your company</Form.Label>
          <div className='radio-toolbar'>
            {companySize.map((cs) => (
              <Fragment key={cs.id}>
                <input
                  type='radio'
                  name='company_size'
                  id={cs.id}
                  value={cs.title}
                  onChange={setFormData}
                />
                <label htmlFor={cs.id}>{cs.title}</label>
              </Fragment>
            ))}
          </div>
        </Form.Group>

        <Form.Group controlId='name'>
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={name}
            onChange={setFormData}
          />
        </Form.Group>
        <Form.Group controlId='phone'>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type='text'
            name='phone'
            value={phone}
            onChange={setFormData}
          />
        </Form.Group>
        <Form.Group controlId='website'>
          <Form.Label>Company Website</Form.Label>
          <Form.Control
            type='text'
            name='website'
            value={website}
            onChange={setFormData}
          />
        </Form.Group>
        <Form.Group className='mt-3' style={{ textAlign: 'right' }}>
          <Button variant='info' onClick={previous}>
            Previous
          </Button>{' '}
          <Button variant='primary' onClick={next}>
            Next
          </Button>
        </Form.Group>
      </div>
    </>
  )
}

export default BasicInfoPart
