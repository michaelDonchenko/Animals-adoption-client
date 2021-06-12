import { Grid, Typography } from '@material-ui/core'
import CreatePost from '../../components/create-post-form/CreatePost'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { authState } from '../../redux/reducers/auth'
import { logout } from '../../redux/actions/authActions'
import { useEffect, useState } from 'react'
import { postState, resetFilters } from '../../redux/reducers/post'
import { getPostsByUser } from '../../redux/actions/postActions'
import TableComponent from '../../components/table-component/TableComponent'
import Pagination from '@material-ui/lab/Pagination'
import UpdatePost from '../../components/update-post-form/UpdateForm'

const Dashboard = () => {
  const { user } = useSelector(authState)
  const { count, postsByUser, loading, pages, postToUpdate, message } =
    useSelector(postState)
  const classes = styles()
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)

  const handleLogout = () => {
    dispatch(logout())
  }

  const handlePageChange = (e: any, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    dispatch(getPostsByUser(page))

    return () => {
      dispatch(resetFilters())
    }
  }, [page])

  return (
    <div>
      <Typography variant='h4' className={classes.header1} align='center'>
        Welcome {user && user.email.split('@')[0]}
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={4}>
          {!postToUpdate ? (
            <>
              <Typography
                className={classes.subHeader}
                variant='h5'
                align='center'
              >
                Create post
              </Typography>

              <CreatePost />
            </>
          ) : (
            <>
              <Typography
                className={classes.subHeader}
                variant='h5'
                align='center'
              >
                Update post
              </Typography>

              <UpdatePost />
            </>
          )}
        </Grid>

        <Grid item xs={12} sm={8}>
          <Typography className={classes.subHeader} variant='h5' align='center'>
            Posts history{' '}
            <span onClick={handleLogout} className={classes.logout}>
              /Logout
            </span>
          </Typography>

          {loading && (
            <Typography
              className={classes.subHeader}
              variant='h5'
              align='center'
            >
              Loading posts...
            </Typography>
          )}
          {!loading && count > 0 && (
            <TableComponent
              posts={postsByUser}
              loading={loading}
              message={message}
            />
          )}
          {!loading && count === 0 && (
            <Typography
              className={classes.subHeader}
              variant='subtitle1'
              align='center'
            >
              You do not have any created posts yet.
            </Typography>
          )}

          <div className={classes.paginationDiv}>
            <Typography>Page: </Typography>
            <Pagination count={pages} page={page} onChange={handlePageChange} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
