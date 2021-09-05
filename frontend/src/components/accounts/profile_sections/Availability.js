import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

// Import Libraries
import { FaPen, FaRegCalendarCheck } from 'react-icons/fa'

// Import Components
import ProfileAvailabilityModal from '../modals/availability/ProfileAvailabilityModal'
import EditProfileAvailabilityModal from '../modals/availability/EditProfileAvailabilityModal'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getAvailability } from '../../../actions/profile'

const Availability = ({ getAvailability, userAvailability }) => {
  const [availabilityModalShow, setAvailabilityModalShow] = useState(false)
  const [editAvailabilityModalShow, setEditAvailabilityModalShow] = useState(
    false
  )
  useEffect(() => {
    getAvailability()
  }, [getAvailability])

  return (
    <Fragment>
      <section className='my-profile-section mt-3'>
        {userAvailability ? (
          <Row>
            <Col md={6}>
              <h5>
                <FaRegCalendarCheck
                  style={{ marginRight: '10px', fontSize: '18px' }}
                />{' '}
                Availability
              </h5>
              <div className='mt-4'>
                <Row>
                  <Col md={8}>
                    <h6>
                      {userAvailability.availability_type &&
                        userAvailability.availability_type}
                    </h6>
                    <p className='detail'>
                      Ready to start{' '}
                      {userAvailability.ready_to_start_in &&
                        userAvailability.ready_to_start_in}
                    </p>
                  </Col>
                  <Col md={4}>
                    <FaPen
                      className='icon'
                      onClick={() => setEditAvailabilityModalShow(true)}
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
            onClick={() => setAvailabilityModalShow(true)}
          >
            Add Availability
          </Button>
        )}
      </section>
      <ProfileAvailabilityModal
        show={availabilityModalShow}
        onHide={() => setAvailabilityModalShow(false)}
      />
      <EditProfileAvailabilityModal
        id={userAvailability && userAvailability.id}
        show={editAvailabilityModalShow}
        onHide={() => setEditAvailabilityModalShow(false)}
      />
    </Fragment>
  )
}

// Import States
const mapStateToProps = (state) => ({
  userAvailability: state.profile.userAvailability,
})

export default connect(mapStateToProps, { getAvailability })(Availability)
