import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import styles from './styles'
import RegisterForm from '../../components/forms/RegisterForm'
import { useSelector, useDispatch } from 'react-redux'
import { authState, resetError } from '../../redux/reducers/auth'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

export default function Regiter() {
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

  const showMessage = () => {
    if (message) {
      return (
        <p
          style={{
            margin: '10px 0',
            color: 'green',
          }}
        >
          {message}
        </p>
      )
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
          Register
        </Typography>

        {userCheck()}

        <RegisterForm
          user={user}
          error={error}
          loading={loading}
          message={message}
          showError={showError}
          showMessage={showMessage}
        />
      </div>
    </Container>
  )
}
