import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Import Components
import Screen from '../../../components/accounts/Screen'
import AddJobForm from '../../../components/accounts/forms/jobs/AddJobForm'

const AddJob = () => {
  return (
    <Screen>
      <Container fluid className='p-0 add-job'>
        <Row>
          <Col md={6}>
            <AddJobForm />
          </Col>
        </Row>
      </Container>
    </Screen>
  )
}

export default AddJob
