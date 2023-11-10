import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos", //string or function(recommended) - params.objectName if you pass object
    }),
    getSingleVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`, 
    }),
  }),
});

//automatic generate hooks based on endpoints names
export const { useGetVideosQuery,useGetSingleVideoQuery } = apiSlice;
