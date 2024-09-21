import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'
import LanguageIcon from '@material-ui/icons/Language';
import WebIcon from '@material-ui/icons/Web'

import useStyles from './style'

const PlaceDetails = ({place, selected, refProp}) => {
  const encodedAddress = encodeURIComponent(place.address);
  const classes = useStyles()

  if(selected) refProp?.current?.scrollIntoView({behavior:'smooth', block:'start'})
  if (place.ad_position) {
    return null; // Don't render anything if it's an ad
  }
  return (
    <Card elevation={6}>
      <CardMedia 
        style={{ height: 350}}
        image={place.photo? place.photo.images.large.url: 'https://unsplash.com/photos/mens-sitting-green-chair-reading-newspaper-4UGlx_OXqgs'}
        title = {place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {place.name}
        </Typography>

        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Rating value={Number(place.rating) } readOnly/>
          <Typography gutterBottom variant='subtitle1'>out of {place.num_reviews} reviews </Typography>
          
        </Box>

        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
          
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='subtitle1'>Rating</Typography>
            <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
        </Box> 
        {place?.awards?.map((award)=>(
            <Box my={1}style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src ={award.images.small} alt = {award.display_name} />
              <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
            </Box>
        ))}

        
        

      
              {place?.address && (
              <Typography 
                gutterBottom 
                variant='subtitle2' 
                color='textSecondary' 
                className={classes.subtitle}
                component="a" // Makes the Typography an anchor tag
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`} // Google Maps URL
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practices
                style={{ 
                  textDecoration: 'underline',  // Adds an underline to indicate it's clickable
                  cursor: 'pointer',            // Changes cursor to a pointer
                  display: 'flex',              // Ensures icon and text are aligned
                  alignItems: 'center',         // Vertically aligns the icon and text
                }}
            >
              <LocationOnIcon style={{ marginRight: '5px' }} /> {/* Adds some space between the icon and text */}
              {place.address}
            </Typography>
              )}

                {place?.phone && (
                <Typography 
                  gutterBottom 
                  variant='subtitle2' 
                  color='textSecondary' 
                  className={classes.subtitle}
                  component="a"
                  href={`tel:${place.phone}`}  // `tel:` URL scheme for initiating a call
                  style={{ textDecoration: 'underline', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                }}
                >
                  <PhoneIcon className={classes.icon} />
                  {place.phone}
                </Typography>
              )}

                {place?.cuisine?.map(({name}) => (
                <Chip key={name} size='small' label={name} className={classes.chip} />
                ))}
          
              <CardActions style={{ marginTop: '30px' }}>
                <Button size='small' 
                  color='primary' 
                  variant="outlined" 
                  style={{ borderRadius: '20px' }} onClick={()=>window.open(place.website, '_blank')} >
                  <LanguageIcon />Website
                </Button>

                <Button size='small' 
                  color='primary' 
                  variant="outlined" 
                  style={{ borderRadius: '20px' }} onClick={()=>window.open(place.web_url, '_blank')} >
                  <WebIcon />Trip Advisor
                </Button>

              </CardActions>


              
                

                
            </CardContent>
          </Card>
          

  )
}

export default PlaceDetails