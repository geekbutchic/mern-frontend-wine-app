import React from "react";
import { Routes, Route } from "react-router-dom";
import WinesByRegion from "./pages/WinesByRegion";
import SignInPage from "./pages/SignInPage";
import CartPage from "./pages/CartPage";
import HomeScreen from "./pages/HomeScreen";
import "./App.css";
//CONTEXT PROVIDER IMPORTS
// import UserContextProvider from "./context/userContext";
import ShoppingCartContextProvider from "./context/shoppingCartContext";
//REDUX STORE IMPORTS
import { Provider } from "react-redux";
import store from "./redux-state/store";
import UserRegistration from "./pages/UserRegistration";

const App = () => {
  return (
    <Provider store={store}>
      {/* <UserContextProvider> */}
        <ShoppingCartContextProvider>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/wines-by-region" element={<WinesByRegion />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<UserRegistration/>}/>
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </ShoppingCartContextProvider>
      {/* </UserContextProvider> */}
    </Provider>
  );
};

export default App;
