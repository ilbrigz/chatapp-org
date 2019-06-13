import { UPDATE_MENU } from "./types";

const updateMenuState = (menuState, state) => {
  return {
    ...state,
    menuState
  };
};

export default (state, action) => {
  switch (action.type) {
    case UPDATE_MENU:
      return updateMenuState(action.payload, state);
    default:
      return state;
  }
};
