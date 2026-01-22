import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import api from "../../services/api";

const VerifyOTP = ({ email }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyOTP = async () => {
    try {
      setLoading(true);
      const res = await api.post("/auth/verify-otp", { email, otp });
      alert("Login Success ✅");
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Input
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <Button text="Verify OTP" onClick={verifyOTP} loading={loading} />
    </>
  );
};

export default VerifyOTP;
