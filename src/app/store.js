import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../redux/features/videos/videoSlice";
import tagsSlice from "../redux/features/tags/tagsSlice";
import videoDetailsSlice from "../redux/features/videoDetails/videoDetailsSlice";

const store = configureStore({
  reducer: {
    videos: videoSlice,
    tags: tagsSlice,
    videoDetails: videoDetailsSlice,
  },
});

export default store;
