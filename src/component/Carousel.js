import React from 'react'

export default function Carousel() {
  return (
   <>
   <section class="cta">
        <div class="container">

          <div class="title-wrapper">
            <h2 class="cta-title">Trial start first 30 days.</h2>

            <p class="cta-text">
              Enter your email to create or restart your membership.
            </p>
          </div>

          <form action="" class="cta-form">
            <input type="email" name="email" required placeholder="Enter your email" class="email-field"/>

            <button type="submit" class="cta-form-btn">Get started</button>
          </form>

        </div>
      </section>

      <footer class="footer">

    <div class="footer-top">
      <div class="container">

        <div class="footer-brand-wrapper">

          <a href="./index.html" class="logo">
            <img src="../images/logo.svg" alt="Filmlane logo"/>
          </a>

          <ul class="footer-list">

            <li>
              <a href="./index.html" class="footer-link">Home</a>
            </li>

            <li>
              <a href="#" class="footer-link">Movie</a>
            </li>

            <li>
              <a href="#" class="footer-link">TV Show</a>
            </li>

            <li>
              <a href="#" class="footer-link">Web Series</a>
            </li>

            <li>
              <a href="#" class="footer-link">Pricing</a>
            </li>

          </ul>

        </div>

        <div class="divider"></div>

        <div class="quicklink-wrapper">

          <ul class="quicklink-list">

            <li>
              <a href="#" class="quicklink-link">Faq</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Help center</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Terms of use</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Privacy</a>
            </li>

          </ul>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
              <i class="fa fa-facebook"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
              <i class="fa fa-twitter"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
              <i class="fa fa-pinterest"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
              <i class="fa fa-linkedin"></i>
              </a>
            </li>

          </ul>

        </div>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">

        <p class="copyright">
          &copy; 2022 <a href="#">(BORNXBOBBY)</a>. All Rights Reserved
        </p>

        <img src="../images/footer-bottom-img.png" alt="Online banking companies logo" class="footer-bottom-img"/>

      </div>
    </div>

  </footer>


  <a href="#top" class="go-top" data-go-top>
  <i style={{color:'yellow'}} class="fas fa-chevron-up"></i>
  </a>
   </>
  )
}
