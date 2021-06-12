import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { FC } from 'react'
import styles from './styles'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import {
  getPostToUpdate,
  deletePost,
  getPostsByUser,
} from '../../redux/actions/postActions'
import { resetPostToUpdate, cleanMessage } from '../../redux/reducers/post'

interface IPost {
  id: number
  name: string
  createdAt: string
}

type Posts = [IPost]

interface ITable {
  posts: Posts
  loading: boolean
  message: string | null
}

const TableComponent: FC<ITable> = ({ posts, loading, message }) => {
  const classes = styles()
  const dispatch = useDispatch()

  const handleEditClick = (postId: any) => {
    dispatch(resetPostToUpdate())
    dispatch(getPostToUpdate(postId))
  }

  const handleDelete = (postId: any) => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(deletePost(postId))
    }
  }

  if (message === 'Post deleted succefully') {
    dispatch(cleanMessage())
    dispatch(getPostsByUser(1))
  }

  return (
    <div className={classes.main}>
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Created At</TableCell>
              <TableCell align='left'>Pet's name</TableCell>
              <TableCell align='left'>View and edit</TableCell>
              <TableCell align='left'>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading &&
              posts.length > 0 &&
              posts.map((p, i) => (
                <TableRow>
                  <TableCell align='left'>
                    {moment(p.createdAt).format('MMMM Do YYYY')}
                  </TableCell>
                  <TableCell align='left'>{p.name}</TableCell>
                  <TableCell align='left'>
                    {
                      <Button
                        onClick={() => handleEditClick(p.id)}
                        variant='contained'
                        color='primary'
                      >
                        Edit
                      </Button>
                    }
                  </TableCell>
                  <TableCell align='left'>
                    {
                      <Button
                        onClick={() => handleDelete(p.id)}
                        variant='contained'
                        color='secondary'
                      >
                        Delete
                      </Button>
                    }
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TableComponent
