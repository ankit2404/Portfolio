import React from "react";
import Img4 from "../style/images/img4.PNG";
import { Icon } from "@iconify/react";
import "../style/Main.css";
function Card4() {
  return (
    <div className="card-cont">
      <div className="left-cont">
        <img src={Img4} alt="" />
      </div>
      <div className="right-cont">
        <h3>Github Finder</h3>
        <div className="paragraphs">
          <p>
            <Icon
              icon="fa-solid:hand-point-right"
              width="20"
              height="20"
              className="pointerIcon"
            />{" "}
            A web app where you can search github users by their name
          </p>
          <p>
            <Icon
              icon="fa-solid:hand-point-right"
              width="20"
              height="20"
              className="pointerIcon"
            />{" "}
            Implemted a github Api
          </p>
          <p>
            <Icon
              icon="fa-solid:hand-point-right"
              width="20"
              height="20"
              className="pointerIcon"
            />{" "}
            User can show all the public repos of any user
          </p>
        </div>
        <div className="icons-div">
          <a
            href="https://github.com/ankit2404/github-finder"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="akar-icons:github-fill" className="gitIcons" />
          </a>
          <a
            href="https://github-finder-fawn-tau.vercel.app/"
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

export default Card4;
