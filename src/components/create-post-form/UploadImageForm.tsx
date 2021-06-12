import { Button, Typography } from '@material-ui/core'
import { useState } from 'react'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addImages } from '../../redux/actions/cloudinaryActions'
import Resizer from 'react-image-file-resizer'
import { Link, useParams } from 'react-router-dom'
import { cloudinaryState } from '../../redux/reducers/cloudinary'

interface Iparams {
  postId: string
}

const UploadImageForm = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const [files, setFiles] = useState([])
  const { postId } = useParams<Iparams>()

  const { loading, error, message } = useSelector(cloudinaryState)

  const handleChange = (e: any) => {
    setFiles(e.target.files)
  }

  const dispatchImageUpload = async (uri: any) => {
    await dispatch(addImages({ image: uri, postId }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (files.length > 4) {
      return
    }

    if (files) {
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          500,
          500,
          'auto',
          100,
          0,
          (uri) => {
            dispatchImageUpload(uri)
          },
          'base64'
        )
      }
    }
  }

  const showSuccess = () => {
    if (message) {
      return (
        <p className={classes.title}>
          {message} you can review your post by clicking{' '}
          <Link to={`/adoption/${postId}`}>Here</Link>
        </p>
      )
    }
  }

  return (
    <div
      style={{
        width: '500px',
        maxWidth: '95%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
      }}
    >
      <Typography className={classes.title} variant='h5'>
        Your post created succefully, only thing left to do is to upload images.
      </Typography>

      <form onSubmit={handleSubmit}>
        <input
          style={{
            fontSize: '15px',
            display: 'flex',
            margin: '20px 0',
          }}
          type='file'
          accept='image/*'
          name='imagetoUpload'
          multiple
          onChange={handleChange}
        />

        {showSuccess()}

        <Button
          className={classes.submit}
          color='primary'
          variant='contained'
          type='submit'
        >
          {loading ? 'Loading...' : 'Upload'}
        </Button>
      </form>
    </div>
  )
}

export default UploadImageForm
