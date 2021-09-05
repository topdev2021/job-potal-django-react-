import React, { useEffect } from 'react'
import { Card, Button, Badge } from 'react-bootstrap'

// Import Libraries
import { Link } from 'react-router-dom'

// Import Styles
import styles from './styles/JobCard.module.css'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getSingleJobSkills, getAllSkills } from '../../actions/job'

const JobCard2 = ({ user, title, description, id, getAllSkills, skills }) => {
  useEffect(() => {
    getAllSkills()
  }, [getAllSkills])
  return (
    <Card className={styles.jobs__card}>
      <Card.Body>
        <Card.Title className='mb-0'>
          <b>{title && title}</b>
        </Card.Title>
        <div className='mt-2 '>
          <p>{description && description}</p>
          <Link to={`/job-detail/${id}`}>
            <b>Read More</b>
          </Link>
        </div>
        {user && user.type !== 'company' ? (
          <>
            <hr />
            <div className='mt-4'>
              <h6 className='mb-2'>
                <b>Required Skills</b>
              </h6>
              {skills.length > 0
                ? skills
                    .filter((js) => js.job === id)
                    .map((skill) => (
                      <small key={skill.id}> {skill.name},</small>
                    ))
                : ''}
              <Button variant='primary' className='mt-3' block>
                Rate Skills
              </Button>
            </div>
          </>
        ) : (
          ''
        )}
      </Card.Body>
    </Card>
  )
}

// Import States
const mapStateToProps = (state) => ({
  user: state.auth.user,
  skills: state.job.skills,
})

export default connect(mapStateToProps, { getSingleJobSkills, getAllSkills })(
  JobCard2
)
