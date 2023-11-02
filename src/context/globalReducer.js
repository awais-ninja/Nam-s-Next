const initialState = {
  darkMode: false,
  menuOpen: false,
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARKMODE": {
      return { ...state, darkMode: !state.darkMode };
    }
    case "TOGGLE_MENUOPEN": {
      return { ...state, menuOpen: !state.menuOpen };
    }
    default: {
      throw new Error("The Type is wrong");
    }
  }
};

export { globalReducer, initialState };
