import och from "../../assets/img/och-logo.svg";
import brz from "../../assets/img/breezr-logo.svg";
import pc from "../../assets/img/pc-logo.svg";
import pup from "../../assets/img/puplar.svg";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="text-center">
      <div className="work w-[68%] bigPhone:w-[226px] py-2.5 uppercase md:hidden">
        <p className="ml-4 flex items-center m-0 md:pb-0 space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="font-medium !text-white">Available for work
          </span>
        </p>
      </div>

      <div className="font-display mx-auto text-5xl md:text-6xl text-white mt-8 md:mt-0">
        <h1 className="text-left md:text-center">beck kanno</h1>
          <h1 className="leading-[3rem]">— user interface <br /><span className="ml-16">designer©</span>
        </h1>
      </div>

      <div
        className="hidden md:flex md:flex-col w-fit mx-auto "
      >
        <div
          className="uppercase mx-auto mt-8 body-work p-5 flex align-middle  space-x-5"
        >
          <div className="font-bold flex gap-8 text-xl font-display">
            <p>web/app design</p>
            <p>design system</p>
            <p>product design</p>
            <p>web development</p>
          </div>

          <p className="font-bold gap-8 text-xl font-display">—</p>

          <div className="flex space-x-4">
            <Link to="https://onlinecoursehost.com"
              className="p-1.5 hover:rounded-[4px] m-auto hover:bg-[#fff2] hover:transition-colors hover:duration-300 hover:ease-out"
            >
              <img
                src={och}
                alt="OnlineCourseHost.Com logo"
                width={22}
                height={22}
              />
            </Link>

            <Link to="https://portal-check.vercel.app"
              className="p-1.5 hover:rounded-[4px] m-auto hover:bg-[#fff2] hover:transition-colors hover:duration-300 hover:ease-out"
            >
              <img
                src={pc}
                alt="Portal Check logo"
                width={22}
                height={22}
              />
            </Link>

            <Link to="https://breeze.africa/"
              className="p-1.5 hover:rounded-[4px] m-auto hover:bg-[#fff2] hover:transition-colors hover:duration-300 hover:ease-out"
            >  
              <img
                src={brz}
                alt="Breeze logo"
                width={22}
                height={22}
              />
            </Link>
              
            <Link to="https://puplar.com"
              className="p-1.5 hover:rounded-[4px] m-auto hover:bg-[#fff2] hover:transition-colors hover:duration-300 hover:ease-out"
            >
            <img
              src={pup}
              alt="Puplar logo"
              width={22}
              height={22}
            />
            </Link>
          </div>
        </div>
      </div>

      <div className="font-body uppercase mx-auto mt-8 body p-5 md:hidden">
        <div className="grid font-semibold grid-cols-2 gap-4 text-[15px] font-nav">
          <p>web/app design</p>
          <p>design system</p>
          <p>product design</p>
          <p>web dev</p>
        </div>
      </div>
      
      
      <div className="flex body-work mx-auto justify-center md:hidden space-x-4 w-[45%] p-2.5 mt-3">
        <img
          src={och}
          alt="OnlineCourseHost.Clogo"
          width={22}
          height={22}
        />

        <img
          src={pc}
          alt="Portal Check logo"
          width={22}
          height={22}
        />


        <img
          src={brz}
          alt="Breeze logo"
          width={22}
          height={22}
        />
          

        <img
          src={pup}
          alt="Puplar logo"
          width={22}
          height={22}
        />
      </div>
    </div>
  )
}

export default Header