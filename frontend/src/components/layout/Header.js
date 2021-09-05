import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

// Import Libraries
import { LinkContainer } from 'react-router-bootstrap'

// Import Styles
import styles from './styles/Header.module.css'

// Import Redux Stuff
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

const Header = ({ logout, user: { isAuthenticated, user } }) => {
  // Logout Function
  const logOut = () => {
    logout()
    window.location.reload()
  }

  // Auth Links
  const authLinks = () => (
    <>
      <LinkContainer to='/dashboard'>
        <Nav.Link>Dashboard</Nav.Link>
      </LinkContainer>
      <Nav.Link onClick={() => logOut()}>Logout</Nav.Link>
    </>
  )

  // Guest Links
  const guestLinks = () => (
    <>
      <LinkContainer to='/signin'>
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
    </>
  )

  return (
    <header className={styles.header}>
      <Container>
        <Navbar expand='lg'>
          <LinkContainer to='/'>
            <Navbar.Brand style={{ fontWeight: 'bold' }}>
              <b>JOB PORTAL</b>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='#home'>Blog</Nav.Link>
              <LinkContainer to='/jobs'>
                <Nav.Link>Jobs</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/hire-engineers'>
                <Nav.Link>Hire Engineers</Nav.Link>
              </LinkContainer>
              {isAuthenticated ? authLinks() : guestLinks()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

// Import State
const mapStateToProps = (state) => ({
  user: state.auth,
})

export default connect(mapStateToProps, { logout })(Header)
