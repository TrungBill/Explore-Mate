import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    marginRight: theme.spacing(2),
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(2),
    },
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
    transition: theme.transitions.create(['width', 'background-color', 'box-shadow'], {
      duration: theme.transitions.duration.short,
    }),
    width: '180px',
    height: '32px', // Makes the input and icon aligned
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Slightly transparent background
    color: theme.palette.common.white, // Set text color to white
    border: 'none', // Remove border
    boxShadow: `0 0 5px ${alpha(theme.palette.common.white, 0.5)}`, // Subtle shadow for depth
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)', // Darker background on hover
    },
    '&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)', // Darker background on focus
      boxShadow: `0 0 8px ${alpha(theme.palette.common.white, 0.75)}`, // More pronounced shadow on focus
      outline: 'none', // Remove default outline
    },
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
  comboboxList: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    '& .combobox-option': {
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
      },
    },
  },
}));
