import mobile from "../../assets/heat.png";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <main className="h-screen flex flex-col bg-gradient-to-b from-regal-100 via-black-40% md:via-35% lg:via-25% xl:via-50% to-regal-200">

      <div className="fixed">
        <Navbar />
      </div>
      <div className="-z-50">
        <img
          src={mobile}
          alt="Portfolio Preview"
          className="w-full block md:hidden"
        />
      </div>
    </main>
  )
}

export default Home