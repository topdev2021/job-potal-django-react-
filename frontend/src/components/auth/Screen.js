import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Import Libraries
import { Link } from 'react-router-dom'
import {
  FaArrowLeft,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

// Import Styles
import styles from './styles/Screen.module.css'

const Screen = ({ children }) => {
  return (
    <Container fluid className={styles.auth__container}>
      <Row>
        <Col md={4} className={styles.left}>
          <section className='text-center'>
            <h2 className='mb-5'>
              <b>JOB PORTAL</b>
            </h2>
            <p>
              <b>Work full-time with top US companies</b>
            </p>
            <p>We are backed by engineering executives and investors of</p>
            <ul className='mb-5'>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
            <Link to='/' className={styles.back}>
              <FaArrowLeft style={{ fontSize: '14px', marginRight: '8px' }} />{' '}
              Go home
            </Link>
          </section>
        </Col>
        <Col md={8} className={styles.right}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default Screen
