import React, {useEffect, useState}  from "react";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("header")
  const [ toggle, setToggle ] = useState( false)

  const handleHeader = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setActive("header active");
      }
      else {
        setActive("header")
      }
    });
  };

  useEffect(() => {
    handleHeader();
  },[])
  return (
    <>
      <header class={active} data-header>
        <div class="container">
          <div class="overlay" data-overlay></div>

          <a href="/" class="logo">
            <img src="/images/logo.svg" alt="Filmlane logo"/>
          </a>

          <div class="header-actions">

            <a href="/search" >  <button class="search-btn">
           
           <i class="fas fa-search"></i>
           </button></a>
           

            <div class="lang-wrapper">
              <label for="language">
              <i class="fas fa-globe"></i>
              </label>

              <select name="language" id="language">
                <option value="en">EN</option>
                <option value="au">AU</option>
                <option value="ar">AR</option>
                <option value="tu">TU</option>
              </select>
            </div>

            <a href="/log"> <button class="btn btn-primary">Log In</button></a>
          </div>

          <button class="menu-open-btn" data-menu-open-btn>
          <i  onClick={() => setToggle(!toggle)} class="fas fa-bars"></i>
          </button>

          <nav class={toggle ? 'navbar active' : 'navbar '  } data-navbar>
            <div class="navbar-top">
              <a href="./index.html" class="logo">
                <img src="images/logo.svg" alt="Filmlane logo" />
              </a>
    
              <button class="menu-close-btn" data-menu-close-btn>
              <i onClick={() => setToggle(!toggle)}  class="far fa-window-close"></i>
              </button>
              
            </div>

            <ul class="navbar-list">
              <li>
                <a href="./index.html" class="navbar-link">
                  Home
                </a>
              </li>

              <li>
                <a href="#" class="navbar-link">
                  Movie
                </a>
              </li>

              <li>
                <a href="#" class="navbar-link">
                  Tv Show
                </a>
              </li>

              <li>
                <a href="#" class="navbar-link">
                  Web Series
                </a>
              </li>

              <li>
                <a href="#" class="navbar-link">
                  Pricing
                </a>
              </li>
              <li>
                <a  href="/search" class="navbar-link search_page">
                  Search
                </a>
              </li>
            </ul>

            <ul class="navbar-social-list">
              <li>
                <a href="#" class="navbar-social-link">
                <i class="fab fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="#" class="navbar-social-link">
                <i class="fab fa-facebook-square"></i>
                </a>
              </li>

              <li>
                <a href="#" class="navbar-social-link">
                <i class="fa fa-pinterest"></i>
                </a>
              </li>

              <li>
                <a href="#" class="navbar-social-link">
                <i class="fab fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="#" class="navbar-social-link">
                <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}