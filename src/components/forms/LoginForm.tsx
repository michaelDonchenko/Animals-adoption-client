import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import styles from '../../pages/auth/styles'
import { useState, FC } from 'react'
import { login } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'

interface Props {
  user: null | {}
  loading: boolean
  error: null | string
  message: null | string
  showError: () => void
}

const LoginForm: FC<Props> = ({ loading, error, showError }) => {
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
    await dispatch(login(values))
  }

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit}>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
        value={email}
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
        autoComplete='current-password'
        value={password}
        onChange={handleChange}
      />

      {showError()}

      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
      >
        {loading ? 'Loading...' : 'Login'}
      </Button>

      <Grid container>
        <Grid item xs>
          <Link className={classes.link} to='/'>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.link} to='/register'>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}

export default LoginForm
