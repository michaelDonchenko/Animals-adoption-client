import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPost } from '../../redux/actions/postActions'
import { useParams } from 'react-router-dom'
import styles from './styles'
import { Grid, Paper, Typography } from '@material-ui/core'
import { postState } from '../../redux/reducers/post'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

interface Iparams {
  id: string
}

const AdoptionPost = () => {
  const dispatch = useDispatch()
  const params: Iparams = useParams()
  const classes = styles()
  const { post, loading, error } = useSelector(postState)

  useEffect(() => {
    dispatch(getPost(params.id))
  }, [])

  return (
    <div className={classes.flexCenterDiv}>
      {loading && (
        <Typography variant='h5' align='center'>
          Loading posts...
        </Typography>
      )}
      {!loading && post && (
        <Paper className={classes.postContainer} elevation={2}>
          <Grid container>
            <Grid
              style={{ maxWidth: '100%', margin: '0 auto' }}
              className={classes.flexCenterDiv}
              md={6}
              sm={12}
              item
            >
              <Typography variant='h4' align='center'>
                {post.name} , {post.age} ,{' '}
                <span
                  style={{
                    color: post.gender === 'male' ? '#00BFFF' : '#FF00FF',
                  }}
                >
                  {post.gender}
                </span>
              </Typography>

              <div className={classes.flexCenterDiv}>
                <Carousel showArrows={false}>
                  {post.images.map((img: any) => (
                    <img className={classes.img} src={img.url} />
                  ))}
                </Carousel>
              </div>
            </Grid>

            <Grid md={6} sm={12} item style={{ padding: '7px' }}>
              <Typography variant='h6'>Contact Info:</Typography>
              <Typography variant='h6'>Phone: {post.phone}</Typography>
              <hr></hr>

              <p>Color: {post.color}</p>
              <p>Pet's size: {post.size}</p>
              <p>Adoptions location: {post.location}</p>
              <p>
                Sterilized or Castrated:{' '}
                {post.sterilized_or_castrated === true ? 'Yes' : 'No'}
              </p>
              <p>Immuned: {post.immune === true ? 'Yes' : 'No'}</p>
              <p>About me: {post.about}</p>
              <p>
                {post.adopted === true ? (
                  <span style={{ color: 'red' }}>Already adopted</span>
                ) : (
                  <span style={{ color: 'green' }}>Avaliable for adoption</span>
                )}
              </p>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  )
}

export default AdoptionPost
