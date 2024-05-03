import och from "../../assets/img/och-logo.svg";
import brz from "../../assets/img/breezr-logo.svg";
import pc from "../../assets/img/pc-logo.svg";
import pup from "../../assets/img/puplar.svg";


const Header = () => {
  return (
    <div className="text-center">
      <div className="work w-[68%] py-2.5 uppercase">
        <p className="ml-4 flex items-center m-0 md:pb-0 space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="font-medium !text-white">Available for work
          </span>
        </p>
      </div>

      <div className="font-display mx-auto text-5xl text-white mt-8">
        <h1 className="text-left">beck kanno</h1>
          <h1 className="leading-[3rem]">— user interface <br /><span className="ml-16">designer©</span>
        </h1>
      </div>

      <div className="font-body uppercase font-semibold text-xl mx-auto mt-8 body p-5">
        <div className="grid grid-cols-2 gap-4 text-base">
          <p>web/app design</p>
          <p>design system</p>
          <p>product design</p>
          <p>frontend development</p>
        </div>
      </div>
        <div className="flex body-work mx-auto justify-center space-x-4 w-[45%] py-3 mt-3">
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