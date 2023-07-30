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
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const videos = await getVideos();
  return videos;
});

//Create slice
const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

// export const {} = videoSlice.actions;

export default videoSlice.reducer;
