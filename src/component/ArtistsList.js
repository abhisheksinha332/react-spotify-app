import React from 'react';
import { Card, Grid, CardActionArea, CardMedia, Typography} from '@material-ui/core';
import _ from 'lodash';
import '../index.css';
import image from '../Image/image.jpg';
// import useStyles from '../Styles/homestyle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
   width:'95%',
   margin:'auto',
   background:'#fcf9f2',
   borderRadius:'10px',
  },
  card:{},
  media:{
   // maxHeight:300,
    height: 230,
  },
  typography:{
    marginTop:'5px',
    textAlign:'center',
    fontSize:'18px',
  },
  small:{
    textAlign:'center',
    fontSize:'14px',
    marginBottom:'5px',
  }
});

const ArtistsList = ({ artists }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        // <div className="artists">
        <Grid container spacing={3} className={classes.container} >
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={4} md={3}>
                <Card className={classes.card}>
                <CardActionArea
                    target="_blank"
                    href={artist.external_urls.spotify}
                    rel="noopener noreferrer"
                  >
                    {!_.isEmpty(artist.images) ? (
                      <CardMedia
                        className={classes.media}
                        
                        image={artist.images[0].url}
                        title=""
                      />
                    ) : (
                      <CardMedia
                      className={classes.media}
                      image={image}
                      title=""
                    />
                    )}
                  </CardActionArea>
                  
                   <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
                        {artist.name}
                    </Typography>
                </Card>
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      )}
    </React.Fragment>
  );
};
export default ArtistsList;