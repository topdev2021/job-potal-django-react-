import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

// Import Libraries
import { FaPen, FaUserTie } from 'react-icons/fa'

// Import Components
import ProfileRoleSalaryModal from '../modals/role/ProfileRoleSalaryModal'
import EditProfileRoleSalaryModal from '../modals/role/EditProfileRoleSalaryModal'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getRole } from '../../../actions/profile'

const Role = ({ getRole, userRole }) => {
  const [roleSalaryModalShow, setRoleSalaryModalShow] = useState(false)
  const [editRoleSalaryModalShow, setEditRoleSalaryModalShow] = useState(false)
  useEffect(() => {
    getRole()
  }, [getRole])

  return (
    <Fragment>
      <section className='my-profile-section mt-3'>
        {userRole ? (
          <Row>
            <Col md={6}>
              <h5>
                <FaUserTie style={{ marginRight: '10px', fontSize: '18px' }} />{' '}
                Role and current salary
              </h5>
              <div className='mt-4'>
                <Row>
                  <Col md={8}>
                    <h6>
                      {userRole.preferred_role && userRole.preferred_role}
                    </h6>
                    <p className='detail'>
                      {userRole.current_salary && userRole.current_salary} PKR /
                      Year
                    </p>
                  </Col>
                  <Col md={4}>
                    <FaPen
                      className='icon'
                      onClick={() => setEditRoleSalaryModalShow(true)}
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
            onClick={() => setRoleSalaryModalShow(true)}
          >
            Add Role and Salary
          </Button>
        )}
      </section>
      <ProfileRoleSalaryModal
        show={roleSalaryModalShow}
        onHide={() => setRoleSalaryModalShow(false)}
      />
      <EditProfileRoleSalaryModal
        id={userRole && userRole.id}
        show={editRoleSalaryModalShow}
        onHide={() => setEditRoleSalaryModalShow(false)}
      />
    </Fragment>
  )
}

// Import States
const mapStateToProps = (state) => ({
  userRole: state.profile.userRole,
})

export default connect(mapStateToProps, { getRole })(Role)
