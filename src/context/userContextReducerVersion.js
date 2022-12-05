import React, { createContext, useReducer } from "react";

export const userContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "signIn":
      return { ...action.payload.userData };
    case "signOut":
      return undefined;
    default:
      return state;
  }
};

const UserContextProvider = (props) => {
  const { children } = props;
  const userInitialState = undefined;

  const [user, dispatch] = useReducer(reducer, userInitialState);

  const signIn = (userData) =>
    dispatch({ type: "signIn", payload: { userData } });
  const signOut = () => dispatch({ type: "signOut" });

  console.log(`USER STATE FROM CONTEXT PROVIDER: `, user);
  
  return (
    <userContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
