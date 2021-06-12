import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  main: {
    border: '2px solid white',
    width: '300px',
    maxWidth: '95%',
    margin: theme.spacing(3),
    minHeight: '350px',
    padding: '7px',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      border: '2px solid #663399',
    },
  },

  photo: {
    width: 'auto',
    maxWidth: '95%',
    alignSelf: 'center',
    maxHeight: '350px',
  },

  name: {
    margin: '10px 0',
    color: '#663399',
  },

  male: {
    color: '#00BFFF',
    fontWeight: 500,
    fontSize: '18px',
    marginRight: '7px',
  },

  female: {
    color: '#FF00FF',
    fontWeight: 500,
    fontSize: '18px',
    marginRight: '7px',
  },

  age: {
    backgroundColor: '#F8F8FF',
    fontWeight: 500,
    fontSize: '18px',
    padding: '3px',
    marginLeft: 'auto',
  },

  flexGrow1: {
    flexGrow: 1,
  },

  link: {
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
    color: '#663399',
  },
}))

export default styles
