
import React from 'react';
import '../index.css';
import _ from 'lodash';
import {Card, Grid, CardActionArea, CardMedia} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import image from '../Image/image.jpg';
const useStyles = makeStyles({
  container: {
   width:'95%',
   margin:'auto',
   background:'#f7f7f7',
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


const PlayList = ({ playlists }) => {
  const classes = useStyles();
  return (
    

    <React.Fragment>
      {Object.keys(playlists).length > 0 && (
        <Grid container spacing={3} className={classes.container} >
           {playlists.items.map((playlist, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={4} md={3}>
                <Card className={classes.card}>
                <CardActionArea
                    target="_blank"
                    href={playlist.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(playlist.images) ? (
                      <img
                        variant="top"
                        src={playlist.images[0].url}
                        alt=""
                        className="img"
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
                    <div>{playlist.name}</div>
                    <div>
                      {/* <small>
                        {playlist.artists.map((artist) => artist.name).join(', ')}
                      </small> */}
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
export default PlayList;