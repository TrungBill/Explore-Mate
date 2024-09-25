import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '100%',
    width: '100%',
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    '&:hover': { zIndex: 20 },
  },
}));

export default useStyles;
