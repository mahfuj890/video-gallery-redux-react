import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideoDetails } from "./fetchVideoDetailsApi";

//Initial State
const initialState = {
  videos: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

//Fetch videos
export const fetchVideoDetails = createAsyncThunk(
  "videos/fetchVideoDetails",
  async (id) => {
    const videos = await getVideoDetails(id);
    return videos;
  }
);

//Create slice
const videoSlice = createSlice({
  name: "videoDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoDetails?.pending, (state) => {
        (state.isError = false), (state.isLoading = true);
      })
      .addCase(fetchVideoDetails?.fulfilled, (state, action) => {
        (state.isError = false),
          (state.isLoading = false),
          (state.videos = action.payload);
      })
      .addCase(fetchVideoDetails?.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.videos = {}),
          (state.errorMessage = action.errorMessage?.message);
      });
  },
});

// export const {} = videoSlice.actions;

export default videoSlice.reducer; //i am not manually dispatch so export reducer
