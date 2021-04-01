import React from 'react';
import useStyles from '../Styles/homestyle';
import FavoriteIcon from '@material-ui/icons/Favorite';
const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <h1>Made with &nbsp;<FavoriteIcon />&nbsp;  by &nbsp;<a href="https://abhishek-sinha.netlify.app/" className={classes.link}>&nbsp; Abhishek Sinha</a></h1>
        </div>
    )
}

export default Footer;
