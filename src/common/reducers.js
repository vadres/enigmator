import { combineReducers } from "redux";

import S02 from "../stages/S02/reducer";

const rootReducer = combineReducers({
  S02: S02
});

export default rootReducer;
