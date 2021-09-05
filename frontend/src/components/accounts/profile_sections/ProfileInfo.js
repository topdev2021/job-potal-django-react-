import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

// Import Libraries
import {
  FaPen,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

// Import Components
import ProfileInfoModal from '../modals/profile/ProfileInfoModal'
import EditProfileInfoModal from '../modals/profile/EditProfileInfoModal'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getProfileInfo } from '../../../actions/profile'

const ProfileInfo = ({ user, getProfileInfo, userData }) => {
  const [infoModalShow, setInfoModalShow] = useState(false)
  const [editInfoModalShow, setEditInfoModalShow] = useState(false)

  useEffect(() => {
    getProfileInfo()
  }, [getProfileInfo])
  return (
    <Fragment>
      <section className='my-profile-section mt-5'>
        {userData ? (
          <Row>
            <Col md={6}>
              <Row>
                <Col md={8}>
                  <h5>
                    {userData.first_name} {userData.last_name}
                  </h5>
                  <p className='detail'>Ready to start from next week</p>
                </Col>
                <Col md={4}>
                  <FaPen
                    className='icon'
                    onClick={() => setEditInfoModalShow(true)}
                  />
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col md={4} style={{ textAlign: 'left' }}>
                  <FaEnvelope /> {user && user.email}
                </Col>
                <Col md={4} style={{ textAlign: 'left' }}>
                  <FaPhoneAlt /> {userData.phone && userData.phone}
                </Col>

                <Col md={4}>
                  {userData.linkedin_link && <FaLinkedin />}
                  &nbsp;&nbsp;&nbsp;
                  {userData.github_link && <FaGithub />}
                </Col>
              </Row>
              <hr />
            </Col>
          </Row>
        ) : (
          <Button variant='primary' onClick={() => setInfoModalShow(true)}>
            Add Profile Info
          </Button>
        )}
      </section>
      <ProfileInfoModal
        show={infoModalShow}
        onHide={() => setInfoModalShow(false)}
      />
      <EditProfileInfoModal
        id={userData && userData.id}
        show={editInfoModalShow}
        onHide={() => setEditInfoModalShow(false)}
      />
    </Fragment>
  )
}

// Import States
const mapStateToProps = (state) => ({
  user: state.auth.user,
  userData: state.profile.userData,
})

export default connect(mapStateToProps, { getProfileInfo })(ProfileInfo)
