export const SET_COLOR = "SET_COLOR";
export const ADD_STITCH = "ADD_STITCH";

export const setColor = (color) => ({
  type: SET_COLOR,
  color: color
});

export const addStitch = (stitch) => ({
  type: ADD_STITCH,
  stitch: stitch
});
