import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./fetchRelatedVideoApi";

//Initial State
const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

//Fetch videos
export const fetchRelatedVideos = createAsyncThunk(
  "related/fetchVideos",
  async (tags, id) => {
   
    const videos = await getRelatedVideos(tags, id);
    return videos;
  }
);

//Create slice
const relatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos?.pending, (state) => {
        (state.isError = false), (state.isLoading = true);
      })
      .addCase(fetchRelatedVideos?.fulfilled, (state, action) => {
        (state.isError = false),
          (state.isLoading = false),
          (state.videos = action.payload);
      })
      .addCase(fetchRelatedVideos?.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.videos = []),
          (state.errorMessage = action.errorMessage?.message);
      });
  },
});

// export const {} = videoSlice.actions;

export default relatedVideoSlice.reducer; //i am not manually dispatch so export reducer
