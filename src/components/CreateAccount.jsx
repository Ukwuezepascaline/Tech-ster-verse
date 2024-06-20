import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authApi } from "../api/authApi";
import VerifyModal from "./VerifyModal";
import LightLogo from "../assets/techsterverse-updated-logo.png";
import DarkLogo from "../assets/techsterLogo-Dark.svg";
import GoogleIcon from "../assets/google-icon.svg";
import SignUpImg from "../assets/sign-up.png";
// import GithubIcon from "../assets/github-icon.svg";
import EyeIcon from "../assets/eye.svg";
import EyeClosed from "../assets/eye-closed.svg";
import { BsMoon, BsSun } from "react-icons/bs";
import ClipLoader from "react-spinners/ClipLoader";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("The email address field is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("The password field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match. Try again"),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions."),
});

const CreateAccount = () => {
  const [theme, setTheme] = useState(false);
  const [isModal, setIsModal] = useState(false);
  // for show and hide password
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = async (data) => {
    setLoading(true); // Set loading state to true when submitting the form

    try {
      const response = await authApi.post("/auth/create-user", data);
      if (response.status === 201) {
        //show the modal
        // setIsModal(true);

        // extract the token from the response
        const token = response.data.token;

        // pass the token to the verify email page
        navigateTo({ pathname: "/verify-email", state: { token }});

        console.log("User created successfully");
      }
      console.log("API Response:", response.data);
    } catch (error) {
      console.log("API Error:", error);
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  };


  const closeModal = () => {
    setIsModal(false);
  }

  const togglePassword = () => {
    setPasswordType((prevPasswordType) =>
      prevPasswordType === "password" ? "text" : "password"
    );
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordType((prevConfirmPasswordType) =>
      prevConfirmPasswordType === "password" ? "text" : "password"
    );
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setTheme(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("darkMode", theme);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme((prevMode) => !prevMode);
  };

  const logo = theme ? (
    <img src={DarkLogo} alt="Dark Logo" />
  ) : (
    <img src={LightLogo} alt="Light Logo" />
  );

  return (
    <>
      <main className="flex flex-col md:flex-row h-fit">
        <section className="bg-white dark:bg-black-100 xl:pt-[3.75rem] md:pt-5 w-full md:w-1/2 pb-20 md:pb-0">
          <header
            className="sm:pl-6 md:pl-9
          xl:pl-[6.25rem] "
          >
            {logo}
            <button
              className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all "
              onClick={toggleDarkMode}
             
            >
              {theme ? <BsMoon /> : <BsSun />}
            </button>
          </header>

          <article className="px-8 sm:px-32 xl:pl-[10rem] xl:mt-[5rem] md:pr-0">
            <div className="flex flex-col">
              <h1 className="text-black text-[30px] xl:text-[2.5rem] whitespace-nowrap font-bold leading-normal tracking-[.4px] dark:text-white font-dm-sans">
                Create Your Account
              </h1>
              <span className="text-black text-sm font-normal leading-normal tracking-[0.14px] whitespace-nowrap dark:text-purple-brand font-lexend">
                Start here to create your account and start collaborating
              </span>
            </div>

            <div className="md:mr-[7.5rem] mt-6 xl:mt-12">
              <button className="flex flex-row items-center justify-center text-center gap-[.625rem] px-20 py-3 md:py-3 md:px-4 xl:px-[3.75rem] rounded-[10px] border border-solid border-black dark:bg-white-50 w-full">
                <img src={GoogleIcon} alt="" />
                <span className="text-black text-sm font-semibold font-lexend leading-[22px] tracking-[0.14px] whitespace-nowrap ">
                  Sign up with Google
                </span>
              </button>

              {/* <button className="flex flex-row items-center justify-center text-center gap-[.625rem] px-20 py-3 md:px-4 xl:px-[3.75rem] xl:py-[.75rem] rounded-[10px] border border-solid border-black dark:bg-white-50">
                <img src={GithubIcon} alt="" />
                <span className="text-black text-sm font-extralight leading-[22px] tracking-[0.14px] whitespace-nowrap">
                  Sign up with Github
                </span>
              </button> */}
            </div>

            <div className="flex flex-row items-center gap-[.57rem] ml-[1.8rem] xs:ml-[3rem] md:ml-[5.5rem] xl:ml-[11.1rem] mt-4 xl:mt-[1.8rem]">
              <hr className="bg-[#000] w-[6.25rem] dark:bg-grey" />
              <span className="text-[#000] dark:text-white-50 text-xl leading-5 font-dm-sans font-bold">
                or
              </span>
              <hr className="bg-[#000] w-[6.25rem] dark:bg-grey" />
            </div>

            <form
              className="mt-2 xl:mt-[1.8rem] md:mr-[7.5rem] xs:p-0"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="flex flex-col items-start gap-[.625rem]">
                <label className="text-black text-base font-normal leading-5 tracking-[0.16px] font-nunito dark:text-white">
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  placeholder="tunakindetitilayo@gmail.com"
                  className={`rounded-[.625rem] leading-5 tracking-[0.16px] text-sm border
                  ${
                    errors.email
                      ? "border-error border-solid"
                      : "border-solid border-black"
                  }
                  pl-[.94rem] py-[.8rem] w-full
                 placeholder:text-purple-dark placeholder:font-extralight font-nunito`}
                />
                <span className="text-error text-xs font-light leading-[20px] font-nunito">
                  {errors.email?.message}
                </span>
              </div>

              <div className="mt-2 xl:mt-5 flex flex-col items-start gap-[.625rem] relative">
                <label className="text-black text-base font-normal leading-5 tracking-[0.16px] font-nunito dark:text-white">
                  Password
                </label>

                <div className="relative w-full">
                  <input
                    {...register("password", {required: "true"})}
                    type={passwordType}
                    placeholder="************"
                    className={`rounded-[.625rem] leading-5 tracking-[0.16px] text-sm border
                    ${
                      errors.password
                        ? "border-error border-solid"
                        : "border-solid border-black"
                    }
                    pl-[.94rem] py-[.8rem] w-full
                   placeholder:text-purple-dark placeholder:font-extralight font-nunito`}
                  />
                  <img
                    src={passwordType === "password" ? EyeClosed : EyeIcon}
                    alt=""
                    className="absolute bottom-[.7rem] right-[.94rem] cursor-pointer"
                    onClick={togglePassword}
                  />
                </div>

                <span className="text-error text-xs font-light leading-[20px] font-nunito">
                  {errors.password?.message}
                </span>
              </div>

              <div className="mt-2 xl:mt-5 flex flex-col items-start gap-[.625rem] relative">
                <label className="text-black text-base font-normal leading-5 tracking-[0.16px] font-nunito dark:text-white">
                  Confirm Password
                </label>
                <div className="relative w-full">
                  <input
                    {...register("confirmPassword", {required: "true"})}
                    type={confirmPasswordType}
                    placeholder="************"
                    className={`rounded-[.625rem] leading-5 tracking-[0.16px] text-sm border
                    ${
                      errors.confirmPassword
                        ? "border-error border-solid"
                        : "border-solid border-black"
                    }
                    pl-[.94rem] py-[.8rem] w-full
                   placeholder:text-purple-dark placeholder:font-extralight font-nunito`}
                  />
                  <img
                    src={
                      confirmPasswordType === "password" ? EyeClosed : EyeIcon
                    }
                    alt="Eye Outline"
                    className="absolute bottom-[.7rem] right-[.94rem] cursor-pointer"
                    onClick={toggleConfirmPassword}
                  />
                </div>

                <span className="text-error text-xs font-light leading-[20px] font-nunito">
                  {errors.confirmPassword?.message}
                </span>
              </div>

              <div className="mt-[.5rem] xl:mt-[.94rem] flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  {...register("termsAndConditions", { required: "true" })}
                  className={`dark:bg-transparent ${
                    errors.termsAndConditions ? "border-error" : ""
                  }`}
                />
                <label className="font-nunito text-black text-sm font-light leading-[22px] dark:text-white-50">
                  I agree to the terms and conditions of
                  <span className="text-primary font-semibold dark:text-purple-brand">
                    {" "}
                    TechSterVerse
                  </span>
                </label>
              </div>
              {errors.termsAndConditions && (
                <p className="text-error text-xs font-light leading-[20px] font-nunito">
                  You must agree to the terms and conditions.
                </p>
              )}

              <button
                className="mt-2 xl:mt-5 rounded-[10px] bg-primary w-full py-[.88rem] text-white font-nunito text-base font-semibold tracking-[0.16px] leading-normal"
                type="submit"
                disabled={loading}
              >
               {loading ? <ClipLoader color="white" size={21} /> : "Sign Up"}
              </button>
            </form>
          </article>

          <p className="flex flex-row justify-end text-sm font-light tracking-[0.14px] font-nunito leading-[22px] text-black mt-[.2rem] xl:mt-[.94rem] pr-[7.5rem] dark:text-white-50">
            Have an account already?{" "}
            <span className="text-primary font-semibold dark:text-purple-200">
              <Link to="/welcome-back">
              Sign In
              </Link>
            </span>
          </p>
        </section>

        <section
          className="bg-white-50 dark:bg-purple-300
         pt-9 xl:py-[10.6rem] xl:px-24 w-1/2 hidden md:block"
        >
          <img src={SignUpImg} alt="Sign up" />
        </section>
      </main>
      {isModal && <VerifyModal onClose={closeModal} />}
    </>
  );
};

export default CreateAccount;
