import React from "react";
import Img3 from "../style/images/Img3.PNG";
import { Icon } from "@iconify/react";
import "../style/Main.css";
function Card3() {
  return (
    <div className="card-cont">
      <div className="left-cont">
        <img src={Img3} alt="" />
      </div>
      <div className="right-cont">
        <h3>House Marketplace</h3>
        <div className="paragraphs">
          <p>
            <Icon
              icon="fa-solid:hand-point-right"
              width="20"
              height="20"
              className="pointerIcon"
            />{" "}
            A web app with full google authentication
          </p>
          <p>
            <Icon
              icon="fa-solid:hand-point-right"
              width="20"
              height="20"
              className="pointerIcon"
            />{" "}
            User can send mail directly to the house owner using web app
          </p>
          <p>
            <Icon
              icon="fa-solid:hand-point-right"
              width="20"
              height="20"
              className="pointerIcon"
            />{" "}
            User can add their house for rent or sale
          </p>
        </div>
        <div className="icons-div">
          <a
            href="https://github.com/ankit2404/HouseMarketPlace"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="akar-icons:github-fill" className="gitIcons" />
          </a>
          <a
            href="https://friendly-kepler-54c675.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="ci:external-link" className="gitIcons" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card3;
