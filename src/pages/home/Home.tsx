import cat from '../../images/cat2.jpg'
import dog from '../../images/dog2.jpg'
import styles from './styles'
import { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authState } from '../../redux/reducers/auth'
import { setQueryType, resetFilters } from '../../redux/reducers/post'

const Home = () => {
  const classes = styles()
  const [width, setWidth] = useState(window.innerWidth)
  const { user } = useSelector(authState)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const handleClick = (e: any) => {
    dispatch(resetFilters())
    dispatch(setQueryType(e.target.alt))
    history.push('/adoption')
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Grid container className={classes.main}>
      <Grid className={classes.gridItem} item xs={12} md={6}>
        <Typography align='center' variant='h4'>
          Adopt a Dog
        </Typography>

        <img
          className={width > 600 ? classes.desktopImg : classes.mobileImg}
          src={dog}
          alt='dog'
          onClick={handleClick}
        />
      </Grid>
      <Grid className={classes.gridItem} item xs={12} md={6}>
        <Typography align='center' variant='h4'>
          Adopt a Cat
        </Typography>

        <img
          className={width > 600 ? classes.desktopImg : classes.mobileImg}
          src={cat}
          alt='cat'
          onClick={handleClick}
        />
      </Grid>

      {!user ? (
        <Typography className={classes.Text} align='center' variant='h6'>
          Would you like to create a new adoption post? Please{' '}
          <Link className={classes.link} to='/login'>
            Login
          </Link>
        </Typography>
      ) : (
        <Typography className={classes.Text} align='center' variant='h6'>
          Hello {user.email.split('@')[0]}, would you like to create a new
          adoption post? click{' '}
          <Link className={classes.link} to={`/dashboard/${user.id}`}>
            Here
          </Link>
        </Typography>
      )}
    </Grid>
  )
}

export default Home
