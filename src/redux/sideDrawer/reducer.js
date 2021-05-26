import { SET_SIDE_DRAWER, SET_CARD_ID } from "./constants";

const initState = {
  sideDrawerVisible: false,
  cardId: "",
};

const SideDrawerReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SIDE_DRAWER:
      return {
        ...state,
        sideDrawerVisible: action.payload,
      };
    case SET_CARD_ID:
      return {
        ...state,
        cardId: action.payload,
      };
    default:
      return state;
  }
};

export default SideDrawerReducer;
