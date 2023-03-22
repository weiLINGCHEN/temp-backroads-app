//  select down the same elements holde cmd + D

import Navbar from "./components/Navbar";
import Tours from "./components/Tours";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";

// select all the same elements with one command shift + cmd + L
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
