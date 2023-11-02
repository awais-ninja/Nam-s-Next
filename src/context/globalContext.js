import { createContext, useReducer } from "react";
import { globalReducer, initialState } from "./globalReducer";
const GlobalContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
// what we have to export?
// we made 2 things GlobalContext, balContextProvider
