import { URL } from "@/constants/server";
import axios from "axios";

export const setPlaceRate = (cityName: string, rate: number) => {
  return axios.post(
    URL + "/rate",
    { cityName, rate },
    { withCredentials: true }
  );
};
