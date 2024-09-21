import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'flex', // Aligns search icon and input side by side
    alignItems: 'center', // Centers items vertically
    
  },
  searchIcon: {
    padding: theme.spacing(1),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // Ensures the icon is white
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2), // Adjusted padding to fit the icon properly
    transition: theme.transitions.create('width'),
    width: '180px',
    height: '32px', // Makes the input and icon aligned
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent', // Make the input background transparent
    color: theme.palette.common.white, // Set text color to white
    border: '1px solid rgba(255, 255, 255, 0.5)', // White border with transparency
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.75)', // White placeholder with slight transparency
    },
    '&:-webkit-input-placeholder': {
      color: 'rgba(255, 255, 255, 0.75)', // Fallback for WebKit browsers
    },
    '&::-webkit-input-placeholder': {
      color: 'rgba(255, 255, 255, 0.75)', // Fallback for WebKit browsers
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
