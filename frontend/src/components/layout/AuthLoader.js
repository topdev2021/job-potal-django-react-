import React, { Fragment } from 'react'
import { Spinner } from 'react-bootstrap'

const AuthLoader = () => {
  return (
    <Fragment>
      <Spinner animation='border' variant='light' />
    </Fragment>
  )
}

export default AuthLoader
