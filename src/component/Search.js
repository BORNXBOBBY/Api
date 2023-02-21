import React, { useEffect,useState } from 'react'
import { Link } from "react-router-dom"
import "./Search.css";



export default function Search() {
const [movieData, setMovieData] = useState([]);
const api_url = "https://api.themoviedb.org/3";
const api_key = "35cd65256ea8eaefd87a8126fe806386";
const [category, setCategory] = useState("/movie/upcoming");

 
 const handleData = async () => {
  var response = await fetch(
    `${api_url}${category}?api_key=${api_key}&language=en-US&page=1`
  );
 
  
  var res = await response.json();

  console.log("res", res.results);
  
  setMovieData(res.results);
 };

 useEffect(() => {
  handleData();
 },[category]);
   
  return (
    <>
    

    <div class="search-box Nitesh">
  <input class="search-txt" type="text" name="" placeholder="Type to search"/>
  <a class="search-btn" href="#"><i class="fas fa-search"></i></a>
</div>
<section class="upcoming">
        <div class="container">

          <div class="flex-wrapper">

            <div class="title-wrapper">
              <p class="section-subtitle">Online Streaming</p>

              <h2 class="h2 section-title">Upcoming Movies</h2>
            </div>

            <ul class="filter-list">
              

              <li>
                <button onClick={() => setCategory("/movie/upcoming")} class="filter-btn"
                 style={category.includes("movie") ? { borderColor: "hsl(57deg 97% 45%)"} : {}}>Movies</button>
              </li>

              <li>
                <button onClick={() => setCategory("/tv/popular")} class="filter-btn">TV Shows</button>
              </li>

              <li>
                <button onClick={() => setCategory("/tv/top_rated")} class="filter-btn">Anime</button>
              </li>
            </ul>

          </div>

          <ul class="movies-list  has-scrollbar">
          {movieData.map((item) => (
            <li>
            <div class="movie-card">

              <Link to={category.includes("Movie") ?`details/movie/${item.id}` : `details/tv/${item.id}`}>
                <figure class="card-banner">
                  <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="The Northman movie poster"/>
                </figure>
              </Link>

              <div class="title-wrapper">
                <a href="./movie-details.html">
                  <h3 class="card-title">{category.includes("movie")? item.title : item.name}</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div class="card-meta">
                <div class="badge badge-outline">HD</div>

                <div class="duration">
                <i style={{color:'yellow'}} class="fas fa-clock"></i>

                  <time datetime="PT137M">137 min</time>
                </div>

                <div class="rating">
                <i  style={{color:'yellow'}} class="fas fa-star"></i>

                  <data>8.5</data>
                </div>
              </div>

            </div>
          </li>
          ))}
     
          </ul>

        </div>
      </section>
    

    </>
  )
}
