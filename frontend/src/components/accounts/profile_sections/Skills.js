import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Form, Button, Table } from 'react-bootstrap'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getUserSkills } from '../../../actions/profile'

// Import Components
import ProfileSkillsModal from '../modals/skills/ProfileSkillsModal'

const Skills = ({ getUserSkills, userSkills }) => {
  useEffect(() => {
    getUserSkills()
  }, [getUserSkills])

  const [skillsModalShow, setSkillsModalShow] = useState(false)
  return (
    <Fragment>
      <section className='my-profile-section mt-3'>
        <Row>
          <Col md={6}>
            <h5>Skills</h5>

            {userSkills ? (
              <>
                <Table bordered size='sm'>
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userSkills.map((skill, index) => (
                      <tr key={index}>
                        <td>{skill.name}</td>
                        <td>{skill.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Button
                  variant='primary'
                  onClick={() => setSkillsModalShow(true)}
                >
                  Add Skills
                </Button>
              </>
            ) : (
              <Button
                variant='primary'
                onClick={() => setSkillsModalShow(true)}
              >
                Add Skills
              </Button>
            )}
            <hr />
          </Col>
          <ProfileSkillsModal
            show={skillsModalShow}
            onHide={() => setSkillsModalShow(false)}
          />
        </Row>
      </section>
    </Fragment>
  )
}

// Import States
const mapStateToProps = (state) => ({
  userSkills: state.profile.userSkills,
})

export default connect(mapStateToProps, { getUserSkills })(Skills)
