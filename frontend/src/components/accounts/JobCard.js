import React from 'react'
import { Card, Badge, Row, Col } from 'react-bootstrap'

// Import Libraries
import { Link } from 'react-router-dom'

// Import Styles
import styles from './styles/JobCard.module.css'

const JobCard = () => {
  return (
    <Card className={styles.jobs__card}>
      <Card.Body>
        <Card.Title>
          <b>
            <Link to='/job-detail'>Mobile Developer</Link>
          </b>
        </Card.Title>
        <hr />
        <div className='mb-4'>
          <h6>Description</h6>
          An emerging software start-up targeting the travel and hospitality
          industry is looking to hire an experienced mobile developer who will
          create applications for their users. You will be responsible for
          scoping technical requirements and delivering impactful features by
          working closely with the founders and designers. You will be
          responsible for scoping technical requirements and delivering
          impactful features by working closely with the founders and designers.
        </div>
        <Row className='mb-2'>
          <Col md={4}>
            <h6>Job Role</h6>
            <p>Mobile Developer</p>
          </Col>
          <Col md={4}>
            <h6>Level</h6>
            <p>Export Level</p>
          </Col>
        </Row>
        <div>
          <h6>Skills</h6>
          <Badge variant='primary'>Java</Badge>{' '}
          <Badge variant='primary'>IOS</Badge>{' '}
          <Badge variant='primary'>JavaScript</Badge>{' '}
          <Badge variant='primary'>Python</Badge>{' '}
        </div>
      </Card.Body>
    </Card>
  )
}

export default JobCard
