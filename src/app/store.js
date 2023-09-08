import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../redux/features/videos/videoSlice";
import tagsSlice from "../redux/features/tags/tagsSlice";

const store = configureStore({
  reducer: {
    videos: videoSlice,
    tags: tagsSlice,
  },
});

export default store;
