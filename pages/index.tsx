import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';


const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />  
    </>
  );
};

export default Home;
