import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  main: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },

  FiltersContainer: {
    maxWidth: '100%',
    width: '1280px',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '7px',
    marign: '15px auto',
  },

  textField: {
    width: '95%',
    maxWidth: '300px',
    margin: '15px',
  },

  header: {
    paddingTop: '15px',
  },
})

export default styles
