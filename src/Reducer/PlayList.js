import { SET_PLAYLIST } from '../Constants/constants';

const playListReducer = (state={}, action) => {
    const { playlists } = action;
    switch (action.type) {
        case SET_PLAYLIST:
            return playlists;
        default:
            return state;
    }
}

export default playListReducer;