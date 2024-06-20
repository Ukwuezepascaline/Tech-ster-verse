import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import image_icon from '../assets/Reading.png'
import light_icon from '../assets/updatedlight.png'
import dark_logo from '../assets/UPDATED LOGO PNG.png'
import {Link} from "react-router-dom";


const EmailSent = () => {


  return (
  <div className="dark:bg-black">
    <section>
        
        <img
          className="dark:hidden w-100 md:w-60 pt-8 top-5 pl-10"
          src={light_icon}
          alt="techsterverse Logo"
        />

        <img
          className="hidden dark:inline w-100 md:w-60 pt-8 top-5 pl-10"
          src={dark_logo}
          alt="techsterverse Logo"
        />
        
      </section>
     <div className="lg:grid grid-cols-2 pt-0 pb-20 bg-white dark:bg-black ">
      <div className="h-screen text-center grid place-content-center pb-40 top-[360px]">
      <h1 className="text-zinc-800 text-[30px] font-bold font-['Nunito']  dark:text-white">Email Sent!</h1>
      <br />
      <h3  className="text-zinc-800 text font-normal font-['Nunito']  dark:text-white">Check your mail for reset link...Link expires in 1hr</h3>
      <br />
      <h4><span className="text-zinc-800 text-base font-normal font-['Nunito']  dark:text-white">Didn't receive link?</span><span className="text-violet-900 text-base font-normal font-['Nunito']"> <Link to="/forgot-password">Resend link </Link></span></h4>
      </div>
      <div className="bg-gray-100 justify-center dark:bg-slate-900 w-full md:w-3/4 ">
        <ThemeSwitcher className="adjustIcon" />
        <img src={image_icon} alt="backImage" className="forgot-bgImage w-400" />
      </div>
      
    </div>
  
</div>


  );
}

export default EmailSent;