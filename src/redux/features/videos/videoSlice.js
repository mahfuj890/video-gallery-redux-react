import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./fetchVideoApi";

//Initial State
const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

//Fetch videos
export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ selectedTags, searchText }) => {
    const videos = await getVideos(selectedTags, searchText);
    return videos;
  }
);

//Create slice
const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos?.pending, (state) => {
        (state.isError = false), (state.isLoading = true);
      })
      .addCase(fetchVideos?.fulfilled, (state, action) => {
        (state.isError = false),
          (state.isLoading = false),
          (state.videos = action.payload);
      })
      .addCase(fetchVideos?.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.videos = []),
          (state.errorMessage = action.errorMessage?.message);
      });
  },
});

// export const {} = videoSlice.actions;

export default videoSlice.reducer; //i am not manually dispatch so export reducer
