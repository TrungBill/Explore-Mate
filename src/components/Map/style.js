import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '1150px',
    width: '100%',
    paddingTop: '20px',
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    '&:hover': { zIndex: 20 },
  },
}));

export default useStyles;
