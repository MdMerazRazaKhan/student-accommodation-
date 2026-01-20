import { BASE_URL } from "./config";
import axios from "axios";

export const sendOTP = async (phone) => {
  const res = await fetch(`${BASE_URL}/auth/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone })
  });
  return res.json();
};

export const verifyOTP = async (phone, otp) => {
  const res = await fetch(`${BASE_URL}/auth/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, otp })
  });
  return res.json();
};

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
});

export default api;
