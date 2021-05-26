import { SET_SIDE_DRAWER, SET_CARD_ID } from "./constants";

export const setSideDrawer = (visible) => {
  const action = {
    type: SET_SIDE_DRAWER,
    payload: visible,
  };

  return action;
};

export const setCardId = (id) => {
  const action = {
    type: SET_CARD_ID,
    payload: id,
  };

  return action;
};