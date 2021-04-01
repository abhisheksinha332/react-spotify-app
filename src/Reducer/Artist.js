import { SET_ARTISTS } from '../Constants/constants';

const artistReducer = (state={}, action) => {
    const { artists } = action;
    switch (action.type) {
      case SET_ARTISTS:
          return artists;

        default:
            return state;
    }
}

export default artistReducer;