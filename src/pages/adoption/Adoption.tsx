import { useEffect } from 'react'
import PostCard from '../../components/post-card/PostCard'
import styles from './styles'
import { getPosts } from '../../redux/actions/postActions'
import { useDispatch, useSelector } from 'react-redux'
import { postState, setQueryPage } from '../../redux/reducers/post'
import { Typography } from '@material-ui/core'
import Filters from '../../components/filters/Filters'
import Pagination from '@material-ui/lab/Pagination'

const Adoption = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { posts, pages, loading, error, queryObj } = useSelector(postState)

  const handleChange = (e: any, value: number) => {
    dispatch(setQueryPage(value))
  }

  useEffect(() => {
    dispatch(getPosts(queryObj))
  }, [queryObj.page])

  return (
    <>
      <Filters />
      <div className={classes.main}>
        {loading && (
          <Typography variant='h5' align='center' className={classes.header}>
            Loading...
          </Typography>
        )}
        {!loading &&
          posts.length > 0 &&
          posts.map((p: any, i: number) => (
            <PostCard
              id={p.id}
              name={p.name}
              age={p.age}
              gender={p.gender}
              image={p.images.length && p.images[0].url}
              key={i}
            />
          ))}
        {!loading && posts.length === 0 && (
          <Typography variant='subtitle1' className={classes.header}>
            No posts found
          </Typography>
        )}
      </div>

      {pages > 0 ? (
        <div className={classes.paginationDiv}>
          <Typography className={classes.header}>Page: </Typography>
          <Pagination
            count={pages}
            page={queryObj.page}
            onChange={handleChange}
          />
        </div>
      ) : null}
    </>
  )
}

export default Adoption
