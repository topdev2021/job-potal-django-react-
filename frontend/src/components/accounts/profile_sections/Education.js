import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

// Import Libraries
import { FaPen, FaTrash } from 'react-icons/fa'

// Import Components
import ProfileEducationModal from '../modals/education/ProfileEducationModal'
import EditProfileEducationModal from '../modals/education/EditProfileEducationModal'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getEducation, deleteEducation } from '../../../actions/profile'

const Education = ({ userEducation, getEducation, deleteEducation }) => {
  const [educationModalShow, setEducationModalShow] = useState(false)
  const [editEducationModalShow, setEditEducationModalShow] = useState(false)
  const [modalId, setModalId] = useState(null)
  useEffect(() => {
    getEducation()
  }, [getEducation])
  return (
    <Fragment>
      <section className='my-profile-section mt-3'>
        <Row>
          <Col md={6}>
            <h5>Education</h5>
            <div className='mt-4'>
              {userEducation.length > 0
                ? userEducation.map((edu, id) => (
                    <Row className='mb-2' key={id}>
                      <Col md={8}>
                        <p className='detail mb-2'>
                          {edu.start_date && edu.start_date} -
                          {edu.end_date && edu.end_date}
                        </p>
                        <h6>{edu.degree && edu.degree}</h6>
                        <p className='detail'>{edu.college && edu.college}</p>
                      </Col>
                      <Col md={4}>
                        <FaPen
                          className='icon'
                          onClick={() => {
                            setEditEducationModalShow(true)
                            setModalId(edu.id)
                          }}
                        />
                        <FaTrash
                          className='icon'
                          onClick={() => deleteEducation(edu.id)}
                        />
                      </Col>
                    </Row>
                  ))
                : ''}
              <Row className='mb-2'>
                <Col md={12}>
                  <Button
                    variant='primary'
                    onClick={() => setEducationModalShow(true)}
                  >
                    Add Education
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>
      <ProfileEducationModal
        show={educationModalShow}
        onHide={() => setEducationModalShow(false)}
      />
      <EditProfileEducationModal
        id={modalId}
        show={editEducationModalShow}
        onHide={() => setEditEducationModalShow(false)}
      />
    </Fragment>
  )
}

// Import States
const mapStateToProps = (state) => ({
  userEducation: state.profile.userEducation,
})

export default connect(mapStateToProps, { getEducation, deleteEducation })(
  Education
)
