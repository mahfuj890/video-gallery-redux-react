import { axiosInstance } from "../../../utlis/axios/axios";

export const getRelatedVideos = async (tags, id) => {
  const queryString =
    tags?.length > 0
      ? tags?.map((item) => `tags_like=${item}`).join("&") +
        `&id_ne=${id}&_limit=${5}`
      : `id_ne=${id}&_limit=${5}`;
  const response = await axiosInstance.get(`/videos?${queryString}`);
  return response?.data;
};
