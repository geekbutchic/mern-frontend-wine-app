import { configureStore, createSlice } from "@reduxjs/toolkit";
//REDUX HOLDS ENTIRE STORE

//SLICES FOR GLOBAL STATE REASONS
const userSlice = createSlice({
  name: "user",
  initialState: null, //REDUX DOES NOT ACCEPT UNDEFINED AS A DEFAULT VALUE
  reducers: {
    //REDUCERS RETURN OUR STATE
    //ACTION NAME
    signInAction: (state, action) => action.payload,
    signOutAction: (state, action) => null,
  }
})

//ACTION CREATORS ARE FUNCTIONS THAT CREATE OUR ACTIONS
export const { signInAction, signOutAction } = userSlice.actions;

//REDUX STORE
const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default store 