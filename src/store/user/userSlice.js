import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null },
  reducers: {
    setCurrentUser: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        currentUser: payload,
      };
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
