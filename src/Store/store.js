import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import albumsReducer from '../Reducer/Album';
import artistReducer from '../Reducer/Artist';
import playListReducer from '../Reducer/PlayList';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTESION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        albums:albumsReducer,
        artists:artistReducer,
        playlists:playListReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
)

export default store;