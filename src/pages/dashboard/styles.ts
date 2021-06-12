import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  header1: {
    margin: '25px 0 0 0',
    padding: '5px',
    color: '#663399',
  },

  subHeader: {
    margin: '20px auto',
  },

  logout: {
    color: '#663399',
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  imagesUplaodContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px auto',
  },

  paginationDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
})

export default styles
