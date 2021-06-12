import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  main: {
    width: '1280px',
    maxWidth: '100%',
    margin: '30px auto',
  },

  desktopImg: {
    maxWidth: '90%',
    height: '500px',
    padding: '3px 0',
    margin: '10px auto',
    border: '2px solid white',
    '&:hover': {
      cursor: 'pointer',
      border: '2px solid #663399',
    },
  },

  mobileImg: {
    maxWidth: '100%',
    height: '300px',
    padding: '3px 0',
    margin: '10px auto',
  },

  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  Text: {
    margin: '30px auto',
    padding: '5px',
  },

  link: {
    color: '#663399',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

export default styles
