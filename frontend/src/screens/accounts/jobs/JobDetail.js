import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

// Import Components
import Screen from '../../../components/accounts/Screen'
import PageTitle from '../../../components/accounts/PageTitle'
import UserCard from '../../../components/accounts/UserCard'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getSingleJob, getAllSkills } from '../../../actions/job'
import {getAllUsers, getAllSkillsOfUsers, getRecommendUsers} from '../../../actions/profile'

const JobDetail = ({
  user: { user },
  getSingleJob,
  getAllSkills,
  getRecommendUsers,
  getAllSkillsOfUsers,
  job,
  skills,
  match,
  users,
  userSkills,
}) => {
  useEffect(() => {
    getSingleJob(match.params.id)
    getAllSkills()
    getRecommendUsers(match.params.id)
    getAllSkillsOfUsers()
  }, [getSingleJob, match])
  return (
    <Screen>
      <PageTitle title='Mobile Developer' />
      <Container fluid className='p-0 job-detail'>
        <Row>
          <Col md={12}>
            <Card className='p-3'>
              <Card.Body>
                <Card.Title>
                  <b>{job && job.title}</b>
                </Card.Title>
                <hr />
                <div className='mb-4'>
                  <h6>Description</h6>
                  <p>{job && job.description}</p>
                </div>
                <Row className='mb-3'>
                  <Col md={4}>
                    <h6>Hiring Needs</h6>
                    <p>{job && job.hiring_needs}</p>
                  </Col>
                  <Col md={4}>
                    <h6>Current Employees</h6>
                    <p>{job && job.current_employees}</p>
                  </Col>
                </Row>
                <div>
                  <h6>Skills</h6>
                  {skills &&
                    skills.map((skill) =>
                      skill.job === job.id ? (
                        <Badge
                          variant='primary'
                          key={skill.id}
                          style={{ marginRight: '3px' }}
                        >
                          {skill.name}
                        </Badge>
                      ) : (
                        ''
                      )
                    )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {user && user.type === 'company' ? (
          <Row className='mt-4'>
            <Col md={12}>
              <h4>List of Suitable Engineers Recureters</h4>
              <hr />
            </Col>
            {users &&
              users.map((user) =>
                userSkills.filter((us) => us.user === user.id).length !== 0 ? (
                  <Col md={4} key={user.id}>
                    <UserCard user={user} />
                  </Col>
                ) : (
                  ''
                )
              )}
          </Row>
        ) : (
          ''
        )}
      </Container>
    </Screen>
  )
}

// Import State
const mapStateToProps = (state) => ({
  user: state.auth,
  job: state.job.singleJob,
  skills: state.job.skills,
  users: state.profile.users,
  userSkills: state.profile.userSkills,
})

export default connect(mapStateToProps, {
  getSingleJob,
  getAllSkills,
  getRecommendUsers,
  getAllSkillsOfUsers,
})(JobDetail)
