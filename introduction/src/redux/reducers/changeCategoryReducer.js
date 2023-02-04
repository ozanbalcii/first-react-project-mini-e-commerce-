import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function changeCategoryReducer(state = initialState.currentCategory, action){
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;
    default:  //! eğer actions yoksa default olarak state'i return et.
      return state;
  }
}
