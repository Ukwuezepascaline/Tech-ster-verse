import logo from "../assets/updatedlogo.svg";
import nightmode from "../assets/techsterLogo-Dark.svg";
import ThemeSwitcher from "./ThemeSwitcher"
import backImage from "../assets/forgot-background.png";
import { Link } from 'react-router-dom';




const ForgotPassword = () => {
  return (
    <div className="dark:bg-slate-900 flex flex-col md:flex-row h-fit gap-3">
    
      <div className="justify-center px-16 w-full md:w-1/2"> 
          <form>

            <section>
        
              <img
                className="dark:hidden w-100 md:w-60 pt-16"
                src={logo}
                alt="techsterverse Logo"
              />

              <img
                className="hidden dark:inline w-100 md:w-60 pt-16"
                src={nightmode}
                alt="techsterverse Logo"
              />
              
            </section>
            <div className="pl-30">
              <section>
                <h1 className="block text-4xl font-bold text-gray-800 dark:text-white mb-8 mt-20 pt-30">
                  Forgot password?
                </h1>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400 mb-8">
                  Don’t worry it happens. Please enter your registered email address.
                  You will receive a link to create a new password via email.
                </p>
              </section>

              <section className="row-span-2 flex flex-col">
                <label
                  htmlFor="email"
                  className="block text-sm ml-1 mb-2 dark:text-white text-left"
                >
                  Email Address
                </label>
              </section>

              <section className="row-span-2 flex flex-col">
                <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                required
                aria-describedby="email-error"
                placeholder="example@email.com"
                />
              </section>

              <section className="row-span-2 flex flex-col">
                <p
                  className="hidden text-xs text-red-600 mt-2"
                  id="email-error"
                >
                Please include a valid email address so we can get back to you
                </p>
              </section>

              <section className="row-span-2 flex flex-col mt-12">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-purple-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"
                >
                <Link to='/email-sent'>Send reset link</Link>
                </button>
                <p className="text-gray-500 text-sm text-left mt-6">
                  Back to <a href="/user-login">Login</a>
                </p>
              </section>
            </div>
          </form>
      </div> 

      <div className="bg-gray-100 justify-center dark:bg-slate-900  w-full md:w-1/2">
        <ThemeSwitcher className="adjustIcon" />
        <img src={backImage} alt="backImage" className="forgot-bgImage" />
      </div>

    </div>
  );
};

export default ForgotPassword;