import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";


function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero"
        heroimg="https://www.bizimmeramkoyu.com/upload/dismekan/9.jpg"
        title="Huzurun Yeni Adresi Bizim Meram Köyü"
      
      
       
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
