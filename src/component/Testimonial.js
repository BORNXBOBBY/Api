import React, { useEffect,useState } from 'react'
export default function Card() {
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
   <section class="top-rated">
        <div class="container">

          <p class="section-subtitle">Online Streaming</p>

          <h2 class="h2 section-title">Top Rated Movies</h2>

          <ul class="filter-list">

            <li>
              <button onClick={() => setCategory("/movie/upcoming")}  class="filter-btn">Movies</button>
            </li>

            <li>
              <button onClick={() => setCategory("/tv/popular")}  class="filter-btn">TV Shows</button>
            </li>

            <li>
              <button onClick={() => setCategory("/tv/top_rated")} class="filter-btn">Documentary</button>
            </li>

            <li>
              <button class="filter-btn">Sports</button>
            </li>

          </ul>

          <ul class="movies-list">
          {movieData.map((item) => (
            <li>
              <div class="movie-card">

                <a href="./movie-details.html">
                  <figure class="card-banner">
                    <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}  alt="Sonic the Hedgehog 2 movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 class="card-title">{category.includes("movie")? item.title : item.name}</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">2K</div>

                  <div class="duration">
                  <i  style={{color:'yellow'}} class="fas fa-clock"></i>

                    <time datetime="PT122M">122 min</time>
                  </div>

                  <div class="rating">
                  <i  style={{color:'yellow'}} class="fas fa-star"></i>

                    <data>7.8</data>
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
