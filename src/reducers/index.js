import { combineReducers } from "redux";

import localization from "./localizationReducer";
import pathfinder from "./pathfinderRecuder";


export default combineReducers({
  localization,
  pathfinder,
});
