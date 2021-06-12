import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  header: {
    margin: '20px 0',
    paddingTop: '15px',
  },

  flexCenterDiv: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  postContainer: {
    width: '960px',
    maxWidth: '100%',
    padding: '10px 5px',
    margin: '20px auto',
  },

  img: {
    width: '100%',
    maxWidth: '450px',
  },

  paginationDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
}))

export default styles
