import React, { Fragment } from 'react'
import { Form, Button } from 'react-bootstrap'

const BasicInfoPart = ({ values, onChange, nextStep, prevStep }) => {
  const { current_employees, hiring_needs, name, phone, website } = values

  const hiringNeeds = [
    {
      id: 1,
      title: 'Not Available',
    },
    {
      id: 2,
      title: 'Part time',
    },
    {
      id: 3,
      title: 'Full Time',
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
                  name='hiring_needs'
                  id={hn.id}
                  value={hn.title}
                  onChange={onChange('hiring_needs')}
                />
                <label htmlFor={hn.id}>{hn.title}</label>
              </Fragment>
            ))}
          </div>
        </Form.Group>

        <Form.Group className='mt-3'>
          <Form.Label>Current employees in your company</Form.Label>
          <div className='radio-toolbar'>
            {companySize.map((cs) => (
              <Fragment key={cs.id}>
                <input
                  type='radio'
                  name='current_employees'
                  id={cs.id}
                  value={cs.title}
                  onChange={onChange('current_employees')}
                />
                <label htmlFor={cs.id}>{cs.title}</label>
              </Fragment>
            ))}
          </div>
        </Form.Group>

        <Form.Group controlId='name' className='mt-3'>
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={name}
            onChange={onChange('name')}
          />
        </Form.Group>
        <Form.Group controlId='phone' className='mt-3'>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type='text'
            name='phone'
            value={phone}
            onChange={onChange('phone')}
          />
        </Form.Group>
        <Form.Group controlId='website' className='mt-3'>
          <Form.Label>Company Website</Form.Label>
          <Form.Control
            type='text'
            name='website'
            value={website}
            onChange={onChange('website')}
          />
        </Form.Group>
        <Form.Group className='mt-3' style={{ textAlign: 'right' }}>
          <Button variant='info' onClick={prevStep}>
            Previous
          </Button>{' '}
          <Button
            variant='primary'
            onClick={nextStep}
            disabled={
              !hiring_needs || !current_employees || !name || !phone
                ? true
                : false
            }
          >
            Next
          </Button>
        </Form.Group>
      </div>
    </>
  )
}

export default BasicInfoPart
