import logo from './logo.svg';
import './App.css';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Card from './component/Card';
import Slider from './component/Slider';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';
import Carousel from './component/Carousel';
import { useState } from 'react';
import Home from './component/Home';
import MovieDetails from './component/MovieDetails';
import Search from './component/Search';
import Tvdetails from './component/Tvdetails';  
import Log from './component/Log';
import ToDo from './component/Todo';


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:type/:id" element={ <MovieDetails/> }/>
      <Route path="/search" element={ <Search/> }/>
      {/* <Route path="/tv-details:id" element={ <Tvdetails/>}/> */}
      <Route path="/log" element={ <Log/> }/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
