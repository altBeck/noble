import mobile from "../../assets/heat.png";
import { Navbar, Header } from "../../components";

const Home = () => {
  return (
    <main className="h-screen flex flex-col bg-gradient-to-b from-regal-100 via-black-40% md:via-35% lg:via-25% xl:via-50% to-regal-200">

      <div className="fixed z-50">
        <Navbar />
      </div>
      <div className="-z-50">
        <img
          src={mobile}
          alt="Portfolio Preview"
          className="w-full block md:hidden"
        />

      </div>
      <section className="md:hidden block mx-auto -mt-[180%] p-4">
        <Header />
      </section>
    </main>
  )
}

export default Home