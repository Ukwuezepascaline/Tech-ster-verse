import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import darkLogo from "../assets/techsterLogo-Dark.svg";
import lightLogo from "../assets/updatedlogo.svg";
import authImg from "../assets/verifyEmail-img.png";
import { authApi } from "../api/authApi";

const VerifyEmail = () => {
  //Email verification

  const navigateTo = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]); //OTP input state array
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [error, setError] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    //OTP input auto focus
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otpInput-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  // OTP timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

  //API
  const verificationOTP =
    "https://techsterverse.onrender.com/api/v1/verify-sign-up-otp";

  const regenerateOTP =
    "https://techsterverse.onrender.com/api/v1/verify-sign-up-otp";

  // Requests user mail using api endpoint

  const handleVerifyBtn = async () => {
    try {
      // If OTP incomplete, alert user
      if (otp.some((value) => value === "")) {
        alert(`Fill in OTP fields.`);
        return;
      }

      const completeOTP = otp.join(""); //Combines the multiple OTP input from the array

      const { email, token } = location.state;

      //   Requests OTP
      const response = await authApi.post(
        verificationOTP,
        { email, otp: completeOTP },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(`Verification successful`, response.data);
      setVerificationSuccess(true);

      //  Redirect to verified email page if successful
      setTimeout(() => {
        setVerificationSuccess(false);
        navigateTo({ pathname: "/verified-email" });

        setError("Verification failed. Please try again.");
      }, 5000);
    } catch (error) {
      console.error(`Verification failed:`, error);
      setError("Invalid OTP. Please try again.");
    }
  };

  //Request OTP again
  const handleRequestAgain = async () => {
    try {
      setMinutes(1);
      setSeconds(30);

      const response = await authApi.post(regenerateOTP, {});

      console.log("New OTP generated:", response.data);
    } catch (error) {
      console.error(`Failed to generate new OTP:`, error);
    }
  };

  return (
    <div className="VerifyEmail dark:bg-black-100 font-nunito">
      <div className="flex flex-col md:flex-row h-screen sm:max-w-sm md:max-w-full">
        <div className="textWrapper w-full md:w-1/2">
          {/* Logo */}
          <div className=" pt-8 md:pt-16 ml-7 md:ml-20">
            <img src={lightLogo} alt="Logo" className="dark:hidden" />
            <img src={darkLogo} alt="Logo" className="hidden dark:block" />

            {/* Theme toggle */}
            <ThemeSwitcher />
          </div>

          {/* Text content */}
          <div className=" dark:text-white text-base md:text-2xl mx-auto w-5/6 md:w-[558px] mt-[50px] text-center ">
            <h2 className=" text-4xl md:text-5xl font-bold mb-[30px]">
              Verify Email
            </h2>
            <p>To verify your account, simply enter the 6 digit code.</p>
            <p className="mb-[30px]">
              We’ve sent a verification code to your email
            </p>

            <form
              action="#"
              className="inputField flex flex-col gap-[30px] mb-[30px]"
            >
              <div className="flex gap-2 justify-center">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    id={`otpInput-${index}`}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    value={value}
                    type="text"
                    name="otpValue"
                    maxLength={1}
                    pattern="[0-9]"
                    inputMode="numeric"
                    className="h-10 md:h-20 w-10 md:w-20 md:text-7xl text-center text-black-100 dark:text-white bg-white-50 dark:bg-black shadow-lg"
                  />
                ))}
              </div>

              <button
                onClick={handleVerifyBtn}
                disabled={seconds === 0}
                type="button"
                className=" bg-violet-900 px-4 md:px-0 py-4 md:py-4 text-white font-semibold rounded-md md:rounded-[10px] w-9/12 md:w-full self-center"
              >
                Verify
              </button>

              {/* Timer */}
              <div className="countdown">
                {(minutes > 0 || seconds > 0) && (
                  <p
                    className={
                      minutes > 0 || seconds >= 30
                        ? " text-primary"
                        : " text-error"
                    }
                  >
                    Time Left: {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </p>
                )}
              </div>

              {/* success message */}
              {verificationSuccess && (
                <div className=" text-emerald-600">
                  <p>Verification successful!</p>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="text-error text-center">
                  <p>{error}</p>
                </div>
              )}
            </form>

            <p>
              Didn’t get the code?
              <span
                className="dark:text-purple-200 text-purple-dark pl-2 cursor-pointer"
                onClick={handleRequestAgain}
              >
                Request again
              </span>
            </p>
          </div>
        </div>

        {/* Image content */}
        <div className="imgWrapper w-1/2 hidden lg:block dark:bg-purple-300">
          <img
            src={authImg}
            alt="Authentication image"
            className="px-[68px] py-9"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
