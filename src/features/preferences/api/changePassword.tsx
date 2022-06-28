import { URL } from "@/constants/server";
import axios from "axios";

export const changePassword = async (
  password: string,
  confirmPassword: string
) => {
  if (password !== confirmPassword) return false;
  const response = await axios.post(
    URL + "/changePassword",
    { password },
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  if (response.status === 200) return true;
  return false;
};
