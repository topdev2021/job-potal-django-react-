import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Import Libraries
import { Helmet } from 'react-helmet'

// Import Components
import Screen from '../../../components/accounts/Screen'
import PageTitle from '../../../components/accounts/PageTitle'
import JobCard2 from '../../../components/accounts/JobCard2'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getJobs, getAllJobs } from '../../../actions/job'

const JobsList = ({ getJobs, jobs, getAllJobs, user }) => {
  useEffect(() => {
    user && user.type === 'company' ? getJobs() : getAllJobs()
  }, [getJobs, getAllJobs])

  return (
    <Screen>
      <Helmet>
        <title>Jobs Listings</title>
      </Helmet>
      <PageTitle title='Jobs List' />
      <Container fluid className='p-0'>
        {/* <Row>
          <Col md={12}>
            <JobCard />
          </Col>
        </Row> */}
        <Row>
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <Col lg={3} md={4} sm={6} key={job.id}>
                <JobCard2
                  key={index}
                  id={job.id}
                  title={job.title}
                  description={job.description}
                />
              </Col>
            ))
          ) : (
            <Col md={3}>
              <p>No Jobs Available</p>
            </Col>
          )}
        </Row>
      </Container>
    </Screen>
  )
}

// Import States
const mapStateToProps = (state) => ({
  user: state.auth.user,
  jobs: state.job.jobs,
})

export default connect(mapStateToProps, { getJobs, getAllJobs })(JobsList)
