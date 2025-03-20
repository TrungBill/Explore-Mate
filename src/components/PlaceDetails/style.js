import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    padding: theme.spacing(2),
    // Adjust width/margins for larger screens
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      margin: 'auto',
    },
  },
  list: {
    maxHeight: '75vh',
    overflowY: 'auto',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}));

export default useStyles;
