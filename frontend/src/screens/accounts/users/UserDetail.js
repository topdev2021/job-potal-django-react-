import React, { useEffect, Fragment } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'

// Import Components
import Screen from '../../../components/accounts/Screen'

// Import Redux Stuff
import { connect } from 'react-redux'
import {
  getSingleUser,
  getSingleUserAvailability,
  getSingleUserEducation,
  getSingleUserExperience,
  getSingleUserProfileInfo,
  getSingleUserRole,
  getSingleUserSkills,
} from '../../../actions/profile'

const UserDetail = ({
  match,
  getSingleUser,
  getSingleUserAvailability,
  getSingleUserEducation,
  getSingleUserExperience,
  getSingleUserProfileInfo,
  getSingleUserRole,
  getSingleUserSkills,
  singleUser,
  userData,
  userExperience,
  userEducation,
  userAvailability,
  userRole,
  userSkills,
}) => {
  useEffect(() => {
    getSingleUser(match.params.id)
    getSingleUserProfileInfo(match.params.id)
    getSingleUserAvailability(match.params.id)
    getSingleUserEducation(match.params.id)
    getSingleUserExperience(match.params.id)
    getSingleUserRole(match.params.id)
    getSingleUserSkills(match.params.id)
  }, [
    match,
    getSingleUser,
    getSingleUserProfileInfo,
    getSingleUserAvailability,
    getSingleUserEducation,
    getSingleUserExperience,
    getSingleUserRole,
    getSingleUserSkills,
  ])
  return (
    <Screen>
      <Container fluid className='p-0 add-job'>
        <Row>
          <Col md={8}>
            <div className='info mb-5'>
              {userData.length > 0 ? (
                userData.map((user) => (
                  <Fragment key={user.id}>
                    <h3>
                      <b>
                        {user.first_name} {user.last_name}
                      </b>
                    </h3>
                    <p>{user.bio}</p>
                  </Fragment>
                ))
              ) : (
                <p></p>
              )}
            </div>

            <div className='experience mb-5'>
              <h5 className='mb-3'>
                <b>Experience</b>
              </h5>
              {userExperience.length > 0 ? (
                userExperience.map((exp) => (
                  <Fragment key={exp.id}>
                    <p>
                      {exp.years_of_experience} years of experience /{' '}
                      {exp.years_of_remote_experience} years of remote
                      experience
                    </p>
                    <p>{exp.english_proficiency} English Proficiency</p>
                  </Fragment>
                ))
              ) : (
                <p></p>
              )}
            </div>

            <div className='role mb-5'>
              <h5 className='mb-3'>
                <b>Role and Current Salary</b>
              </h5>
              {userRole.length > 0 ? (
                userRole.map((role) => (
                  <Fragment key={role.id}>
                    <p>
                      <b>Preferred Role: </b>
                      {role.preferred_role}{' '}
                    </p>
                    <p>
                      <b>Salary: </b>
                      {role.current_salary} USD
                    </p>
                  </Fragment>
                ))
              ) : (
                <p></p>
              )}
            </div>

            <div className='availability mb-5'>
              <h5 className='mb-3'>
                <b>Availability</b>
              </h5>
              {userAvailability.length > 0 ? (
                userAvailability.map((avb) => (
                  <Fragment key={avb.id}>
                    <p>
                      <b>Type: </b>
                      {avb.availability_type}{' '}
                    </p>
                    <p>
                      <b>Ready to start work in: </b>
                      {avb.ready_to_start_work_in} USD
                    </p>
                  </Fragment>
                ))
              ) : (
                <p></p>
              )}
            </div>

            <div className='education mb-5'>
              <h5 className='mb-3'>
                <b>Education</b>
              </h5>
              {userEducation.length > 0 ? (
                userEducation.map((edu) => (
                  <Fragment key={edu.id}>
                    <p className='mb-0'>
                      <b>Degree: </b>
                      {edu.degree} from {edu.college}
                    </p>
                    <p className='mb-0'>
                      <b>From: </b>
                      {edu.start_date}
                      <b> To: </b>
                      {edu.end_date}
                    </p>
                    <hr />
                  </Fragment>
                ))
              ) : (
                <p></p>
              )}
            </div>

            <div className='skills mb-5'>
              <h5 className='mb-3'>
                <b>Skills</b>
              </h5>
              {userSkills.length > 0 ? (
                userSkills.map((skill) => (
                  <Badge
                    variant='primary'
                    key={skill.id}
                    style={{ marginRight: '5px' }}
                  >
                    {skill.name}
                  </Badge>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Screen>
  )
}

// Import States
const mapStateToProps = (state) => ({
  singleUser: state.profile.singleUser,
  userData: state.profile.userData,
  userExperience: state.profile.userExperience,
  userAvailability: state.profile.userAvailability,
  userRole: state.profile.userRole,
  userEducation: state.profile.userEducation,
  userSkills: state.profile.userSkills,
})

export default connect(mapStateToProps, {
  getSingleUser,
  getSingleUserAvailability,
  getSingleUserEducation,
  getSingleUserExperience,
  getSingleUserProfileInfo,
  getSingleUserRole,
  getSingleUserSkills,
})(UserDetail)
