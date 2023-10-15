import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../redux/features/videos/videoSlice";
import tagsSlice from "../redux/features/tags/tagsSlice";
import videoDetailsSlice from "../redux/features/videoDetails/videoDetailsSlice";
import relatedVideoSlice from "../redux/features/relatedVideos/relatedVideoSlice";

const store = configureStore({
  reducer: {
    videos: videoSlice,
    tags: tagsSlice,
    videoDetails: videoDetailsSlice,
    videoRelated: relatedVideoSlice,
  },
});

export default store;
