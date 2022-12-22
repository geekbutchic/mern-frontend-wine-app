import { createSlice } from "@reduxjs/toolkit";

//SLICES FOR GLOBAL STATE REASONS
const userSlice = createSlice({
  name: "user",
  initialState: null, //REDUX DOES NOT ACCEPT UNDEFINED AS A DEFAULT VALUE
  reducers: {
    //REDUCERS RETURN OUR STATE
    //ACTION NAME
    signInAction: (state, action) => action.payload,
    signOutAction: () => null
  }
});

//ACTION CREATORS ARE FUNCTIONS THAT CREATE OUR ACTIONS
export const { signInAction, signOutAction } = userSlice.actions;

export const { reducer } = userSlice;

