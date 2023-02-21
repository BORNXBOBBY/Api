import Navbar from './Navbar';
import Banner from './Banner';
import Card from './Card';
import Slider from './Slider';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Carousel from './Carousel';
import { useState } from 'react';
import Search from './Search';
import Log from './Log';


function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar/>
      <Banner/>
      <Card/>
      <Slider/>
      <Testimonial/>
      <Footer/>
      <Carousel/>
    {/* <Search/> */}
    </>
  );
}

export default Home;
