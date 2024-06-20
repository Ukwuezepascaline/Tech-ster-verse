
import {useNavigate } from "react-router-dom";
import sideBackgroundImage from "../assets/resetPasswordAmico1.png";
import { useRef, useState, useEffect } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import ThemeSwitcher from "./ThemeSwitcher";
import LightLogo from "../assets/updatedlogo.svg";
import logo from "../assets/UPDATED navbar LOGO PNG.svg";


const MATCHPWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const ResetPassword = () => {

    const errRef = useRef();
    const navigate = useNavigate();

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false)
    const [isPwdVisible, setIsPwdVisible] = useState(false);
    const [isMatchPwdVisible, setIsMatchPwdVisible] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false)
    


    const [errMsg, setErrMsg] = useState('')
    // const [setSuccess] = useState(false);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [ pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = MATCHPWD_REGEX.test(pwd);
        const v2 = PWD_REGEX.test(matchPwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry")
            return;
        } else {
          navigate('/password-reset')
        }
        
        // setSuccess(true);
    }

    return (
      <>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {" "}
          {errMsg}{" "}
        </p>

        <section className=" dark:bg-gray-950  lg:bg-white responsiveWidth p-5 md:p-0 grid md:grid-cols-2">
          <section className="h-screen">
            <img
              className=" dark:hidden lg:ml-20 w-40 md:w-80 lg:w-60 lg:pt-10"
              src={LightLogo}
              alt="techsterverse Logo"
            />

            <img
              className="hidden dark:inline  lg:ml-20 w-40 md:w-80 lg:w-60 lg:pt-10"
              src={logo}
              alt="techsterverse Logo"
            />

            <form
              action=""
              className="  lg:bg-none grid h-2/4 grid-rows-3 mx-auto sm:px-20 lg:px-36 mt-32  lg:mt-36 "
              onSubmit={handleSubmit}
            >
              <section>
                <h2 className=" text-2xl lg:text-3xl dark:text-white text-gray-800 font-bold resetFont">
                  Reset Password
                </h2>
                <h5 className=" dark:text-white-50 lg:text-lg">
                  Please enter your new password
                </h5>
              </section>

              <section className="row-span-2 flex flex-col gap-4">
                <section className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="password"
                    className="dark:text-white-50 text-gray-800"
                  >
                    New Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      value={pwd}
                      type={isPwdVisible ? "text" : "password"}
                      placeholder="************"
                      className="border border-gray-400 resetFont text-violet-900 rounded-md h-10 bg-gray-50 px-3 pr-10 w-full"
                      onChange={(e) => setPwd(e.target.value)}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      aria-labelledby="passwordLabel"
                    />

                    <div
                      className="absolute top-2 right-4 cursor-pointer text-xl"
                      onClick={() =>
                        setIsPwdVisible((prevIsVisible) => !prevIsVisible)
                      }
                    >
                      {isPwdVisible ? (
                        <FiEye className="text-violet-900" />
                      ) : (
                        <FiEyeOff className="text-violet-900" />
                      )}
                    </div>
                  </div>
                </section>
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  <span className="ml-1  text-red text-s">
                    8 to 24 characters. <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character. <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </span>
                </p>

                <section className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="confirm_password"
                    className="dark:text-white-50 text-gray-800"
                  >
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirm_password"
                      value={matchPwd}
                      type={isMatchPwdVisible ? "text" : "password"}
                      placeholder="************"
                      className="border border-gray-400 resetFont text-indigo-900 text-sm rounded-md h-10 bg-gray-50 px-3 w-full"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      aria-labelledby="confirmLabel"
                    />

                    <div
                      className="absolute top-2 right-4 cursor-pointer text-xl"
                      onClick={() =>
                        setIsMatchPwdVisible((prevIsVisible) => !prevIsVisible)
                      }
                    >
                      {isMatchPwdVisible ? (
                        <FiEye className="text-violet-900" />
                      ) : (
                        <FiEyeOff className="text-violet-900" />
                      )}
                    </div>
                  </div>
                </section>

                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <span className="ml-1">
                    {" "}
                    Must match the first password input field.
                  </span>
                </p>

                <section>
                  <button
                    type="submit"
                    className="bg-violet-900 text-white resetFont  w-full lg:w-80 rounded-md py-1"
                  >
                    Reset
                  </button>
                </section>
              </section>
            </form>
          </section>

          <section className="bg-gray-100 w-0 md:w-full dark:bg-slate-900">
            <ThemeSwitcher className="adjustIcon" />
            <img
              src={sideBackgroundImage}
              alt="reset Password image"
              className=""
            />
          </section>
        </section>
      </>
    );}
    export default ResetPassword;
