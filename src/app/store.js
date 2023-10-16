import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../redux/features/videos/videoSlice";
import tagsSlice from "../redux/features/tags/tagsSlice";
import videoDetailsSlice from "../redux/features/videoDetails/videoDetailsSlice";
import relatedVideoSlice from "../redux/features/relatedVideos/relatedVideoSlice";
import filterSlice from "../redux/features/filter/filterSlice";

const store = configureStore({
  reducer: {
    videos: videoSlice,
    tags: tagsSlice,
    videoDetails: videoDetailsSlice,
    videoRelated: relatedVideoSlice,
    filterSlice: filterSlice,
  },
});

export default store;
