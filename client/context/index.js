import { createContext, useReducer, useEffect } from "react";

// Initial state
const initialState = {
  user: null,
};

// Create context
const Context = createContext();

// Reducer function
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    // Handle other action types if needed
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// Context provider component
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => { dispatch({
        type: "LOGIN",
        payload: JSON.parse(window.localStorage.getItem("user"))

  })
},[])

  // Add other actions if needed

  return (
    <Context.Provider value={{ state, dispatch}}>
      {children}
    </Context.Provider>
  );
};

export { Provider, Context };
