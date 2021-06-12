import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import styles from '../../pages/auth/styles'
import { useState, FC } from 'react'
import { register } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'
import { resetMessage } from '../../redux/reducers/auth'

interface Props {
  user: null | {}
  loading: boolean
  error: null | string
  message: null | string
  showError: () => void
  showMessage: () => void
}

const RegisterForm: FC<Props> = ({
  loading,
  error,
  showError,
  message,
  showMessage,
}) => {
  const dispatch = useDispatch()
  const classes = styles()
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const { email, password } = values

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await dispatch(register(values))
  }

  if (message) {
    setTimeout(() => dispatch(resetMessage()), 5000)
  }

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit}>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        value={email}
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
        onChange={handleChange}
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        value={password}
        autoComplete='current-password'
        onChange={handleChange}
      />

      {showError()}
      {showMessage()}

      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
      >
        {loading ? 'Loading...' : 'Register'}
      </Button>

      <Grid container>
        <Grid item>
          <Link className={classes.link} to='/login'>
            {'Back to login'}
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}

export default RegisterForm
