import { useState, useEffect } from "react";
import darkLogo from "../assets/techsterLogo-Dark.svg";
import lightLogo from "../assets/techsterLogo-Light.svg"
import VerifiedEmailImg from "../assets/verifiedEmail-Img.png";

const VerifiedEmail = () => {
  //Theme management state
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, []);
 
  //Toggles between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const themeStyles = {
    light: {
      backgroundColor: "white",
      color: "#24292E",
    },

    dark: {
      backgroundColor: "#080010",
      color: "#ffffff",
      imgWrapper: {
        backgroundColor: "#0F001E",
      },
    },
  };

const logo =
  theme === "light" ? (
    <img src={lightLogo} alt="Light Logo" />
  ) : (
    <img src={darkLogo} alt="Dark Logo" />
  ); //Renders logo based on theme

  return (
    <div className="VerifiedEmail" style={themeStyles[theme]}>
      <div className="flex h-screen">
        <div className="textWrapper w-1/2 pl-[0px]">
          <div className="pt-[63px] flex justify-around">
            {logo}

            <button onClick={toggleTheme}>
              Toggle {theme === "light" ? "Dark" : "Light"} Theme
            </button>
          </div>

          <div
            className="w-[498px] mx-auto text-center mt-[150px]"
            style={{ color: themeStyles[theme].color }}
          >
            <h2 className="text-[40px] mb-[30px] font-bold">Verified</h2>
            <p className="text-2xl mb-[30px]">
              Your account has been verified successfully.
            </p>

            <button
              type="submit"
              className="px-0 py-[14px] bg-[#4B04A0] text-white font-semibold rounded-[10px] w-[400px]"
            >
              Done
            </button>
          </div>
        </div>

        <div
          className="imgWrapper w-1/2 "
          style={themeStyles[theme].imgWrapper}
        >
          <img
            src={VerifiedEmailImg}
            alt="Verified image"
            className="py-[50px] px-[82px]"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifiedEmail;
