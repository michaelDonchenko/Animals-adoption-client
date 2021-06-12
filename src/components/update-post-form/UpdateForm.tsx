import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { postState, resetPostToUpdate } from '../../redux/reducers/post'
import { useHistory } from 'react-router-dom'
import { updatePost } from '../../redux/actions/postActions'

const UpdatePost = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const history = useHistory()

  const { laoding, postToUpdate } = useSelector(postState)

  const [values, setValues] = useState({
    id: postToUpdate.id,
    adopted: postToUpdate.adopted,
    name: postToUpdate.name,
    age: postToUpdate.age,
    type: postToUpdate.type,
    location: postToUpdate.location,
    gender: postToUpdate.gender,
    size: postToUpdate.size,
    color: postToUpdate.color,
    immune: postToUpdate.immune,
    sterilized_or_castrated: postToUpdate.sterilized_or_castrated,
    about: postToUpdate.about,
    phone: postToUpdate.phone,
  })

  const {
    adopted,
    name,
    age,
    type,
    location,
    gender,
    size,
    color,
    immune,
    sterilized_or_castrated,
    about,
    phone,
  } = values

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(updatePost(values))
    dispatch(resetPostToUpdate())
  }

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <FormControl required className={classes.textField}>
          <InputLabel id='adopted'>Already adopted?</InputLabel>
          <Select
            onChange={handleChange}
            value={adopted}
            name='adopted'
            labelId='adopted'
          >
            <MenuItem value='true'>Yes</MenuItem>
            <MenuItem value='false'>No</MenuItem>
          </Select>
        </FormControl>

        <TextField
          className={classes.textField}
          variant='standard'
          margin='normal'
          required
          fullWidth
          label={`Pet's name`}
          name='name'
          value={name}
          autoFocus
          type='text'
          onChange={handleChange}
        />

        <FormControl required className={classes.textField}>
          <InputLabel id='type'>Select pet type</InputLabel>
          <Select
            onChange={handleChange}
            value={type}
            name='type'
            labelId='type'
          >
            <MenuItem value='cat'>Cat</MenuItem>
            <MenuItem value='dog'>Dog</MenuItem>
          </Select>
        </FormControl>

        <FormControl required className={classes.textField}>
          <InputLabel id='location'>Select adoption location</InputLabel>
          <Select
            value={location}
            name='location'
            onChange={handleChange}
            labelId='location'
          >
            <MenuItem value='south'>South</MenuItem>
            <MenuItem value='center'>Center</MenuItem>
            <MenuItem value='north'>North</MenuItem>
          </Select>
        </FormControl>

        <TextField
          className={classes.textField}
          variant='standard'
          margin='normal'
          required
          fullWidth
          label={`Pet's age`}
          name='age'
          value={age}
          type='number'
          onChange={handleChange}
        />

        <FormControl required className={classes.textField}>
          <InputLabel id='gender'>Select pet gender</InputLabel>
          <Select
            name='gender'
            value={gender}
            onChange={handleChange}
            labelId='gender'
          >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
          </Select>
        </FormControl>

        <FormControl required className={classes.textField}>
          <InputLabel id='location'>Select pet size</InputLabel>
          <Select
            name='size'
            value={size}
            onChange={handleChange}
            labelId='location'
          >
            <MenuItem value='small'>small</MenuItem>
            <MenuItem value='medium'>medium</MenuItem>
            <MenuItem value='large'>large</MenuItem>
          </Select>
        </FormControl>

        <TextField
          className={classes.textField}
          variant='standard'
          margin='normal'
          required
          fullWidth
          label={`Pet's color`}
          name='color'
          type='text'
          onChange={handleChange}
          value={color}
        />

        <FormControl required className={classes.textField}>
          <InputLabel id='immune'>Immune?</InputLabel>
          <Select
            name='immune'
            value={immune}
            onChange={handleChange}
            labelId='immune'
          >
            <MenuItem value='true'>True</MenuItem>
            <MenuItem value='false'>False</MenuItem>
          </Select>
        </FormControl>

        <FormControl required className={classes.textField}>
          <InputLabel id='s_or_c'>sterilized or castrated?</InputLabel>
          <Select
            onChange={handleChange}
            name='sterilized_or_castrated'
            value={sterilized_or_castrated}
            labelId='s_or_c'
          >
            <MenuItem value='true'>True</MenuItem>
            <MenuItem value='false'>False</MenuItem>
          </Select>
        </FormControl>

        <TextField
          className={classes.textField}
          variant='standard'
          margin='normal'
          multiline
          rows={3}
          fullWidth
          label={'Tell us about the pet'}
          name='about'
          type='text'
          onChange={handleChange}
          value={about}
        />

        <Typography variant='h6' align='center'>
          Your contact info
        </Typography>

        <TextField
          className={classes.textField}
          variant='standard'
          margin='normal'
          required
          fullWidth
          label='Phone number for contact'
          name='phone'
          type='number'
          onChange={handleChange}
          value={phone}
        />

        <Button
          type='submit'
          className={classes.submit}
          variant='contained'
          color='primary'
        >
          {laoding ? 'Loading...' : 'Update'}
        </Button>
        <Button
          onClick={() => dispatch(resetPostToUpdate())}
          variant='contained'
          color='secondary'
          className={classes.submit}
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default UpdatePost
