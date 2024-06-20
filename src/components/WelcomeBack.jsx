import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import sideImage from "../assets/signin-image.png"
import googleIcon from "../assets/google-icon.png"
import githubIcon from "../assets/github-icon.png"
// import brandIcon from "../assets/logo.png"
import brandIcon from "../assets/updatedlogo.svg"
// import  nightmode from '../assets/logoDarkMode.svg'
import { auth, provider, providerGit } from "./Firebase"
import { signInWithPopup } from "firebase/auth"
import axios from "axios"
import ThemeSwitcher from "./ThemeSwitcher";

const WelcomeBack = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [value, setValue] = useState('')

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email)
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  }, []);

  const signInWithGitHub = () => {
    signInWithPopup(auth, providerGit)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  // function handles onChange events, both the eye icon and the validation before submission and the remember me option (yet to be implemented)
  const handleInputChange = (event) => {
    const { id, value } = event.target;

    if (id === 'password') {
      setFormData({ ...formData, password: value });
      setPassword(value);
    } else {
      setFormData({ ...formData, [id]: value });
    }
  }

  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState(true)
  const navigate = useNavigate()


  // function handles the for submission through login button
  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {}


    // check if email box is empty or not a type of email

    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationErrors.email = "Please input email"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "Invalid Email!"
    }

    // confirm from team for the password requirements

    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "Please input password"
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "Password must be at least 6 characters!"
    }


    // call the Api if user details pass validation
    if (isvalid) {
      axios.post('https://techsterverse.onrender.com/api/v1/signin')
        .then(result => {

          // if the inputed email matches the one saved when creating account

          const user = result.data.find(user => user.email === formData.email);
          if (user) {

            // if the inputed passwords matches the one saved  when creating account

            if (user.password === formData.password) {
              console.log("login successful");
              
              // navigate to homepage
              navigate('/')
            } else {
              validationErrors.password = "Wrong Password!";
            }
          } else {
            validationErrors.email = "Wrong Email!";
          }
          setValid(isvalid);
          setErrors(validationErrors);
        })
        .catch(err => console.log(err));
    } else {
      setValid(isvalid);
      setErrors(validationErrors);
    }
  }

  //   axios.get('https://techsterverse.onrender.com/api/v1/signin')
  //   .then(result => {
  //     result.data.map(user => {
  //       if(user.email === formData.email) {
  //         if (user.password === formData.password) {
  //           console.log("login successful")
  //         } else {
  //           isvalid = false;
  //           validationErrors.password = "Wrong Password!"
  //         }
  //       } else if(formData.email !== "") {
  //         isvalid = false;
  //         validationErrors.email = "Wrong Email!"
  //       }
  //     })
  //     setErrors(validationErrors)
  //     setValid(isvalid)
  //   })
  //   .catch(err => console.log(err))
  // }

  return (
    <>
      <div className="flex flex-row justify-center md:justify-between resetFont ">

        <div className="flex flex-col">
          <div className=" absolute z-10  top-5 left-5">
            <img src={brandIcon} alt="" className="h-10" />
          </div>
          {/* <div className=" ml-20 sm:mt-3 md:mt-6">
            <img src={brandIcon} alt="" className="h-12"/>
          </div> */}

          <div className="flex md:w-[50vw] h-screen items-center justify-center">
            <div className="flex flex-col space-y-6 ">
              <div>
                <div className="text-[40px] font-semibold  text-black">Welcome Back</div>
                <div className="text-sm font-normal">Kindly Log in to your Account to start collaborating</div>
              </div>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between text-[14px] font-semibold">

                <div className="border-2 rounded-md py-2 text-center hover:bg-gray-100 md:px-5">
                  <Link>

                    <button className="" onClick={signInWithGoogle}><img src={googleIcon} alt="" className="h-5 inline mr-2 text-sm" /><span>Log in with Google</span></button>

                  </Link>
                </div>


                <div className="border-2 rounded-md py-2 text-center hover:bg-gray-100 md:px-5">
                  <Link>

                    <button className="" onClick={signInWithGitHub}><img src={githubIcon} alt="" className="h-5 inline mr-2" /><span>Log in with GitHub</span></button>
                  </Link>
                </div>
              </div>


              <div className="flex h-[100%] justify-between px-24 items-center">
                <div className="border border-gray-300 w-24"></div>
                <div>or</div>
                <div className="border border-gray-300 w-24" ></div>
              </div>


              <div>
                <div className="">
                  <label htmlFor="email" className="block mt-2 mb-1">Email Address</label>
                  <input type="email" name="email" id="email" className=" w-full rounded-lg border  text-gray-900 py-3 px-2  text-[14px]" placeholder="Enter your email address"
                    onChange={handleInputChange}
                  />

                  {
                    valid ? <></> :
                      <span className="text-red-500 text-xs">
                        {errors.email}
                      </span>
                  }
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block mt-5 mb-1">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="w-full rounded-lg border text-gray-900 py-3 px-2  text-[14px]"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-primary"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                    </button>

                  </div>

                  {/* To display the error below the input box */}
                  {
                    valid ? <></> :
                      <span className="text-red-500 text-xs">
                        {errors.password}
                      </span>
                  }

                  <div className="flex flex-row justify-between text-[14px] mt-2">
                    <div className=" font font-medium">
                      <input type="checkbox" name="" id="checkBox" className="cursor-pointer" />
                      <label htmlFor="checkBox"> Remember me</label>
                    </div>

                    <div className="text-primary cursor-pointer hover:underline font-semibold">
                      <Link to='/forgot-password'>Forgot password?</Link>
                    </div>
                  </div>
                </div>
              </div>




              {/* <div className="flex flex-row justify-between text-[14px] ">
                <div className=" font font-medium">
                  <input type="checkbox" name="" id="checkBox" className="cursor-pointer" />
                  <label htmlFor="checkBox"> Remember me</label>
                </div>
                <div className="text-primary cursor-pointer hover:underline font-semibold">
                  <Link to='/forgot-password'>Forgot password?</Link>
                </div>
              </div> */}

              <div className="space-y-1">
                <Link>
                  <div className="border text-center sm:px-44 md:px-52 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-purple-700 tracking-wide" onClick={handleSubmit}>Login</div>
                </Link>

                <div className="flex justify-end text-[14px]">
                  <span>Don't have an account?</span>
                  <span className=" ml-1 text-primary cursor-pointer hover:underline font-medium">
                    <Link to='/create-account'>Sign up</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden md:flex md:w-[50vw] items-center justify-center bg-gray-100 border">
          <div className=" h-[90vh]">
            <img src={sideImage} alt="signup image" className="object-fill h-[100%] w-[100%]" />
          </div>
          <ThemeSwitcher className="fixed z-20 flex"/>
        </div>
      </div>
    </>
  )
}
export default WelcomeBack;