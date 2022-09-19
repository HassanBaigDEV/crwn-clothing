import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { categoriesMap: {} },
  reducers: {
    setCategoriesMap: (state, action) => {
      const { payload } = action;
      console.log(payload);
      return {
        ...state,
        categoriesMap: payload,
      };
    },
  },
});

export const { setCategoriesMap } = categoriesSlice.actions;

export default categoriesSlice.reducer;
