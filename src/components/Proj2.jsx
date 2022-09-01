import React from "react";
import "../style/Proj.css";
import Img1 from "../style/images/Img3.PNG";
import { Icon } from "@iconify/react";
import classes from "../style/project.module.css";
function Proj1() {
  return (
    // <div className="proj-cont" id="project3">
    //   <div className="card-cont">
    //     <div className="left">
    //       <p className="number">03</p>
    //       <div className="media_img">
    //         <img src={Img1} alt="" />
    //       </div>
    //       <h2
    //         style={{
    //           paddingLeft: "10px",
    //           top: "-30%",
    //           position: "relative",
    //           textDecoration: "underline",
    //           color: "#e4dcdc",
    //         }}
    //       >
    //         House Marketplace
    //       </h2>
    //       <p className="project-para">
    //         A web app with full google authentication. User can send mail
    //         directly to the house owner using web app. User can add their house
    //         for rent or sale
    //       </p>
    //       <div className="icons_div">
    //         <div className="proj_icons">
    //           <a
    //             href="https://github.com/ankit2404/HouseMarketPlace"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <Icon
    //               icon="akar-icons:github-fill"
    //               height="25"
    //               width="25"
    //               style={{ color: "#e4dcdc" }}
    //             />
    //           </a>
    //         </div>
    //         <div
    //           className="proj_icons"
    //           style={{ left: "20px", position: "relative" }}
    //         >
    //           <a
    //             href="https://friendly-kepler-54c675.netlify.app/"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <Icon
    //               icon="ci:external-link"
    //               height="25"
    //               width="25"
    //               style={{ color: "#e4dcdc" }}
    //             />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="right">
    //       <img src={Img1} alt="" />
    //       <a href="#project2">
    //         <Icon
    //           icon="bi:arrow-up-square"
    //           className="proj-icon"
    //           style={{ bottom: "80px", color: "var(--title-color)" }}
    //           height="30"
    //           width="30"
    //         />
    //       </a>
    //       <a href="#project4">
    //         <Icon
    //           icon="bi:arrow-down-square"
    //           className="proj-icon"
    //           style={{ color: "var(--title-color)" }}
    //           height="30"
    //           width="30"
    //         />
    //       </a>
    //     </div>
    //   </div>
    //   <div></div>
    // </div>
    <div className={`${classes["start_div"]}`}>
      <div className={`${classes["content_div"]}`}>
        <img
          src={Img1}
          alt="Proj1"
          className={`${classes["swiper_image_class"]}`}
        />

        <div
          className={`${classes["content_des"]}`}
          style={{ marginLeft: "5%" }}
        >
          <h3 className={`${classes["slider_header"]}`}>House Marketplace</h3>

          <p className={`${classes["slider_para"]}`}>
            A web app with full google authentication. User can send mail
            directly to the house owner using web app. User can add their house
            for rent or sale
          </p>
          <div>
            <a
              href="https://friendly-kepler-54c675.netlify.app/"
              target="blank"
            >
              <button
                className={`${classes["btn"]} ${classes["btn-primary"]}`}
                type="button"
              >
                <Icon
                  icon="ci:external-link"
                  height="30"
                  width="30"
                  style={{ color: "#e4dcdc" }}
                />
              </button>
            </a>
            <a
              href="https://github.com/ankit2404/HouseMarketPlace"
              target="blank"
              className={`${classes["second_link"]}`}
            >
              <button
                className={`${classes["btn"]} ${classes["btn-primary"]}`}
                type="button"
              >
                <Icon
                  icon="akar-icons:github-fill"
                  height="25"
                  width="25"
                  style={{ color: "#e4dcdc" }}
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proj1;
