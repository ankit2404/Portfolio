import React from "react";
import "../style/Proj.css";
import Img1 from "../style/images/img1.PNG";
import { Icon } from "@iconify/react";
function Proj1() {
  return (
    <div className="proj-cont" id="project1">
      <div className="card-cont">
        <div className="left">
          <p className="number">01</p>
          <div className="media_img">
            <img src={Img1} alt="" />
          </div>
          <h2
            style={{
              paddingLeft: "10px",
              top: "-30%",
              position: "relative",
              textDecoration: "underline",
              color: "#e4dcdc"
            }}
          >
            Natours
          </h2>
          <p className="project-para">
            A web app with full authentication functionality using jwt. Used
            stripe api for payment added webhooks to avoid adding tour without
            payment. User can update username, photo, email, and password. User
            can see all your bought tours at the same place
          </p>
          <div className="icons_div">
            <div className="proj_icons">
              <a
                href="https://github.com/ankit2404/natours"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  icon="akar-icons:github-fill"
                  height="30"
                  width="30"
                  style={{ color: "#e4dcdc" }}
                />
              </a>
            </div>
            <div
              className="proj_icons"
              style={{ left: "20px", position: "relative" }}
            >
              <a
                href="https://natours-ankit.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  icon="ci:external-link"
                  height="30"
                  width="30"
                  style={{ color: "#e4dcdc" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={Img1} alt="" />
          <a href="#project2">
            <Icon
              icon="bi:arrow-down-square"
              className="proj-icon"
              height="30"
              width="30"
              style={{color : 'var(--title-color)'}}
            />
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Proj1;
