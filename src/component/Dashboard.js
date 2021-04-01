

import React, { useState } from 'react';

import {
  initiateGetResult,
 
} from '../Actions/action';
import { connect } from 'react-redux';

import SearchResult from './SearchResult';
import SearchBar from './SearchBar';
import Header from './header';
import Footer from './Footer';

const Dashboard = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('albums');


  const handleSearch = (searchTerm) => {
      props.dispatch(initiateGetResult(searchTerm)).then(() => {
        setSelectedCategory('albums');
      });
 
  };


  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const { albums, artists, playlists } = props;
  const result = { albums, artists, playlists };

  return (
    <React.Fragment>
     
        <div>
          <Header />
          <SearchBar handleSearch={handleSearch} />
          <SearchResult
            result={result}
            setCategory={setCategory}
            selectedCategory={selectedCategory}
           
          />
        
        </div>
        
    
  
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    playlists: state.playlists
  };
};

export default connect(mapStateToProps)(Dashboard);

