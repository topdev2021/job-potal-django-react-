import React from 'react'
import { Card } from 'react-bootstrap'

// Import Styles
import styles from './styles/SingleJobCard.module.css'

const SingleJob = ({ title, description }) => {
  return (
    <Card className={[styles.job__card, 'my-2']}>
      <Card.Body>
        <Card.Title>
          <b>{title}</b>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleJob
