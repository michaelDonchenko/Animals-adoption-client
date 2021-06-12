import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#663399',
  },

  toolBar: {
    maxWidth: '100%',
    width: '1280px',
    margin: '0 auto',
  },

  flexDiv: {
    display: 'flex',
    flexGrow: 1,
  },

  navLink: {
    color: '#FFFAF0',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  marginRight: {
    marginRight: theme.spacing(3),
  },
}))

export default styles
