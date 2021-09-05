import React, { useEffect } from 'react'

// Components
import Header from './Header'
import Footer from './Footer'

// Import Redux Stuff
import { connect } from 'react-redux'
import { checkAuthenticated, load_user } from '../../actions/auth'

const Screen = ({ children, checkAuthenticated, load_user }) => {
  // Check if user Authenticated
  useEffect(() => {
    checkAuthenticated()
    load_user()
  }, [load_user])
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default connect(null, { checkAuthenticated, load_user })(Screen)
