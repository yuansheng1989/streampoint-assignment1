import { DUPLICATE_CARD, DELETE_CARD, EDIT_CARD } from "./constants";

export const duplicateCard = (card) => {
  const action = {
    type: DUPLICATE_CARD,
    payload: card,
  };

  return action;
};

export const deleteCard = (id) => {
  const action = {
    type: DELETE_CARD,
    payload: id,
  };

  return action;
};

export const editCard = (card) => {
  const action = {
    type: EDIT_CARD,
    payload: card,
  };

  return action;
};
