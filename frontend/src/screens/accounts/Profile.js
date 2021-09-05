import React from 'react'
import { Container } from 'react-bootstrap'

// Import Libraries
import { Helmet } from 'react-helmet'

// Import Components
import Screen from '../../components/accounts/Screen'
import PageTitle from '../../components/accounts/PageTitle'
import ProfileInfo from '../../components/accounts/profile_sections/ProfileInfo'
import Experience from '../../components/accounts/profile_sections/Experience'
import Availability from '../../components/accounts/profile_sections/Availability'
import Role from '../../components/accounts/profile_sections/Role'
import Education from '../../components/accounts/profile_sections/Education'
import Skills from '../../components/accounts/profile_sections/Skills'
import Company from '../../components/accounts/profile_sections/Company'

// Import Redux Stuff
import { connect } from 'react-redux'

const Profile = ({ user }) => {
  return (
    <Screen>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <PageTitle title='Profile' />
      <Container fluid className='p-0 my-profile'>
        {user && user.type === 'user' ? (
          <>
            {/* User Profile Info */}
            <ProfileInfo />

            {/* User Skills */}
            <Skills />

            {/* User Experience */}
            <Experience />

            {/* User Availability */}
            <Availability />

            {/* User Role & Salary */}
            <Role />

            {/* User Education */}
            <Education />
          </>
        ) : (
          <Company />
        )}
      </Container>
    </Screen>
  )
}

// Import States
const mapStateToProps = (state) => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, {})(Profile)
