import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./userSlice";

//CHECKS INITIAL STATE 
const preloadedState = JSON.parse(localStorage.getItem("application"))
  ? JSON.parse(localStorage.getItem("application"))
  : { user: null };

//REDUX STORE
const store = configureStore({
  reducer: {
    user: reducer
  },
  preloadedState,
});

store.subscribe(() => {
  //GET CURRENT STATE
  const state = store.getState();
  console.log(`Store State: `, state);
  //GRAB STATE AND SAVE IN LOCAL STORAGE
  //STRING OF DATA
  localStorage.setItem("application", JSON.stringify(state));
  //CONVERTS DATE INTO A STRING
});

export default store;
