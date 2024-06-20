import OtpRightImage from "../assets/verify-account-right.png"
import TechVerseLogo from "../assets/techsterLogo-Light.svg"
import TechVerseLogoDark from "../assets/techsterLogo-Dark.svg";
import TechVerseLogoLight from "../assets/techsterLogo-Light.svg";
import { useState } from "react"
import ThemeSwitcher from "./ThemeSwitcher"


const VerifyAccount = () => {
  const [otp, setOtp] = useState(Array.from({ length: 6 }).fill(""))
  const handleChange = (e, index) => {
    const { value } = e.target
    if (value.length > 1 || isNaN(Number(value))) return

    setOtp((prev) => {
      const updated = [...prev]
      updated[index] = value
      return updated
    })
  }

  return (
    <div className="flex overflow-y-clip dark:bg-black-100">
      <div className="w-full">
        <div className=" pt-8 md:pt-16 ml-7 md:ml-20">
          <img src={TechVerseLogoLight} alt="Logo" className="dark:hidden" />
          <img src={TechVerseLogoDark} alt="Logo" className="hidden dark:block" />
          <ThemeSwitcher />
        </div>
        {/* <div className="py-5 px-10">
          <img src={TechVerseLogo} alt="" />
        </div> */}
        <div className="flex justify-center items-center h-full dark:text-white">
          <div className="flex flex-col gap-y-4 items-center w-3/4 h-3/4">
            <h1 className="font-semibold text-4xl">Verify Account</h1>
            <p className="text-center">To verify your account, simply enter the 6 digit code. We've sent a verification code to your email</p>
            <form action="" className="flex flex-col gap-y-5 items-center">
              <div className="flex gap-x-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    name={index}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    className="border-0 outline-none w-12 py-3.5 rounded-lg shadow text-center bg-indigo-100"
                  />
                ))}
              </div>
              <button type="submit" className="outline-none w-2/3 py-2 rounded-md bg-indigo-800 text-white my-2">Verify</button>
            </form>
            <p className="text-sm">Didn't get the code? <span className="text-indigo-800">Request again</span></p>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-gray-50 dark:bg-black-100">
        <img src={OtpRightImage} alt="" className="h-full w-full" />
      </div>
    </div>
  )
}

export default VerifyAccount;