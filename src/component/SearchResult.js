
import React from 'react';
//import _ from 'lodash';
import AlbumList from './AlbumList';
import PlayList from './PlayList';
import ArtistsList from './ArtistsList';
//import ArtistsList from './ArtistsList';
//import PlayList from './PlayList';

const SearchResult = (props) => {
  const {
    result,
    selectedCategory
  } = props;
  const { albums, artists, playlist } = result;


  return (
    <React.Fragment>
      
      <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`}>
        {albums && <AlbumList albums={albums} />}
      </div>
      
       <div className={`${selectedCategory === 'artist' ? '' : 'hide'}`}>
        {artists && <ArtistsList artists={artists} />}
      </div>

      <div className={`${selectedCategory === 'playlist' ? '' : 'hide'}`}>
        {playlist && <PlayList playlist={playlist} />}
      </div> 
      
    </React.Fragment>
  );
};

export default SearchResult;
