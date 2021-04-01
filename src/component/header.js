import React from 'react';
import useStyles from '../Styles/homestyle';
const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <h1>Music App</h1>
        </div>
    )
}

export default Header;
