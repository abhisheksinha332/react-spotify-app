import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';


const NotFound = () => {
    return (
        <React.Fragment>
            <Header />
            Page not Found. Goto <Link to="/dashboard">Home Page</Link>
        </React.Fragment>
    )
}

export default NotFound;
