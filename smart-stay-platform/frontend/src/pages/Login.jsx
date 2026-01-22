import { useState } from "react";
import SendOTP from "../components/auth/SendOTP";
import VerifyOTP from "../components/auth/VerifyOTP";

const Login = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 p-6 border rounded">
        <h2 className="text-xl font-bold mb-4 text-center">
          OTP Login
        </h2>

        {step === 1 && <SendOTP setStep={setStep} setEmail={setEmail} />}
        {step === 2 && <VerifyOTP email={email} />}
      </div>
    </div>
  );
};

export default Login;
