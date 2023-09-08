import { axiosInstance } from "../../../utlis/axios/axios";

export const tagsFetch = async () => {
  const response = await axiosInstance.get("/tags");
  return response?.data;
};
