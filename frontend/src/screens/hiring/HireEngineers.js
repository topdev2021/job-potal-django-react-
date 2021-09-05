import React from 'react'
import { Container, Col, Row, Button, Image } from 'react-bootstrap'

// Import Libraries
import { Helmet } from 'react-helmet'

// Import Components
import Screen from '../../components/layout/Screen'

// Import Images
import cost_ratio from '../../images/cost-ratio.png'
import rigorous_vetting from '../../images/Rigorous-vetting.png'
import effective_collaboration from '../../images/effective-collaboration.png'

const HireEngineers = () => {
  return (
    <Screen>
      <Helmet>
        <title>Hire Engineers</title>
      </Helmet>
      <Container style={{ paddingTop: '5%', paddingBottom: '5%' }}>
        <section className='text-center page-section-bg'>
          <Row>
            <Col md={6} className='m-auto'>
              <h1>hire top software engineers?</h1>
              <h1 className='mb-4'>Developers Jobs</h1>
              <div className='mt-4'>
                <p>
                  <b>Hire senior pre-vetted remote engineers</b> for your team
                  that are affordable, have strong technical and communication
                  skills and are ready to work in your timezone.
                </p>
              </div>
              <Button
                className='mt-2'
                variant='primary'
                size='lg'
                style={{ fontSize: '16px' }}
              >
                Hire Engineers Now
              </Button>
            </Col>
          </Row>
        </section>

        <section className='page-section-bg' style={{ marginTop: '7%' }}>
          <Row>
            <Col md={6} className='m-auto'>
              <h2>High Quality/Cost ratio</h2>
              <div className='mt-5'>
                <h5>
                  <b>Hire Silicon Valley caliber at half the cost</b>
                </h5>
                <p className='mt-3'>
                  Hire the top 1% of 150,000 engineers from 130 countries who
                  have applied to Turing.
                </p>
              </div>
              <div className='mt-4'>
                <h5>
                  <b>100+ skills available</b>
                </h5>
                <p className='mt-3'>
                  Hire React, Node, Python, Angular, Swift, React Native,
                  Android, Java, Rails, Golang, PHP, Vue, Devops, Machine
                  Learning, Data Engineers and more.
                </p>
              </div>
              <div className='mt-4'>
                <h5>
                  <b>Zero Risk</b>
                </h5>
                <p className='mt-3'>
                  If you decide to stop within two weeks, you pay nothing.
                </p>
              </div>
            </Col>
            <Col md={6} className='m-auto'>
              <Image src={cost_ratio} />
            </Col>
          </Row>
        </section>

        <section className='page-section-bg' style={{ marginTop: '7%' }}>
          <Row>
            <Col md={6} className='m-auto'>
              <Image src={rigorous_vetting} />
            </Col>
            <Col md={6} className='m-auto'>
              <h2>Rigorous Vetting</h2>
              <div className='mt-5'>
                <h5>
                  <b>8 hours of tests + interviews </b>
                </h5>
                <p className='mt-3'>
                  More rigorous than Silicon Valley job interviews. We test for
                  Programming skill, Data Structures, Algorithms, Systems
                  Design, software specializations & frameworks.
                </p>
              </div>
              <div className='mt-4'>
                <h5>
                  <b>Seniority tests </b>
                </h5>
                <p className='mt-3'>
                  We select excellent communicators who can proactively take
                  ownership of business and product objectives without
                  micromanagement.
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <section className='page-section-bg' style={{ marginTop: '7%' }}>
          <Row>
            <Col md={6} className='m-auto'>
              <h2>Effective Collaboration</h2>
              <div className='mt-5'>
                <h5>
                  <b>Daily updates </b>
                </h5>
                <p className='mt-3'>
                  Turing’s Workspace software ensures automatic time tracking
                  and virtual daily standups. Gives you more visibility into
                  your remote engineer’s work than even your local engineers.
                </p>
              </div>
              <div className='mt-4'>
                <h5>
                  <b>Easy to manage</b>
                </h5>
                <p className='mt-3'>
                  High visibility makes Turing engineers easy to manage and
                  ensure that they are always working on what’s most valuable to
                  you.
                </p>
              </div>
              <div className='mt-4'>
                <h5>
                  <b>Match your timezone</b>
                </h5>
                <p className='mt-3'>
                  Engineers match your timezone and overlap a minimum of 4 hours
                  with your workday.
                </p>
              </div>
            </Col>
            <Col md={6} className='m-auto'>
              <Image src={effective_collaboration} fluid />
            </Col>
          </Row>
        </section>
      </Container>
    </Screen>
  )
}

export default HireEngineers
