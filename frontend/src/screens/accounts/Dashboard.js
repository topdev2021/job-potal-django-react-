import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Import Libraries
import { Helmet } from 'react-helmet'

// Import Components
import Screen from '../../components/accounts/Screen'
import PageTitle from '../../components/accounts/PageTitle'

const Dashboard = ({ isAuthenticated }) => {
  return (
    <Screen>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <PageTitle title='Dashboard' />
      <Container fluid className='p-0 dashboard'>
        <Row>
          <Col md={12}>
            <h3>YOUR PATH TO</h3>
            <div className='mt-4'>
              <h4 className='mb-4'>Becoming a Turing Developer</h4>
              <ul>
                <li>
                  Complete your Profile. This is your opportunity to tell
                  companies what you're great at!
                </li>
                <li>
                  Take Turing Tests that based on your work experience to unlock
                  Software Engineer roles.
                </li>
                <li>Interview with Turing's Senior Staff Member.</li>
                <li>
                  Get onboarded with Turing's Talent Specialists who can walk
                  you through some of the available opportunities!
                </li>
              </ul>
            </div>

            <div className='mt-4'>
              <h4 className='mb-4'>WHY JOIN TURING?</h4>
              <ul>
                <li>
                  Work full-time at top Silicon Valley or other U.S. companies.
                </li>
                <li>Better salary compared to local companies.</li>
                <li>
                  Grow as a Developer by working with the smartest engineers
                  from all over the world.
                </li>
                <li>
                  Engineers from Google, Facebook, Uber, and Microsoft have
                  joined Turing because Turing offered better opportunities.
                </li>
              </ul>
            </div>

            <div className='mt-4'>
              <iframe
                width='50%'
                height='430'
                src='https://www.youtube.com/embed/aX6IWSuhgVQ'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </Screen>
  )
}

export default Dashboard
