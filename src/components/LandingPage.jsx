// eslint-disable-next-line no-unused-vars
import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import Hero from "./Hero";
import SearchIcon from "../assets/search-icon.png";
import AwardIcon from "../assets/turnament-icon.png";
import TeamIcon from "../assets/users-icon.png";
import FeatureImg from "../assets/featureImage.png";
import GetintouchImg from "../assets/getIntouchImg1.png";
import GetintouchImge from "../assets/getIntouchImg2.png";
import GetintouchImges from "../assets/getIntouchImg3.png";
import SideArrow from "../assets/side-arrow.svg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


function Icon({ id, open }) {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-6 h-6">
    
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

function LandingPage() {

  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div>
        <section className="overview" id="overview">
          <h1 className="text-center text-4xl font-bold text-primary pt-14">Overview</h1>
          <div className="grid grid-cols-1">
            <p className="text-center text-lg text-black py-10 px-4">Learn more about our dynamic platform, the diverse target audience we <br /> 
              cater to, and the exclusive benefits of joining our Platform..
            </p> 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center bg-grey rounded-lg p-16 mx-16 mx-16-md">
            <div className="p-12 rounded shadow-lg bg-primary">
              <div className="font-semibold text-white text-4xl pb-6">About Platform</div>
              <p className="text-white text-lg pb-16">Techsterverse is space for developers <br />
                to connect, collaborate and work on projects.
              </p>
              <p className="py-5 text-white">
                Learn more
              </p>
            </div>
            
            <div className="p-12 rounded shadow-lg bg-white">
              <div className="font-semibold text-black text-4xl pb-6">About Platform</div>
              <p className="text-black text-lg pb-16">
                Techsterverse is space for developers <br />
                to connect, collaborate and work on projects.
              </p>
              <p className="py-5">
                Learn more 
              </p>
            </div>
          </div>
        </section>

        <section className="feature" id="feature">
          <h1 className="text-center font-bold text-4xl text-primary pt-16 pb-8">Features</h1>
          <p className="text-center text-lg px-4">Our platform provides a space where you can partner with other developers <br /> 
            to tackle exciting new projects, develop new skills and build valuable <br />
            connections in the world of technology.
          </p>

          <div className="flex flex-md justify-center gap-8 p-14">
            <div>
              <button className="h-14 border-2 border-indigo-600 text-black-200 font-semibold py-4 px-6 rounded-full">
              <img src={SearchIcon} alt="SearchIcon" className="icon-uses" /> <span className="pl-12">Teammates</span>
              </button>
            </div>
            <div>
              <button className="h-14 border-2 border-indigo-600 text-black-200 font-semibold py-4 px-6 rounded-full">
              <img src={TeamIcon} alt="TeamIcon" className="icon-uses" /> <span className="pl-12">Teams</span>
              </button>
            </div>
            <div>
              <button className="h-14 border-2 border-indigo-600 text-black-200 font-semibold py-4 px-6 rounded-full">
              <img src={AwardIcon} alt="AwardIcon" className="icon-uses" /> <span className="pl-12">Tournaments</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-center bg-grey p-16">
            <img src={FeatureImg} alt="FeatureImg" className="feature-image" />
          </div>
        </section>

        <section className="getinTouch" id="getInTouch">
          <h1 className="text-center text-4xl font-bold text-primary pt-14">Get In Touch</h1>
          <div className="grid grid-cols-1">
            <p className="text-center text-lg text-black py-10 px-4">Our team is made up of talented and dedicated students who are passionate <br />
            about technology. We are committed to creating a platform that empowers <br />
            developers to connect, collaborate, and build amazing projects together.
            </p> 
          </div>
          <div className="flex justify-center py-2 px-14">
            <div><img src={GetintouchImg} alt="GetintouchImg" className="getintouch-image" /></div>
            <div><img src={GetintouchImge} alt="GetintouchImge" className="getintouch-image" /></div>
            <div><img src={GetintouchImges} alt="GetintouchImges" className="getintouch-image" /></div>
            <div><img src={GetintouchImg} alt="GetintouchImg" className="getintouch-image" /></div>
            <div><img src={GetintouchImge} alt="GetintouchImge" className="getintouch-image" /></div>
            <div><img src={GetintouchImges} alt="GetintouchImges" className="getintouch-image" /></div>
            <div><img src={GetintouchImg} alt="GetintouchImg" className="getintouch-image" /></div>
            <div><img src={GetintouchImge} alt="GetintouchImge" className="getintouch-image" /></div>
            <div><img src={GetintouchImges} alt="GetintouchImges" className="getintouch-image" /></div>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="grid grid-cols-1">
            <p className="text-center text-lg text-black py-10 px-4">We are currently looking for developers and sponsors, who share our vision for the future <br />
            of the tech industry. If you are interested in joining our team or sponsorship, please contact <br />
            us to learn more about how you can get involved.
            </p> 
          </div>

          <h1 className="text-center text-4xl font-bold text-primary pt-14">Frequently asked questions</h1>
          <div className="grid grid-cols-1 justify-center p-16 mx-24 mx-16-md">
            <div className="border-b-2 border-grey py-4">
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  What is your platform about?
                </AccordionHeader>
                <AccordionBody>
                <p className="text-center text-lg text-black py-10 px-4">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                </AccordionBody>
              </Accordion>
            </div>
            <div className="border-b-2 border-grey mx-16-md py-4">
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  What is your platform about?
                </AccordionHeader>
                <AccordionBody>
                <p className="text-center text-lg text-black py-10 px-4">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                </AccordionBody>
              </Accordion>
            </div>
            <div className="border-b-2 border-grey py-4">
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                What is your platform about?
                </AccordionHeader>
                <AccordionBody>
                <p className="text-center text-lg text-black py-10 px-4">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                </AccordionBody>
              </Accordion>
            </div>
            <div className="border-b-2 border-grey py-4">
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  What is your platform about?
                </AccordionHeader>
                <AccordionBody>
                <p className="text-center text-lg text-black py-10 px-4">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </section>
        
        <section className="signUp" id="signUp">
          <div className="grid grid-cols-1 bg-primary py-8">
            <h1 className="text-center text-4xl font-bold text-white pt-14 px-2">So what are you waiting for?</h1>
            <p className="text-center text-lg font-normal text-white py-2 px-4">
              Sign up today and start exploring all that our platform has to offer!
            </p> 
            <form>
              <div className="justify-center py-2 px-14 mx-30 mx-16-md pb-8">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="py-3 px-4 block w-full rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  required
                  aria-describedby="email-error"
                  placeholder="example@email.com"
                />
                <button className="submit-icon" type="submit" value="submit">
                  <img src={SideArrow} alt="" />
                </button>
              </div>
            </form>
          </div>
        </section>

      </div>
    </>
  );
}

export default LandingPage;
