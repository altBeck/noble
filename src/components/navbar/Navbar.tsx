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
import doc from "../../assets/img/doc.svg"
;
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
    <nav className="px-3 py-4 fixed w-full z-20 top-0 left-0 border-gray-600 ">
      <div className="flex container flex-wrap justify-between mx-auto">
        <div className="rounded-xl border border-regal-300 bg-regal-200 p-3 gap-2.5 point">
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
          className="rounded-xl border border-regal-300 bg-regal-200 p-3  gap-2.5 point"
        >
          <img 
            src={menuOpen ? close : menu}
            alt={menuOpen ? 'Close menu' : 'Open menu'}
          />
        </div>


        {menuOpen && (
          <div className="absolute top-[90%] right-0 w-[70%] bg-regal-400 border border-sliteWhite-100 point m-3 text-white rounded-xl">
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

                <div className="py-2.5 pl-3 rounded-lg bg-white">

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
                  <li className="py-2.5 pl-3 hover:rounded-lg hover:bg-black">
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

                  <li className="py-2.5 pl-3 hover:rounded-lg hover:bg-black">
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


                  <li className="py-2.5 pl-3 hover:rounded-lg hover:bg-black">
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

                  <li className="py-2.5 pl-3 hover:rounded-lg hover:bg-black">
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
                  <li className="py-2.5 pl-3 rounded-lg bg-[#C6FE22] text-[#344054]">
                    <Link 
                    to="https://drive.google.com/drive/folders/1cjqR736qy4tTq27y3Uy9iVOpvLMQHvbx"
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
                          Download resume
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