import React from "react";
import "../style/Card.css";
import Img1 from "../style/images/img1.PNG";
function Card2() {
  return (
    <div id="main">
      <div id="box-left">
        <div id="main-heading">Project Name</div>
        <div id="description-area">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.{" "}
        </div>
        <div id="icon-area">
          <div class="icon">
            <span class="iconify" data-icon="ant-design:github-filled"></span>
          </div>
          <div class="icon">
            <span class="iconify" data-icon="ant-design:github-filled"></span>
          </div>
          <div class="icon">
            <span class="iconify" data-icon="ant-design:github-filled"></span>
          </div>
        </div>
      </div>
      <div id="box-right">
        <div id="main-img-container">
          <div id="image-top">
            <img src={Img1} alt="33" />
          </div>
          <div id="image-left">
            <img src={Img1} alt="33" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
