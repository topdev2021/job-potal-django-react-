import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

// Import Libraries
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// Components
import Screen from '../components/layout/Screen'

// Import Images
import home_1 from '../images/home_1.PNG'
import skills from '../images/skills.PNG'
import easy_to_begin from '../images/easy_to_begin.PNG'

const Home = () => {
  return (
    <Screen>
      <Helmet>
        <title>Welcome to Job Portal</title>
      </Helmet>
      <Container
        style={{ paddingTop: '5%', paddingBottom: '5%' }}
        className='home-page'
      >
        <section className='page-section-bg'>
          <Row>
            <Col
              md={6}
              style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
              }}
            >
              <div>
                <h1>Build faster than ever with</h1>
                <h1 className='mb-4'>vetted remote developers</h1>
                <p>
                  Build by Facebook, Google and Stanford engineering leaders,
                </p>
                <p>Turning vets for a Silicon Valley bar.</p>
              </div>
            </Col>
            <Col md={6}>
              <Image src={home_1} fluid />
            </Col>
          </Row>
        </section>

        <section className='page-section-bg mt-5'>
          <Row>
            <Col md={4}>
              <h5>
                <b>For Companies</b>
              </h5>
              <Link to='/'>Hire Engineers</Link>
            </Col>
            <Col md={4}>
              <h5>
                <b>For Developers</b>
              </h5>
              <Link to='/jobs'>Apply to Jobs</Link>
            </Col>
          </Row>
        </section>

        <section className='page-section-bg mt-5'>
          <Row>
            <Col md={6}>
              <Image src={easy_to_begin} fluid />
            </Col>
            <Col
              md={6}
              style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
              }}
            >
              <div>
                <h4>
                  <b>Easy to Begin</b>
                </h4>
                <p className='mt-3'>Pay as you go, and scale effortlessly.</p>
                <a href='#'>Find Yours</a>
              </div>
            </Col>
          </Row>
        </section>

        <section className='page-section-bg mt-5'>
          <Row>
            <Col
              md={6}
              style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
              }}
            >
              <div>
                <h4>
                  <b>100+ Skills available</b>
                </h4>
                <p className='mt-3'>
                  Hire React, Node, Python, Angular, Swift, React Native,
                  Android, Java, Rails, Golang, PHP, Vue, Devops, Machine
                  Learning, Data Engineers and more.
                </p>
                <a href='#'>Find Yours</a>
              </div>
            </Col>
            <Col md={6}>
              <Image src={skills} fluid style={{ float: 'right' }} />
            </Col>
          </Row>
        </section>
      </Container>
    </Screen>
  )
}

export default Home
