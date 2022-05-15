import React from "react";

function Projects() {
  return (
    <section class="portfolio section" id="projects">
      <h2 class="section_title">Projects</h2>
      <span class="section_subtitle">Most recent work</span>

      <div class="portfolio_container container swiper-container swiper mySwiper">
        {/* <div class="swiper-wrapper">
          <div class="portfolio_content grid swiper-slide">
            <img
              src="./assets/img/portfolio-preview.gif"
              alt=""
              class="portfolio_img"
            />

            <div class="portfolio_data">
              <h3 class="portfolio_title">Personal Portfolio Website</h3>
              <p class="portfolio_description">
                My Personal Portfolio Website made using only HTML, CSS and JS
                with a clean and minimal UI.
              </p>
              <a
                href="/"
                class="button button-flex button-small portfolio_button"
                target="_blank"
                rel="noreferrer"
              >
                Check out
                <i class="uil uil-arrow-right button_icon"></i>
              </a>
            </div>
          </div>

          <div class="portfolio_content grid swiper-slide">
            <img
              src="https://media2.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif?cid=ecf05e47zacfktw3feiaov7xnr2l6fkx2xtqqz2g8h83st8h&rid=giphy.gif&ct=g"
              alt=""
              class="portfolio_img"
            />

            <div class="portfolio_data">
              <h3 class="portfolio_title">All projects in GitHub List</h3>
              <p class="portfolio_description"></p>
              <a
                href="https://subham-maity.github.io/Projectlist/"
                class="button button-flex button-small portfolio_button"
                target="_blank"
                rel="noreferrer"
              >
                Check out
                <i class="uil uil-arrow-right button_icon"></i>
              </a>
            </div>
          </div>

          <div class="swiper-button-next">
            <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div class="swiper-button-prev">
            <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>

          <div class="swiper-pagination"></div>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
