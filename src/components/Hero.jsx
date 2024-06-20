import { Link } from "react-router-dom";
import SideArrow from "../assets/side-arrow.svg";

const Hero = () => {
  return (
    <section className="pt-[8rem] pl-[8rem] pb-[10rem] max-w-full">
      <h1 className="text-white font-nunito text-6xl font-medium leading-[84px] tracking-[-0.4px] pr-[20rem]">
        Empowering collaboration For Real-World Solution
      </h1>
      <p className="text-white-50 font-ptSans text-2xl font-normal leading-10 tracking-[0.64px] pr-[10rem]">
        Join our platform now and unlock a world of opportunities for
        professional growth, networking, and impactful collaborations.
      </p>
      <button className="rounded-[100px] bg-white mt-12 pl-4 flex items-center gap-3">
      
       <Link to="/create-account" className="font-nunito text-center text-lg font-bold leading-[60px]">
       Let&apos;s collaborate
       </Link>
       
        <div className="rounded-full w-[35px] h-[35px] bg-primary p-3 mr-3">
         <img src={SideArrow} alt=""  />
        </div>
      </button>
    </section>
  );
};

export default Hero;
