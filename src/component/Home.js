import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import useStyles from '../Styles/homestyle';
import {Button} from '@material-ui/core';
import Footer from './Footer';

const Home = (props) => {


    const CLIENT_ID = '80786b8c4d7645e0b3f614618bc0c10a';
    const AUTHORIZE_URL = 'https://accounts.spotify.com/authorize';
    const REDIRECT_URL = 'http://localhost:3000/redirect';
  const  handleLogin =() =>{
    window.location = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=token&show_dialog=true`;
    }
    const classes = useStyles();
    return (
        <div>
            <div className={classes.body}>
                
                    <Header />
                <div>
                    <h1>Please Login to Continue...</h1>
                </div>
                <div>
                    <Button color="primary" variant="contained" type="submit" onClick={handleLogin} size="large" >Login</Button>
                </div>

                
            </div>
            <Footer />
        </div>
    )
}

export default connect()(Home);
