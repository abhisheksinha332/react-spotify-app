import React from 'react';
import {Card, Grid, CardActionArea, CardMedia, Typography} from '@material-ui/core';
import _ from 'lodash';
import '../index.css';
import image from '../Image/image.jpg';
// import useStyles from '../Styles/homestyle';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  container: {
   width:'95%',
   margin:'auto',
   background:'#f5f5f5',
   borderRadius:'10px',
   marginBottom:28,
  },
  card:{},
  media:{
   
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

const AlbumsList = ({ albums }) => {
 const classes = useStyles();

  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <Grid container spacing={3} className={classes.container} >
         
           {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={4} md={3}>
                  <Card className={classes.card}>
                  <CardActionArea
                    target="_blank"
                    href={album.external_urls.spotify}
                    rel="noopener noreferrer"
                    
                  >
                    
                    {!_.isEmpty(album.images) ? (
                    
                      <CardMedia
                          className={classes.media}
                          image={album.images[0].url}
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
                  <div>
                    <div></div>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
                        {album.name}
                    </Typography>
                    <div className={classes.small}>
                      <small >
                        {album.artists.map((artist) => artist.name).join(', ')}
                      </small>
                      
                    </div>

                  </div>
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
export default AlbumsList;