import { DUPLICATE_CARD, DELETE_CARD, EDIT_CARD } from "./constants";
import { v4 as uuidv4 } from "uuid";

const initState = {
  cards: [
    {
      id: uuidv4(),
      title: "Custom Title",
      body: "Custom Body Text",
      titleSize: 36,
      bodySize: 16,
      cornerRadius: 16,
      titleColor: "#000000",
      bodyColor: "#000000",
      panelColor: "#ffffff"
    },
  ],
};

const CardsReducer = (state = initState, action) => {
  let newCards;
  switch (action.type) {
    case DUPLICATE_CARD:
      newCards = [...state.cards];
      let newCard = {
        ...newCards.filter((card) => card.id === action.payload.id)[0],
        id: uuidv4(),
        title: action.payload.title,
        body: action.payload.body,
      };
      newCards.splice(
        newCards.findIndex((card) => card.id === action.payload.id) + 1,
        0,
        newCard
      );
      return {
        ...state,
        cards: newCards,
      };
    case DELETE_CARD:
      newCards = [...state.cards];
      newCards.splice(
        newCards.findIndex((card) => card.id === action.payload),
        1
      );
      return {
        ...state,
        cards: newCards,
      };
    case EDIT_CARD:
      newCards = [...state.cards];
      newCards.splice(
        newCards.findIndex((card) => card.id === action.payload.id),
        1,
        action.payload
      );
      return {
        ...state,
        cards: newCards,
      };
    default:
      return state;
  }
};

export default CardsReducer;
