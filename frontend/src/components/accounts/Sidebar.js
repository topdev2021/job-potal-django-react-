import React, { useState } from 'react'

// Import Libraries
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
} from 'react-pro-sidebar'
import {
  FaHome,
  FaBriefcase,
  FaCogs,
  FaSignOutAlt,
  FaAngleLeft,
  FaAngleRight,
  FaGlobe,
  FaUserAlt,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Import Styles
import styles from './styles/Sidebar.module.css'
import 'react-pro-sidebar/dist/css/styles.css'

// Import Redux Stuff
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

const Sidebar = ({ user: { user }, logout }) => {
  const [collapse, setCollapse] = useState(false)

  // Logout Function
  const logOut = () => {
    logout()
    window.location.reload()
  }

  return (
    <ProSidebar
      collapsed={collapse}
      breakPoint='md'
      style={{ backgroundColor: '#f4f4f4' }}
    >
      <SidebarHeader className={styles.sidebar__header}>
        {!collapse ? 'DASHBOARD' : 'D'}
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape='square'>
          <MenuItem icon={<FaGlobe />}>
            <Link to='/'>Go to Website</Link>
          </MenuItem>
          <MenuItem icon={<FaHome />}>
            <Link to='/dashboard'>Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<FaBriefcase />}>
            <Link to='/technical-assessment'>Technical Assessment</Link>
          </MenuItem>
          <MenuItem icon={<FaBriefcase />}>
            <Link to='/jobs-list'>Jobs</Link>
          </MenuItem>

          {user && user.type === 'company' ? (
            <MenuItem icon={<FaBriefcase />}>
              <Link to='/add-job'>Add Job</Link>
            </MenuItem>
          ) : (
            ''
          )}

          <MenuItem icon={<FaUserAlt />}>
            <Link to='/dashboard/profile'>Profile</Link>
          </MenuItem>
          <MenuItem icon={<FaCogs />}>
            <Link to='/settings'>Settings</Link>
          </MenuItem>
          <MenuItem icon={<FaSignOutAlt />}>
            <Link to='#' onClick={() => logOut()}>
              Sign Out
            </Link>
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter
        className={styles.sidebar__footer}
        onClick={() => setCollapse(!collapse)}
      >
        {!collapse ? <FaAngleLeft /> : <FaAngleRight />}
      </SidebarFooter>
    </ProSidebar>
  )
}

// Import States
const mapStateToProps = (state) => ({
  user: state.auth,
})

export default connect(mapStateToProps, { logout })(Sidebar)
