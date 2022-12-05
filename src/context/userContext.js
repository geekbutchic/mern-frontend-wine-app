import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserContextProvider = (props) => {
  const { children } = props;
  const userInitialState = undefined;

  const [user, setUser] = useState(userInitialState);

  const signIn = (userData) => {setUser(userData)};

  const signOut = () => {setUser(userInitialState)};

  // console.log(`USER STATE FROM CONTEXT PROVIDER: `, user);

  return (
    <userContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
