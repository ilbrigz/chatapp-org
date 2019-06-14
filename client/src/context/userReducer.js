import { UPDATE_MENU } from "./types";

const updateMenuState = (menuOpened, state) => {
  return {
    ...state,
    menuOpened
  };
};

export default (state, action) => {
  switch (action.type) {
    case UPDATE_MENU:
      return updateMenuState(!state.menuOpened, state);
    default:
      return state;
  }
};
