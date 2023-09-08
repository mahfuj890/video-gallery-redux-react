import { axiosInstance } from "../../../utlis/axios/axios";

export const getVideoDetails = async (id) => {
  const response = await axiosInstance.get(`/videos/${id}`);
  return response?.data;
};
