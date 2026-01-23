import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import api from "../../services/api";

const SendOTP = ({ setStep, setEmail }) => {
  const [email, setEmailLocal] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOTP = async () => {
    try {
      setLoading(true);
      await api.post("/auth/send-otp", { email });
      setEmail(email);
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message || "OTP send failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Input
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmailLocal(e.target.value)}
      />
      <Button text="Send OTP" onClick={sendOTP} loading={loading} />
    </>
  );
};

export default SendOTP;
