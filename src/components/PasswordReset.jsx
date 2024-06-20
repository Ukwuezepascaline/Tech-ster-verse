import logo from '../assets/updatedlogo.svg'
import  nightmode from '../assets/techsterLogo-Dark.svg'
import passwordReset from '../assets/Passwordreset.svg'
import { Link} from 'react-router-dom'
import ThemeSwitcher from "./ThemeSwitcher";

const PasswordReset = () => {
    return (
      <section className=" dark:bg-slate-950 lg:bg-white md:grid md:grid-cols-2 h-screen"> {/* CONTAINER */}

          <section className='z-0'>
          {/* LOGO */}
              <img
                src={logo}
                className="dark:hidden flex justify-start mt-8 ml-6 w-52 md:w-auto"
                alt="lightmode-Logo" />

              <img
                className="hidden dark:flex dark:justify-start mt-8 ml-6 w-52 md:w-auto"
                src={nightmode}
                alt="nightmode-Logo"
              />

              <form action=''
                    className="flex flex-col items-center mt-36 gap-6">

                    {/* PASSWORDRESET INFO */}
                    <h1 className='dark:text-white font-bold text-2xl md:text-3xl'>Password reset</h1>

                    <p className='text-sm md:text-base dark:text-white'>Your password has been reset successfully</p>


                    <Link to="/user-login">
                      <button className=" bg-violet-900 w-40 md:w-52 h-12 rounded-md text-white">Continue to login</button>
                    </Link>
              </form>
          </section>

        {/* RIGHT IMAGE */}
        <section className="bg-grey dark:bg-slate-900 z-0">
          <img
            src={passwordReset}
            alt="PasswordResetImage"
            className='hidden md:flex' />
          <ThemeSwitcher className="z-20 flex"/>
        </section>
      </section>
    );
};

export default PasswordReset;
