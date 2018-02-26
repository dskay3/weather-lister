import { FETCH_WEATHER } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // creates a new array that adds the previous state and concats the new city information
      // concat creates a new array
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  return state;
}
