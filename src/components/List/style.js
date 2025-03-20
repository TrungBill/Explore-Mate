import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',              // Takes up full width of its parent
    maxWidth: '100%',           // Prevents it from exceeding the viewport
    padding: theme.spacing(2),  // Responsive padding
    boxSizing: 'border-box',    // Ensures padding doesn't add to the overall width
    margin: '0 auto',           // Centers the container if a maxWidth is set later
    
  },
  list: {
    maxHeight: '70vh',
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
