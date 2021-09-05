import React, { useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getAllSkillsOfUsers } from '../../actions/profile'

// Import Libraries
import { Link } from 'react-router-dom'

// Import Styles
import styles from './styles/UserCard.module.css'

const UserCard = ({ user, getAllSkillsOfUsers, userSkills }) => {
  useEffect(() => {
    getAllSkillsOfUsers()
  }, [getAllSkillsOfUsers])

  return (
    <Card className='mb-3'>
      <Card.Body>
        <Row>
          <Col md={12}>
            <Card.Title className={styles.user__detail}>
              <Link to={`/user-detail/${user.id}`}>{user.name}</Link>
            </Card.Title>
            <p className='text-secondary'>{user.description}</p>
            {userSkills.filter((us) => us.user === user.id).length !== 0 ? (
              <p className='mb-0'>
                <small>
                  <b>Skills:</b>
                </small>
                {userSkills
                  .filter((us) => us.user === user.id)
                  .map((skill) => (
                    <small key={skill.id}> {skill.name},</small>
                  ))}
              </p>
            ) : (
              <p className='mb-0'>No Added Skills</p>
            )}
            <p>Rating: {user.rate}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

// Import States
const mapStateToProps = (state) => ({
  userSkills: state.profile.userSkills,
})

export default connect(mapStateToProps, { getAllSkillsOfUsers })(UserCard)
