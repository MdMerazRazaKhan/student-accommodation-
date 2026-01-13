"use client";
import { useState, useContext } from "react";
import { loginUser } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async () => {
    const res = await loginUser(phone);
    if (res.success) {
      // OTP sent, go to verify page
      router.push(`/verify-otp?phone=${phone}`);
    } else {
      alert(res.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleLogin}>Send OTP</button>
    </div>
  );
}
