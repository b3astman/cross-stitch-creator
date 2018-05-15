// Sets up the root reducer for Redux
import { SET_COLOR, ADD_STITCH } from "../actions/actionTypes";
import initialState from './initialState';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return { ...state, color: action.color }
    case ADD_STITCH:
      return { ...state, stitches: [ ...state.stitches, action.stitch ] };
    default:
      return state;
  }
};

export default rootReducer;
