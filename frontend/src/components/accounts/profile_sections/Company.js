import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Button, Table } from 'react-bootstrap'

// Import Libraries
import { FaPen, FaRegCalendarCheck } from 'react-icons/fa'

// Import Components
import AddCompanyProfileModal from '../modals/company_profile/AddCompanyProfileModal'
import EditCompanyProfileModal from '../modals/company_profile/EditCompanyProfileModal'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getCompanyProfiles } from '../../../actions/profile'

const Company = ({ getCompanyProfiles, companyProfile }) => {
  const [companyProfileModalShow, setCompanyProfileModalShow] = useState(false)
  const [
    editCompanyProfileModalShow,
    setEditCompanyProfileModalShow,
  ] = useState(false)
  useEffect(() => {
    getCompanyProfiles()
  }, [getCompanyProfiles])

  return (
    <Fragment>
      <section className='my-profile-section mt-3'>
        {companyProfile ? (
          <Row>
            <Col md={6}>
              <h5>
                <FaRegCalendarCheck
                  style={{ marginRight: '10px', fontSize: '18px' }}
                />{' '}
                Company Profile{' '}
                <FaPen
                  className='icon'
                  onClick={() => setEditCompanyProfileModalShow(true)}
                />
              </h5>
              <div className='mt-4'>
                <Row>
                  <Col md={12}>
                    {companyProfile.name && (
                      <div className='mb-3'>
                        <h6>Name</h6>
                        <p>{companyProfile.name && companyProfile.name}</p>
                      </div>
                    )}
                    {companyProfile.about && (
                      <div className='mb-3'>
                        <h6>About</h6>
                        <p>{companyProfile.about && companyProfile.about}</p>
                      </div>
                    )}
                    {companyProfile.phone && (
                      <div className='mb-3'>
                        <h6>Phone</h6>
                        <p>{companyProfile.phone && companyProfile.phone}</p>
                      </div>
                    )}
                    {companyProfile.address && (
                      <div className='mb-3'>
                        <h6>Address</h6>
                        <p>
                          {companyProfile.address && companyProfile.address}
                        </p>
                      </div>
                    )}
                    {companyProfile.website && (
                      <div className='mb-3'>
                        <h6>Website</h6>
                        <p>
                          {companyProfile.website && companyProfile.website}
                        </p>
                      </div>
                    )}
                    {companyProfile.linkedin_link && (
                      <div className='mb-3'>
                        <h6>Linkedin Profile</h6>
                        <p>
                          {companyProfile.linkedin_link &&
                            companyProfile.linkedin_link}
                        </p>
                      </div>
                    )}
                    {companyProfile.twitter_link && (
                      <div className='mb-3'>
                        <h6>Twitter</h6>
                        <p>
                          {companyProfile.twitter_link &&
                            companyProfile.twitter_link}
                        </p>
                      </div>
                    )}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        ) : (
          <Button
            variant='primary'
            onClick={() => setCompanyProfileModalShow(true)}
          >
            Add Company Profile
          </Button>
        )}
      </section>
      <AddCompanyProfileModal
        show={companyProfileModalShow}
        onHide={() => setCompanyProfileModalShow(false)}
      />
      <EditCompanyProfileModal
        id={companyProfile && companyProfile.id}
        show={editCompanyProfileModalShow}
        onHide={() => setEditCompanyProfileModalShow(false)}
      />
    </Fragment>
  )
}

// Import States
const mapStateToProps = (state) => ({
  companyProfile: state.profile.companyProfile,
})

export default connect(mapStateToProps, { getCompanyProfiles })(Company)
