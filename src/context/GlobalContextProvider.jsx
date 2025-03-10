import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  lang: "en",
  welcome: true,
};

export function getLanguage(lang, script) {
  if (lang === "en") {
    return script.en;
  } else {
    return script.de;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LANG": {
      return {
        ...state,
        lang: state.lang === "en" ? "de" : "en",
      };
    }
    case "TOGGLE_WELCOME": {
      return {
        ...state,
        welcome: false,
      };
    }
    default:
      throw new Error("Bad Action Type");
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
