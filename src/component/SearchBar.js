

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { TextField, Button } from '@material-ui/core';
import { Alert} from '@material-ui/lab';
import useStyles from '../Styles/homestyle';
const SearchBar = (props) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Please enter a search term.');
    }
  };
  return (
    <div>
      <Form onSubmit={handleSearch}>
      
        {errorMsg && <Alert severity="error" className={classes.alert}>{errorMsg}</Alert>}
        <div className={classes.textField}>
          <TextField id="standard-basic" fullWidth label="Search here..." type="search" name="searchTerm" value={searchTerm} onChange={handleInputChange} />
          <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
        </div>
          
        
        
      </Form>
    </div>
  );
};
export default SearchBar;