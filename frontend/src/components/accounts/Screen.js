import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Import Libraries
import { Redirect } from 'react-router-dom'

// Import Styles
import styles from './styles/Screen.module.css'

// Import Components
import Sidebar from './Sidebar'

// Import Redux Stuff
import { connect } from 'react-redux'
import { checkAuthenticated, load_user } from '../../actions/auth'

const Screen = ({
  children,
  isAuthenticated,
  checkAuthenticated,
  load_user,
}) => {
  // Check if user Authenticated
  useEffect(() => {
    checkAuthenticated()
    load_user()
  }, [load_user])

  // Check is not authenticated
  if (!isAuthenticated) {
    return <Redirect to='/signin' />
  }

  return (
    <Container className={styles.accounts__container} fluid>
      <Row>
        <Col md={12} className={styles.main}>
          <Sidebar />
          <div className={styles.content}>{children}</div>
        </Col>
      </Row>
    </Container>
  )
}

// Import States
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { checkAuthenticated, load_user })(
  Screen
)
