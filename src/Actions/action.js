import { SET_ALBUMS, SET_ARTISTS, SET_PLAYLIST, ADD_ALBUMS, ADD_ARTISTS, ADD_PLAYLIST } from '../Constants/constants';

import { get } from '../API/result';

export const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    albums
});
export const setArtists = (artists) => ({
    type: SET_ARTISTS,
    artists
});
export const setPlaylists = (playlists) => ({
    type: SET_PLAYLIST,
    playlists
});
export const addAlbums = (albums) => ({
    type: ADD_ALBUMS,
    albums
});
export const addArtists = (artists) => ({
    type: ADD_ARTISTS,
    artists
});
export const addPlaylists = (playlists) => ({
    type: ADD_PLAYLIST,
    playlists
});

export const initiateGetResult = (searchTerm) => {
    return async (dispatch) => {
      try {
        const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
          searchTerm
        )}&type=album,playlist,artist`;
        const result = await get(API_URL);
        // console.log(result);
        const { albums, artists, playlists } = result;
        dispatch(setAlbums(albums));
        dispatch(setArtists(artists));
        return dispatch(setPlaylists(playlists));
      } catch (error) {
        console.log('error', error);
      }
    };
   };


   
export const initiateLoadMoreAlbums = (url) => {
    return async (dispatch) => {
      try {
        const result = await get(url);
        return dispatch(addAlbums(result.albums));
      } catch (error) {
        console.log('error', error);
      }
    };
  };
  
  export const initiateLoadMoreArtists = (url) => {
    return async (dispatch) => {
      try {
        const result = await get(url);
        return dispatch(addArtists(result.artists));
      } catch (error) {
        console.log('error', error);
      }
    };
  };
  
  export const initiateLoadMorePlaylist = (url) => {
    return async (dispatch) => {
      try {
        const result = await get(url);
        return dispatch(addPlaylists(result.playlists));
      } catch (error) {
        console.log('error', error);
      }
    };
  };
  
