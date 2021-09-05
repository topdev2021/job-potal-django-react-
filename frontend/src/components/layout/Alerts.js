import React from 'react'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'

const Alerts = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Alert key={alert.id} variant='light'>
      {alert.msg}
    </Alert>
  ))

const mapStateToProps = (state) => ({
  alerts: state.alert,
})

export default connect(mapStateToProps)(Alerts)
