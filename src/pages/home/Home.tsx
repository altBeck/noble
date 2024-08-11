import mobile from "../../assets/heat.png";
import desktop from "../../assets/pimp.png";
import { Navbar, Header } from "../../components";

const Home = () => {
  return (
    <main className="h-full relative w-full flex flex-col bg-gradient-to-b from-regal-100 via-black-40% md:via-35% lg:via-25% xl:via-50% to-regal-200">

      <section
        className="h-100dvh flex flex-col bg-gradient-to-b md:p-3  from-regal-100 via-black-40% md:via-35% lg:via-25% xl:via-50% to-regal-200"
      >
        <div className="fixed z-50">
          <Navbar />
        </div>

        <div className="-z-50">
          <img
            src={mobile}
            alt="Portfolio Preview"
            className="w-full block md:hidden"
          />

          <img
            src={desktop}
            alt="Portfolio Preview"
            className="w-full hidden md:flex md:flex-col md:justify-center md:align-middle m-auto "
          />
        </div>

        <section className="md:hidden flex flex-col justify-center  mx-auto p-6 inset-0 absolute">
          <Header />
        </section>
      </section>


      <section
        className=""
      >
        
      </section>
    </main>
  )
}

export default Home