import { Switch, Route } from 'react-router-dom'
import NavBar from './components/navigation/NavBar'
import PrivateRoute from './components/routes/PrivateRoute'
import Adoption from './pages/adoption/Adoption'
import AdoptionPost from './pages/adoption/AdoptionPost'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/dashboard/Dashboard'
import UploadImages from './pages/dashboard/UploadImages'
import Home from './pages/home/Home'
import styles from './styles/styles'
import { forceLogout } from './redux/reducers/auth'
import { postState } from './redux/reducers/post'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const classes = styles()
  const dispatch = useDispatch()
  const { error } = useSelector(postState)

  if (error === 'Unauthorized') {
    dispatch(forceLogout())
  }

  return (
    <>
      <NavBar />
      <Switch>
        <div className={classes.main}>
          {/* public routes */}
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/adoption' component={Adoption} exact />
          <Route path='/adoption/:id' component={AdoptionPost} exact />

          {/* private routes */}
          <PrivateRoute path='/dashboard/:id' component={Dashboard} exact />
          <PrivateRoute
            path='/dashboard/upload-image/:postId'
            component={UploadImages}
            exact
          />
        </div>
      </Switch>
    </>
  )
}

export default App
