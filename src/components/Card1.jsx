import React from "react";
import Img1 from "../style/images/img1.PNG";
import { Icon } from "@iconify/react";
import "../style/Main.css";
function Card1() {
  return (
    <div className="card-cont">
      <div className="left-cont">
        <img src={Img1} alt="" />
      </div>
      <div className="right-cont">
        <h1>Natours</h1>
        <div className="paragraphs">
          <p>
            <Icon
              icon="fa-solid:hand-point-right"
              width="20"
              height="20"
              className="pointerIcon"
            />{" "}
            A web app with full authentication functionality using jwt.
          </p>
          <p>
            <Icon
              icon="fa-solid:hand-point-right"
              width="20"
              height="20"
              className="pointerIcon"
            />{" "}
            Using stripe using webhooks to avoid adding tour without payment
          </p>
          <p>
            <Icon
              icon="fa-solid:hand-point-right"
              width="20"
              height="20"
              className="pointerIcon"
            />{" "}
            User can update username, photo, email, and password
          </p>
          <p>
            <Icon
              icon="fa-solid:hand-point-right"
              width="20"
              height="20"
              className="pointerIcon"
            />{" "}
            User can see all your bought tours at the same place
          </p>
        </div>
        <div className="icons-div">
          <a
            href="https://github.com/ankit2404/natours"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="akar-icons:github-fill" className="gitIcons" />
          </a>
          <a
            href="https://natours-ankit.herokuapp.com/"
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

export default Card1;
