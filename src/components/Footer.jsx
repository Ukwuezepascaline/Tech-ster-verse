import { Link } from "react-router-dom";
import logo from "../assets/ftr-logo.jpg";
import twitter from "../assets/Twitter.svg";
import ig from "../assets/Instagram.svg";
import linkedin from "../assets/Linkedin.svg";
import github from "../assets/Exclude.svg";
import cpyrt from "../assets/copyright.svg"
"PT Sans", "sans-serif";


const Footer = () => {
  return (
    <div className="bg-white py-10 px-16">
      <div className="  mx-auto  font-avenir-light  items-center">
        <div className=" text-center dark:text-neutral-200 lg:text-left">
          <div className="flex items-center dark:border-neutral-500 justify-between">
            <div className="my-auto font-semibold pb-3 ">
              <img src={logo} alt="techsterverse logo" className="h-10 w-33"/>
            </div>
            <div className="flex  justify-space-between gap-16">
              <div>
                <span className="block text-green font-PT Sans sans-serif text-xl font-bold leading-11 capitalize">
                  Company
                </span>
                <ul>
                  <li>
                    <a className="text-green font-PT-Sans sans-serif text-lg font-normal leading-10 capitalize">
                      {" "}
                      About techsterVerse
                    </a>
                  </li>
                  <li>
                    <a className="text-green font-PT Sans, sans-serif text-lg font-normal leading-10 capitalize">
                      {" "}
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <span className="block text-green font-PTSans text-xl font-bold leading-11 capitalize">
                  Resources
                </span>
                <ul>
                  <li>
                    <a className="text-green font-PTSans text-lg font-normal leading-10 capitalize">
                      Help Centre
                    </a>
                  </li>
                  <li>
                    <a className="text-green font-PTSans text-lg font-normal leading-10 capitalize">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" lg:justify-between">
          
              <span className="hover:bg-blue-300 text-green font-PTSans text-lg font-normal leading-10 underline">
                enquiries@techsterVerse.com 
              </span>
              <p className="text-green font-PTSans text-lg font-normal leading-10 ">
               (+234) 000-000-0000
              </p>
            
            <div className="flex  justify-space-evenly gap-8 lg:justify-between mt-16">
              <div className="flex justify-space-between gap-4 text-l">
                <Link to="">
                  <img src={twitter} alt="instagram" />
                </Link>
                <Link to="">
                  <img src={ig} alt="twitter" />
                </Link>
                <Link to="">
                  <img src={linkedin} alt="linkedin" />
                </Link>
                <Link to="">
                  <img src={github} alt="twitter" />
                </Link>
              </div>
              
              <div className = "text-green font-PTSans text-lg font-normal leading-10 capitalize">
              <p >
                Copyright<img src={cpyrt} alt="Copyright" className="inline h-5 w-5" />  2023 TechsterVerse
              </p> 
</div>



              <div className="flex justify-space-between gap-6 text-green font-PTSans text-lg font-normal leading-10 capitalize">
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Guidelines</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
