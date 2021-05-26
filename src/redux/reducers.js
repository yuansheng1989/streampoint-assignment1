import { combineReducers } from "redux";
import SideDrawerReducer from "./sideDrawer/reducer";
import CardsReducer from "./cards/reducer";

const reducers = combineReducers({ SideDrawerReducer, CardsReducer });

export default reducers;