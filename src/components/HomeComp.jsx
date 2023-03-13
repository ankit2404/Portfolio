import { Icon } from "@iconify/react";
import myImage from "../style/images/pic pass.jpg";
import Resume from "../style/images/Resume.pdf";
function HomeComp() {
  return (
    <div>
      <main className="main" id="about">
        <section className="home section" id="home">
          <div className="home_container container grid">
            <div className="home_content grid">
              <div className="home_social">
                <a
                  href="https://www.linkedin.com/in/ankit-mittal-2ab9761b2/"
                  className="home_social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="uil uil-linkedin-alt"></i>
                </a>

                <a
                  href="https://github.com/ankit2404"
                  className="home_social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="uil uil-github-alt"></i>
                </a>

                <a
                  href="https://leetcode.com/volcano24/"
                  className="home_social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="cib:leetcode" inline={true} />
                </a>
                <a
                  href="https://www.codechef.com/users/ankit24042001"
                  className="home_social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="simple-icons:codechef" inline={true} />
                </a>
                <a
                  href="mailto:mittalankit2404@gmail.com"
                  className="home_social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="ci:mail" inline={true} />
                </a>
              </div>

              <div className="home_img">
                <img
                  src={myImage}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    height: "270px",
                    width: "270px",
                    objectFit: "fill",
                  }}
                />
              </div>

              <div className="home_data">
                <h1 className="home_title">Hi, Ankit here.</h1>
                <h3 className="home_subtitle">
                  <span className="type"> Full Stack</span> Developer
                </h3>

                <p className="home_description">
                  I am a full stack developer with experience in building web
                  applications using technologies such as React.js, Node.js, and
                  MongoDB. Proficient in Data Structures & Algorithms, Java, and
                  JavaScript.
                </p>
                <a
                  download=""
                  href={Resume}
                  className="button button--flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                  <i className="uil uil-file-download-alt button_icon"></i>
                </a>
              </div>
            </div>

            <div className="home_scroll">
              <a href="#skills" className="home_scroll-button button--flex">
                <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                <span className="home_scroll-name">Scroll Down</span>
                <i className="uil uil-arrow-down home_scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeComp;
