import { Paper, Typography } from '@material-ui/core'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles'

interface IProps {
  id: number
  name: string
  gender: string
  age: number
  image?: string
}

const PostCard: FC<IProps> = ({ name, gender, age, image, id }) => {
  const classes = styles()
  return (
    <Paper className={classes.main}>
      <Link to={`/adoption/${id}`} className={classes.link}>
        <img src={image} alt='img' className={classes.photo} />
      </Link>

      <div className={classes.flexGrow1}></div>
      <Link to={`/adoption/${id}`} className={classes.link}>
        <Typography className={classes.name} variant='h5'>
          {name}
        </Typography>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className={gender === 'male' ? classes.male : classes.female}>
          {gender}
        </span>
        <span className={classes.age}>Age: {age === 0 ? '0 - 1' : age}</span>
      </div>
    </Paper>
  )
}

export default PostCard
