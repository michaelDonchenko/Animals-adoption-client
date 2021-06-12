import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { getPosts } from '../../redux/actions/postActions'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  postState,
  resetFilters,
  setQueryObject,
} from '../../redux/reducers/post'

const Filters = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { queryObj } = useSelector(postState)

  const [values, setValues] = useState({
    age: queryObj.age,
    type: queryObj.type,
    location: queryObj.location,
    gender: queryObj.gender,
    size: queryObj.size,
    adopted: queryObj.adopted,
    page: queryObj.page,
    order: queryObj.order,
  })

  const { age, type, location, gender, size, adopted, order } = values

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(getPosts(values))
  }

  const handleReset = () => {
    setValues({
      age: '',
      type: '',
      location: '',
      gender: '',
      size: '',
      adopted: '',
      page: queryObj.page,
      order: '',
    })
    dispatch(resetFilters())
  }

  useEffect(() => {
    dispatch(setQueryObject(values))
  }, [values])

  return (
    <div className={classes.main}>
      <Paper style={{ maxWidth: '95%' }}>
        <Typography variant='h5' align='center' className={classes.header}>
          Search Filters
        </Typography>

        <form className={classes.FiltersContainer} onSubmit={handleSubmit}>
          <FormControl className={classes.textField}>
            <InputLabel id='type'>Pet Type</InputLabel>
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

          <FormControl className={classes.textField}>
            <InputLabel id='location'>Adoption Location</InputLabel>
            <Select
              onChange={handleChange}
              value={location}
              name='location'
              labelId='location'
            >
              <MenuItem value='north'>North</MenuItem>
              <MenuItem value='center'>Center</MenuItem>
              <MenuItem value='south'>South</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.textField}>
            <InputLabel id='gender'>Gender</InputLabel>
            <Select
              onChange={handleChange}
              value={gender}
              name='gender'
              labelId='gender'
            >
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.textField}>
            <InputLabel id='size'>Size</InputLabel>
            <Select
              onChange={handleChange}
              value={size}
              name='size'
              labelId='size'
            >
              <MenuItem value='small'>Small</MenuItem>
              <MenuItem value='medium'>Medium</MenuItem>
              <MenuItem value='large'>Large</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.textField}>
            <InputLabel id='adopted'>Already Adopted</InputLabel>
            <Select
              onChange={handleChange}
              value={adopted}
              name='adopted'
              labelId='adopted'
            >
              <MenuItem disabled value=''>
                Select
              </MenuItem>
              <MenuItem value='true'>Yes</MenuItem>
              <MenuItem value='false'>No</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.textField}>
            <InputLabel id='age'>Age</InputLabel>
            <Select
              onChange={handleChange}
              value={age}
              name='age'
              labelId='age'
            >
              <MenuItem value='0'>0 - 1</MenuItem>
              <MenuItem value='1'>1</MenuItem>
              <MenuItem value='2'>2</MenuItem>
              <MenuItem value='3'>3</MenuItem>
              <MenuItem value='4'>4+</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.textField}>
            <InputLabel id='order'>Order By</InputLabel>
            <Select
              onChange={handleChange}
              value={order}
              name='order'
              labelId='order'
            >
              <MenuItem disabled value=''>
                Select
              </MenuItem>
              <MenuItem value='createdAt desc'>
                Created: newest posts (default)
              </MenuItem>
              <MenuItem value='createdAt asc'>Created: oldest posts</MenuItem>
              <MenuItem value='age asc'>Age: young to old</MenuItem>
              <MenuItem value='age desc'>Age: old to young</MenuItem>
              <MenuItem value='name asc'>Name: sorting by name</MenuItem>
            </Select>
          </FormControl>

          <Button
            className={classes.textField}
            variant='contained'
            color='primary'
            type='submit'
          >
            Search
          </Button>

          <Button
            variant='outlined'
            color='secondary'
            className={classes.textField}
            onClick={handleReset}
          >
            Reset filters
          </Button>
        </form>
      </Paper>
    </div>
  )
}

export default Filters
