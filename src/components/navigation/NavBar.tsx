import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Hidden,
  Menu,
  MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import styles from './styles'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authState } from '../../redux/reducers/auth'
import { useState } from 'react'

const active = {
  textDecoration: 'underline',
}

const NavBar = () => {
  const classes = styles()
  const { user } = useSelector(authState)
  const history = useHistory()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (text: string) => {
    setAnchorEl(null)
    history.push(text)
  }

  return (
    <AppBar className={classes.appBar} position='static'>
      <Toolbar className={classes.toolBar}>
        <Hidden smUp>
          <IconButton className={classes.navLink}>
            <MenuIcon style={{ margin: '0 5px' }} />
            <Typography onClick={handleClick} variant='h6'>
              Menu
            </Typography>
          </IconButton>

          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClose('/')}>Home</MenuItem>
            <MenuItem onClick={() => handleClose('/adoption')}>
              Adoption
            </MenuItem>

            {user ? (
              <MenuItem onClick={() => handleClose(`/dashboard/${user.id}`)}>
                User Dashboard
              </MenuItem>
            ) : (
              <MenuItem onClick={() => handleClose(`/login`)}>Login</MenuItem>
            )}
          </Menu>
        </Hidden>

        <Hidden xsDown>
          <div className={classes.flexDiv}>
            <NavLink
              exact
              to='/'
              className={classes.navLink}
              activeStyle={active}
            >
              <Typography className={classes.marginRight} variant='h6'>
                Home
              </Typography>
            </NavLink>
            <NavLink
              to='/adoption'
              className={classes.navLink}
              activeStyle={active}
            >
              <Typography variant='h6' className={classes.marginRight}>
                Adoption
              </Typography>
            </NavLink>
          </div>

          {!user ? (
            <NavLink
              to='/login'
              className={classes.navLink}
              activeStyle={active}
            >
              <Typography variant='h6'>Login</Typography>
            </NavLink>
          ) : (
            <NavLink
              to={`/dashboard/${user.id}`}
              className={classes.navLink}
              activeStyle={active}
            >
              <Typography variant='h6'>User dashboard</Typography>
            </NavLink>
          )}
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
