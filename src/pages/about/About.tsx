import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components"

import brz from "../../assets/img/breezr-logo.svg";
import dsgn from "../../assets/img/dsgn.svg";
import ide from "../../assets/img/ide.svg";
import db from "../../assets/img/db.svg";
import mail from "../../assets/img/mail.svg";
import link from "../../assets/img/linkedin-icon.svg";
import x from "../../assets/img/x-icon.svg";


const About = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('drkannobeck@gmail.com');
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="pt-24 h-screen">
      <div>
        <Navbar />
      </div>

      <div className="py-5 px-4">
        <h1 className="text-[40px] font-medium font-body">About</h1>

        <p className="mt-2 text-gray-400 text-lg font-body">I'm a product designer and user interface engineer, specializing in fintech product design and building comprehensive design systems and dashboards.</p>

        <div className="flex space-x-3 items-center content-center mt-3">
          <div className=" text-gray-400 text-lg font-body">Presently at</div>
          <div className="items-center flex flex-row space-x-2">
            <div className="rounded-xl border border-regal-300 bg-regal-200 p-3 gap-2.5 point">
              <img 
                src={brz}
                width={16}
                height={16}
                alt="breeze logo"
              />
            </div>

            {/*
            <div className="rounded-xl border border-regal-300 bg-regal-200 p-3 gap-2.5 point">
              <img 
                src={pup}
                width={16}
                height={16}
                alt="puplar logo"
              />
            </div>
            */}

          </div>
        </div>

        <div
          className="mt-8 bg-regal-400 border border-sliteWhite-100 point text-white rounded-xl w-full m-auto p-4 font-body flex flex-col space-y-6"
        >
          <div>
            <div className="flex items-center space-x-3">
              <img 
                src={dsgn}
                alt="design icon"
                className="p-1.5 backDoor"
              />
              <p>
                Design System & User Experience
              </p>
            </div>
            <div>
              <p className="pt-3 text-gray-300">
                A broad and reuseable UI library made from research, ideation, high fidelity design to prototype.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3">
              <img 
                src={db}
                alt="dashboard icon"
                className="p-1.5 backDoor"
              />
              <p>
                Dashboard Designs
              </p>
            </div>
            <div>
              <p className="pt-3 text-gray-300">
              An intuitive and cohesive dashboard design framework crafted for optimal user experience and impactful data visualization.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3">
              <img 
                src={ide}
                alt="dashboard icon"
                className="p-1 backDoor"
              />
              <p>
                Web Development
              </p>
            </div>
            <div>
              <p className="pt-3 text-gray-300">
              Proficient in crafting dynamic and responsive websites in both no-code platforms like Framer and Webflow, and coding tools like VS Code and React.
              </p>
            </div>
          </div>
        </div>
        
        {/* CAREER */}
        <section className="my-6 font-body">
          <div
            className="mb-6"
          >
            <p className="font-semibold text-xl">Career</p>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <p 
                className="text-gray-300 text-sm font-normal py-1"
              >
                2023 – Now
              </p>
              <div>
                <p>
                  <span>
                    Product Design @&nbsp;
                    <Link
                      to="https://breeze.africa"
                      target="_blank"
                      className="text-white"
                    >
                      Breeze ↗
                    </Link>
                  </span>
                </p>
                <div
                  className="py-2 text-gray-500"
                >
                  Led the design and enhancement of dashboard interfaces for Breeze, a trade finance company supporting African supply chain businesses. Conducted user research, iterated designs based on feedback, and collaborated closely with developers for seamless implementation.
                </div>
              </div>
            </div>

            <div>
              <p 
                className="text-gray-300 text-sm font-normal py-1"
              >
                2023
              </p>
              <div>
                <p>
                  <span>
                    Web Design & Development @&nbsp;
                    <Link
                      to="https://poapool.com"
                      target="_blank"
                      className="text-white"
                    >
                      Proof Of Africa (POA) ↗
                    </Link>
                  </span>
                </p>
                <div
                  className="py-2 text-gray-500"
                >
                  Freelance web developer specializing in React, HTML, CSS, JavaScript, and TailwindCSS for mobile-first sites. Optimized performance, cutting load times by 50% and increasing traffic by 20%. Integrated Google Analytics and Tag Manager, boosting user engagement by 10%.
                </div>
              </div>
            </div>

            <div>
              <p 
                className="text-gray-300 text-sm font-normal py-1"
              >
                2022 – 2023
              </p>
              <div>
                <p>
                  <span>
                    Product Design & User Interface Development @&nbsp;
                    <Link
                      to="https://onlinecoursehost.com"
                      target="_blank"
                      className="text-white"
                    >
                      OnlineCourseHost.Com ↗
                    </Link>
                  </span>
                </p>
                <div
                  className="py-2 text-gray-500"
                >
                  Led OnlineCourseHost.Com redesign, boosting retention by 20% and sign-ups by 15%. Integrated CSS in Angular, reducing bounce rates by 25%. Ensured universal user experience with cross-browser testing.
                </div>
              </div>
            </div>

            <div>
              <p 
                className="text-gray-300 text-sm font-normal py-1"
              >
                2021
              </p>
              <div>
                <p>
                  <span>
                    Product Design Intern @&nbsp;
                    <span>Pursuant</span>
                  </span>
                </p>
                <div
                  className="py-2 text-gray-500"
                >
                  Collaborated on Pursuant's legal tech web product. Designed intuitive interfaces for users with limited legal understanding, emphasizing seamless experience. Demonstrated strong communication and teamwork skills in freelance role.
                </div>
              </div>
            </div>

            <div>
              <p 
                className="text-gray-300 text-sm font-normal py-1"
              >
                2021
              </p>
              <div>
                <p>
                  <span>
                    Frontend Developer Intern @&nbsp;
                    <p
                     className="text-white"
                    >
                      Hotels.NG (HNG)
                    </p>
                  </span>
                </p>
                <div
                  className="py-2 text-gray-500"
                >
                  Contributor to HNG's ZuriChat's React-based development, enhancing the Calendar plug-in's UI with responsive design principles, increasing user engagement by 40%. Resolved bugs, reducing page load time by 20% and boosting website performance by 15%
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="my-6 font-body">
          <div className="mb-6">
            <p className="font-semibold text-xl">Contact</p>
          </div>

          <div className="bg-regal-400 border border-sliteWhite-100 point text-white rounded-xl w-full m-auto p-4 font-body flex flex-row space-x-2">
            <div className="py-2.5 px-3 w-full rounded-md bg-white">

              <div
                className={`font-body text-sm items-center flex flex-row space-x-2  cursor-pointer ${isCopied ? 'text-green-600' : 'text-[#344054]'}`}
                onClick={handleEmailClick}
              >

                <img 
                  src={mail}
                  alt="mail icon"
                  width={20}
                  height={20}
                />

                <p
                  className="font-medium"
                >
                {isCopied ? 'Copied!' : 'drkannobeck@gmail.com'}
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Link 
                  to="https://linkedin.com/in/kanno-beck"
                  target="_blank"
                  >
                  <img 
                    src={link}
                    alt="linkedin icon"
                    width={44}
                    height={44}
                  />
                </Link>
              </div>

            </div>

          </div>
        </section>

        <section className="text-gray-400 text-lg">
          <div>
            Thank you for visiting my website. This site was designed on&nbsp;
            <Link
              to="https://figma.com"
              target="_blank"
              className="font-body text-white"
            >
              Figma ↗
            </Link> 
            &nbsp;and built with&nbsp;
            <Link 
              to="https://react.dev/"
              target="_blank"
              className="font-body text-white"
            >
            TailwindCSS ↗
            </Link>,&nbsp; 
            <Link 
              to="https://react.dev/"
              target="_blank"
              className="font-body text-white"
            >
              React ↗
            </Link>
            &nbsp; and deployed on&nbsp; 
            <Link 
              to="https://react.dev/"
              className="font-body text-white"
            >
              Netlify ↗
            </Link>
            .&nbsp;

          </div>
        </section>
      </div>

      <footer className="p-4 pt-2">
        <p>©2024 Beck Kanno</p>
      </footer>
    </div>
  )
}

export default About