import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utilities/firebase/firebase.utility";


export const fetchCategories = createAsyncThunk(
  "categories/categoriesListLoading",
  async (_, { rejectWithValue }) => {
    try {
      const categoryMap = await getCategoriesAndDocuments();
      return categoryMap;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesMap: {},
    isLoading: false,
    error: null,
  },
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
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      const { payload } = action;
      console.log(payload);
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchCategories.fulfilled]: (state, action) => {
      const { payload } = action;
      console.log(payload);
      return {
        ...state,
        categoriesMap: payload,
        isLoading: false,
      };
    },
    [fetchCategories.rejected]: (state, action) => {
      const { payload } = action;
      console.log(payload);
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    },
  },
});

export const { setCategoriesMap } = categoriesSlice.actions;

export default categoriesSlice.reducer;
