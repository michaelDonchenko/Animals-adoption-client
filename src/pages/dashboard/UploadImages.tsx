import styles from './styles'
import UploadImageForm from '../../components/create-post-form/UploadImageForm'
import { cleanCloudinarySuccess } from '../../redux/reducers/cloudinary'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const UploadImages = () => {
  const classes = styles()
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(cleanCloudinarySuccess())
    }
  }, [])

  return (
    <div>
      <div className={classes.imagesUplaodContainer}>
        <UploadImageForm />
      </div>
    </div>
  )
}

export default UploadImages
