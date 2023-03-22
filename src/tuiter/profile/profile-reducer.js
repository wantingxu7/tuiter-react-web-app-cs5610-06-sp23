import {createSlice} from "@reduxjs/toolkit";
import profile from "./profiles.json"


const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    updateProfileData: (state, action) => {
      return action.payload;

    }
  }

});

export const {updateProfileData} = profileSlice.actions;
export default profileSlice.reducer;