import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { useState } from "react";

export default function MovieDetails() {
  const [video, setVideo] = useState({});
  var { id } = useParams();
  var { type } = useParams();
  console.log("id", id, type);
  // console.log("type", type);
  const handleData = async () => {
    var response = await fetch(
      `https://api.themoviedb.org/3/${
        type === "movie" ? "movie" : "tv"
      }/${id}?api_key=35cd65256ea8eaefd87a8126fe806386&language=en-US`
    );

    var res = await response.json();

    console.log("res", res);
    setVideo(res);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <article>
          {/* 
- #MOVIE DETAIL
*/}
          <section
            style={{
              background: `url(https://image.tmdb.org/t/p/original${video.poster_path})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "795px",
            }}
            className="movie-detail"
          >
            <div className="container">
              <figure className="movie-detail-banner">
                <img
                  style={{ width: "100%", height: "400px" }}
                  src={`https://image.tmdb.org/t/p/original${video.backdrop_path}`}
                  alt="Free guy movie poster"
                />
                <button className="play-btn">
                  <i class="fas fa-play"></i>
                </button>
              </figure>
              <div className="movie-detail-content">
                <p className="detail-subtitle">New Episodes</p>
                <h1 className="h1 detail-title">
                  {type === "video" ? video.title : video.name}
                </h1>
                <div className="meta-wrapper">
                  <div className="badge-wrapper">
                    <div className="badge badge-fill">PG 13</div>
                    <div className="badge badge-outline">HD</div>
                  </div>
                  <div className="ganre-wrapper">
                    {video.genres?.map((item) => (
                      <a href="#">{item.name}</a>
                    ))}
                  </div>
                  <div className="date-time">
                    <div>
                      <i
                        style={{ color: "yellow" }}
                        class="fas fa-calendar-week"
                      ></i>
                      <time dateTime={2021}>2021</time>
                    </div>
                    <div>
                      <i style={{ color: "yellow" }} class="fas fa-clock"></i>
                      <time dateTime="PT115M">115 min</time>
                    </div>
                  </div>
                </div>
                <p className="storyline">{video.overview}</p>
                <div className="details-actions">
                  <button className="share">
                    <i style={{ color: "white" }} class="fas fa-share-alt"></i>
                    <span>Share</span>
                  </button>
                  <div className="title-wrapper">
                    <p className="title">Prime Video</p>
                    <p className="text">Streaming Channels</p>
                  </div>
                  <button className="btn btn-primary">
                    <i class="fas fa-play"></i>
                    <span>Watch Now</span>
                  </button>
                </div>
                <a href="images/movie-4.png" download className="download-btn">
                  <span>Download</span>
                  <i class="fas fa-download"></i>
                </a>
              </div>
            </div>
          </section>
          {/* 
- #TV SERIES
*/}
          <section className="tv-series">
            <div className="container">
              <p className="section-subtitle">Best TV Series</p>
              <h2 className="h2 section-title">World Best TV Series</h2>
              <ul className="movies-list">
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="/images/series-1.png"
                          alt="Moon Knight movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Moon Knight</h3>
                      </a>
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        <i style={{ color: "yellow" }} class="fas fa-clock"></i>
                        <time dateTime="PT47M">47 min</time>
                      </div>
                      <div className="rating">
                        <i style={{ color: "yellow" }} class="fas fa-star"></i>
                        <data>8.6</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="/images/series-2.png"
                          alt="Halo movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Halo</h3>
                      </a>
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        <i style={{ color: "yellow" }} class="fas fa-clock"></i>
                        <time dateTime="PT59M">59 min</time>
                      </div>
                      <div className="rating">
                        <i style={{ color: "yellow" }} class="fas fa-star"></i>

                        <data>8.8</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="/images/series-3.png"
                          alt="Vikings: Valhalla movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Vikings: Valhalla</h3>
                      </a>
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        <i style={{ color: "yellow" }} class="fas fa-clock"></i>
                        <time dateTime="PT51M">51 min</time>
                      </div>
                      <div className="rating">
                        <i style={{ color: "yellow" }} class="fas fa-star"></i>

                        <data>8.3</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="/images/series-4.png"
                          alt="Money Heist movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Money Heist</h3>
                      </a>
                      <time dateTime={2017}>2017</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">4K</div>
                      <div className="duration">
                        <i style={{ color: "yellow" }} class="fas fa-clock"></i>
                        <time dateTime="PT70M">70 min</time>
                      </div>
                      <div className="rating">
                        <i style={{ color: "yellow" }} class="fas fa-star"></i>

                        <data>8.3</data>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
      {/* 
- #FOOTER
*/}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand-wrapper">
              <a href="./index.html" className="logo">
                <img src="images/logo.svg" alt="Filmlane logo" />
              </a>
              <ul className="footer-list">
                <li>
                  <a href="./index.html" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Movie
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    TV Show
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Web Series
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="divider" />
            <div className="quicklink-wrapper">
              <ul className="quicklink-list">
                <li>
                  <a href="#" className="quicklink-link">
                    Faq
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    Privacy
                  </a>
                </li>
              </ul>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              © 2022 <a href="#">(BORNXBOBBY)</a>. All Rights Reserved
            </p>
            <img
              src="images/footer-bottom-img.png"
              alt="Online banking companies logo"
              className="footer-bottom-img"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
