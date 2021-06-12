import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import styles from './styles'
import LoginForm from '../../components/forms/LoginForm'
import { useSelector, useDispatch } from 'react-redux'
import { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { authState, resetError } from '../../redux/reducers/auth'

const Login: FC = () => {
  const dispatch = useDispatch()
  const classes = styles()
  const auth = useSelector(authState)
  const { loading, user, error, message } = auth
  const history = useHistory()

  const userCheck = () => {
    if (user) {
      history.push(`/dashboard/${user.id}`)
    }
  }

  const showError = () => {
    if (error) {
      return <p style={{ margin: '10px 0', color: 'red' }}>{error}</p>
    }
  }

  useEffect(() => {
    return function cleanUp() {
      dispatch(resetError())
    }
  }, [])

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>

        {userCheck()}

        <LoginForm
          user={user}
          error={error}
          loading={loading}
          message={message}
          showError={showError}
        />
      </div>
    </Container>
  )
}

export default Login
