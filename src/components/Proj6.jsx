import React from "react";
import "../style/Proj.css";
import Img1 from "../style/images/Proj6.PNG";
import { Icon } from "@iconify/react";
import classes from "../style/project.module.css";

const Proj6 = () => {
  return (
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
          <h3 className={`${classes["slider_header"]}`}>Quickparamarsh</h3>

          <p className={`${classes["slider_para"]}`}>
            At Paramarsh Software Development Pvt Ltd, we are dedicated to
            revolutionizing the healthcare industry through innovative software
            solutions. With a focus on online consultation for doctors, we
            strive to bridge the gap between medical professionals and patients,
            making healthcare accessible and convenient for all.
          </p>
          <div>
            <a href="https://www.quickparamarsh.com/" target="blank">
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
              href="https://github.com/ankit2404/Ecommerce"
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
};

export default Proj6;
