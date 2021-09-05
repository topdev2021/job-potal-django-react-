import React from 'react'
import { Card } from 'react-bootstrap'

// Import Styles
import styles from './styles/RolesCard.module.css'

const RolesCard = ({ title }) => {
  return (
    <Card className={[styles.roles__card, 'my-2']}>
      <Card.Body>
        <h6 className='mb-0 text-center'>{title}</h6>
      </Card.Body>
    </Card>
  )
}

export default RolesCard
