import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null },
  reducers: {
    setCurrentUser: (state, action) => {
      const { payload } = action;
      console.log(payload);
      return {
        ...state,
        currentUser: payload,
      };
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;

//.........................//

// const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

// const INITIAL_STATE = {
//   : null,
// };

// export const userReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };
