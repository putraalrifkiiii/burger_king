import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import Banner from "./components/Banner/Banner";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="w-full bg-green-100">
      <Navbar />
      <Hero />
      <Service />
      <Banner />
    </div>
  );
}

export default App;
