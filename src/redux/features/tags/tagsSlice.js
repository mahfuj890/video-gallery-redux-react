import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tagsFetch } from "./fetchTagsApi";

//Initial State
const initialState = {
  tags: [],
  isLofetchTagsading: false,
  isError: false,
  errorMessage: "",
};

//Fetch videos
export const fetchTags = createAsyncThunk("tag/fetchTags", async () => {
  const tags = await tagsFetch();
  return tags;
});

//Create slice
const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags?.pending, (state) => {
        (state.isError = false), (state.isLoading = true);
      })
      .addCase(fetchTags?.fulfilled, (state, action) => {
        (state.isError = false),
          (state.isLoading = false),
          (state.tags = action.payload);
      })
      .addCase(fetchTags?.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.tags = []),
          (state.errorMessage = action.errorMessage?.message);
      });
  },
});

// export const {} = videoSlice.actions;

export default tagsSlice.reducer; //i am not manually dispatch so export reducer
