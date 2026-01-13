"use client";
import { useState, useContext } from "react";
import { verifyOtp } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState("");
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone");

  const handleVerify = async () => {
    const res = await verifyOtp(phone, otp);
    if (res.success) {
      login(res.token, res.user); // store JWT & user info
      router.push("/dashboard"); // redirect after login
    } else {
      alert(res.message);
    }
  };

  return (
    <div>
      <h1>Enter OTP</h1>
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
}
