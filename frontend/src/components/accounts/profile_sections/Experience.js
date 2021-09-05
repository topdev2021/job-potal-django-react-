import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

// Import Libraries
import { FaPen, FaCog } from 'react-icons/fa'

// Import Components
import ProfileExperienceModal from '../modals/experience/ProfileExperienceModal'
import EditProfileExperienceModal from '../modals/experience/EditProfileExperienceModal'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getExperience } from '../../../actions/profile'

const Experience = ({ getExperience, userExperience }) => {
  const [experienceModalShow, setExperienceModalShow] = useState(false)
  const [editExperienceModalShow, setEditExperienceModalShow] = useState(false)
  useEffect(() => {
    getExperience()
  }, [getExperience])
  return (
    <Fragment>
      <section className='my-profile-section mt-3'>
        {userExperience ? (
          <Row>
            <Col md={6}>
              <h5>
                <FaCog style={{ marginRight: '10px', fontSize: '18px' }} />{' '}
                Overall experience
              </h5>
              <div className='mt-4'>
                <Row>
                  <Col md={8}>
                    <h6>
                      {' '}
                      {userExperience.years_of_experience &&
                        userExperience.years_of_experience}{' '}
                      years /{' '}
                      {userExperience.years_of_remote_experience &&
                        userExperience.years_of_remote_experience}{' '}
                      years remote
                    </h6>
                    <p className='detail'>
                      {userExperience.english_proficiency &&
                        userExperience.english_proficiency}{' '}
                      English proficiency
                    </p>
                  </Col>
                  <Col md={4}>
                    <FaPen
                      className='icon'
                      onClick={() => setEditExperienceModalShow(true)}
                    />
                  </Col>
                </Row>
              </div>
              <hr />
            </Col>
          </Row>
        ) : (
          <Button
            variant='primary'
            onClick={() => setExperienceModalShow(true)}
          >
            Add Experience
          </Button>
        )}
      </section>
      <ProfileExperienceModal
        show={experienceModalShow}
        onHide={() => setExperienceModalShow(false)}
      />
      <EditProfileExperienceModal
        id={userExperience && userExperience.id}
        show={editExperienceModalShow}
        onHide={() => setEditExperienceModalShow(false)}
      />
    </Fragment>
  )
}

// Import States
const mapStateToProps = (state) => ({
  userExperience: state.profile.userExperience,
})

export default connect(mapStateToProps, { getExperience })(Experience)
