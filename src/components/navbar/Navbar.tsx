import { useState } from "react";
import { Link } from "react-router-dom";

import home from "../../assets/img/hit.svg";
import menu from "../../assets/img/menu.svg";
import close from "../../assets/img/close.svg";
import project from "../../assets/img/projects.svg";
import about from "../../assets/img/about.svg";
import stack from "../../assets/img/stack.svg";
import mail from "../../assets/img/mail.svg";
import arrow from "../../assets/img/arrow-up-right.svg";
import rcv from "../../assets/img/readcv.svg";
import lkdn from "../../assets/img/linkedin.svg";
import dbbl from "../../assets/img/dbbl.svg";
import gthb from "../../assets/img/github.svg";
import doc from "../../assets/img/doc.svg";
import ideas from "../../assets/img/bulb.svg";

const Navbar = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText('drkannobeck@gmail.com');
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <nav className="font-body px-4 py-4 fixed w-full z-20 top-0 left-0">

      {/* DESKTOP VIEW */}
      <div className="flex container flex-wrap justify-between mx-auto">
        
        <div
          className="hidden md:flex justify-between p-2.5 w-full bg-[#ffffff1a] point rounded-[10px] drop-shadow-md"
        >
          <p className="pl-2 flex items-center m-0 md:pb-0 space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-medium !text-white text-sm uppercase">Available for work
            </span>
          </p>

          <div
          className="list-none flex flex-row align-middle justify-center space-x-2"
          >
            <Link 
              to="/about"
              className="px-4 py-2 hover:rounded-[4px] font-nav font-semibold m-auto hover:bg-[#fff2] hover:transition-colors hover:duration-300 hover:ease-out"
            >
              about 
            </Link>

            <Link 
              to="/work"
              className="px-4 py-2 hover:rounded-[4px] font-nav font-semibold m-auto hover:bg-[#fff2] hover:transition-colors hover:duration-300 hover:ease-out"
            >
              work 
            </Link>

            <Link 
              to="/site-info"
              className="px-4 py-2 hover:rounded-[4px] font-nav font-semibold m-auto hover:bg-[#fff2] hover:transition-colors hover:duration-300 hover:ease-out"
            >
              site info 
            </Link>

          </div>

          <button
            className="p-2 px-6 rounded-md font-semibold font-nav text-base bg-white text-black"
          >
            <Link 
              to="https://drive.google.com/file/d/1hRKMXlBzwAMaPTp5xisGXGLnPGM-uab1/view?usp=sharing"
              target="_blank">
              View my resume
            </Link>
          </button>
        </div>


        <div className="rounded-xl border border-regal-300 bg-regal-200 p-3 gap-2.5 point md:hidden">
          <Link 
            to="/"
            >
              <img 
                src={home}
                alt="home icon"
              />
          </Link>
        </div>

        <div 
          onClick={toggleMenu}
          className="md:hidden rounded-xl border border-regal-300 bg-regal-200 p-3 gap-2.5 point"
        >
          <img 
            src={menuOpen ? close : menu}
            alt={menuOpen ? 'Close menu' : 'Open menu'}
          />
        </div>


        {/* NAV MENU */}
        {menuOpen && (
          <div className="absolute top-[90%] right-0 bg-regal-400 border border-sliteWhite-100 point m-3 text-white rounded-xl">
            <ul className="flex flex-col p-5">

            <div>
              <div className="mt-4 py-2.5 pl-3 hover:rounded-lg hover:bg-black">
                <p className="text-[#aaa] text-sm font-light">PERSONAL</p>
              </div>

              <div>
                <li className="py-2.5 pl-3 hover:rounded-lg hover:bg-black">
                  <Link to="/about">
                    <span className="space-x-2 flex items-center">
                      <img 
                        src={about}
                        alt="person icon"
                      />
                      <p>About</p>
                        
                    </span>
                  </Link>
                </li>

                <li className="py-2.5 pl-3 hover:rounded-lg hover:bg-black">
                  <Link to="/ideas">
                    <span className="space-x-2 flex items-center">
                      <img 
                        src={ideas}
                        alt="bulb icon"
                      />
                      <p>Ideas</p>
                        
                    </span>
                  </Link>
                </li>
              </div>

            </div>

            <div className="mt-4 py-2.5 pl-3 hover:rounded-lg hover:bg-black">
              <p className="text-[#aaa] text-sm font-light">WORK</p>
            </div>
              <li className="py-2.5 pl-3 hover:rounded-lg hover:bg-black">
                <Link to="/projects">
                  <span className="space-x-2 flex items-center">
                    <img 
                      src={project}
                      alt="projects icon"
                    />
                    <p>Projects</p>
                    
                  </span>
                </Link>
              </li>

              <li className="py-2.5 pl-3 hover:rounded-lg hover:bg-black">
                <Link to="/stack">
                  <span className="space-x-2 flex items-center">
                    <img 
                      src={stack}
                      alt="laptop icon"
                    />

                    <p>Stack</p>
                      
                  </span>
                </Link>
              </li>

              <div>
                <div className="mt-4 py-2.5 pl-3 hover:rounded-lg hover:bg-black">
                  <p className="text-[#aaa] text-sm font-light">WHERE TO FIND ME</p>
                </div>

                <div className="py-2.5 px-2.5 rounded-lg bg-white">

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

                    <p>
                    {isCopied ? 'COPIED!' : 'drkannobeck@gmail.com'}
                    </p>

                  </div>
                </div>

                <div className="mt-2">
                  <li className="py-2.5 pl-2.5 hover:rounded-lg hover:bg-black">
                    <Link 
                      to="https://read.cv/beck/"
                      target="_blank"
                    >
                    <span className="justify-between flex items-center">
                      <span className="flex space-x-2 items-center">
                        <img 
                          src={rcv}
                          alt="Read.cv icon"
                        />
                        <p>read.cv</p>
                        </span>
                        <img 
                          src={arrow}
                          alt="arrow icon"
                          className="mr-2"
                        />
                      </span>
                    </Link>
                  </li>

                  <li className="py-2.5 pl-2.5 hover:rounded-lg hover:bg-black">
                    <Link 
                    to="https://linkedin.com/in/kanno-beck/"
                    target="_blank"
                    >
                      <span className="justify-between flex items-center">
                        <span className="flex space-x-2 items-center">
                        <img 
                          src={lkdn}
                          alt="linkedin icon"
                        />
                        <p>LinkedIn</p>
                        </span>
                        <img 
                          src={arrow}
                          alt="arrow icon"
                          className="mr-2"
                        />
                      </span>
                    </Link>
                  </li>


                  <li className="py-2.5 pl-2.5 hover:rounded-lg hover:bg-black">
                    <Link 
                    to="https://dribbble.com/bekkr/"
                    target="_blank"
                    >
                      <span className="justify-between flex items-center">
                        <span className="flex space-x-2 items-center">
                        <img 
                          src={dbbl}
                          alt="dribbble icon"
                        />
                        <p>Dribbble</p>
                        </span>
                        <img 
                          src={arrow}
                          alt="arrow icon"
                          className="mr-2"
                        />
                      </span>
                    </Link>
                  </li>   

                  <li className="py-2.5 pl-2.5 hover:rounded-lg hover:bg-black">
                    <Link 
                    to="https://github.com/altbeck/"
                    target="_blank"
                    >
                      <span className="justify-between flex items-center">
                        <span className="flex space-x-2 items-center">
                        <img 
                          src={gthb}
                          alt="github icon"
                        />
                        <p>GitHub</p>
                        </span>
                        <img 
                          src={arrow}
                          alt="arrow icon"
                          className="mr-2"
                        />
                      </span>
                    </Link>
                  </li>
                </div>

                <div
                  className="my-4"
                >
                  <li className="py-2.5 px-2.5 rounded-lg bg-[#C6FE22] text-[#344054]">
                    <Link 
                    to="https://drive.google.com/file/d/1hRKMXlBzwAMaPTp5xisGXGLnPGM-uab1/view?usp=sharing"
                    target="_blank"
                    >
                      <span className="justify-between flex items-center">
                        <span className="flex space-x-2 items-center">
                        <img 
                          src={doc}
                          alt="document icon"
                        />
                        <p
                          className="font-medium"
                        >
                          View resume
                        </p>
                        </span>
                      </span>
                    </Link>
                  </li>
                </div>

              </div>
            </ul>
          </div>
        )}
      </div>

    </nav>
  )
}

export default Navbar