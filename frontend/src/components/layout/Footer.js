import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Import Libraries
import { Link } from 'react-router-dom'

// Import Style
import styles from './styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={4}>
            <p>This is demo address</p>
          </Col>

          <Col md={4}>
            <ul style={styles.ul}>
              <li>
                <Link to='/'>Facebook</Link>
              </li>
              <li>
                <Link to='/'>Linkedin</Link>
              </li>
              <li>
                <Link to='/'>Instagram</Link>
              </li>
              <li>
                <Link to='/'>Twitter</Link>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <ul style={styles.ul}>
              <li>
                <Link to='/'>Events</Link>
              </li>
              <li>
                <Link to='/'>Terms and Services</Link>
              </li>
              <li>
                <Link to='/'>Privacy Policy</Link>
              </li>
              <li>
                <Link to='/'>FAQ</Link>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className={styles.bottom}>
          <Col md={12}>
            <p className='text-center'>
              @2021 Example.com - All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
