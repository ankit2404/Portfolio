import React from "react";
// import Slider from "./Slider";
import Proj1 from "./Proj1";
import Proj2 from "./Proj2";
import Proj3 from "./Proj3";
import Proj4 from "./Proj4";

function Projects() {
  return (
    <section className="portfolio section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle" style={{ paddingBottom: "25px" }}>
        Most recent work
      </span>
      <Proj4 />
      <Proj1 />
      <Proj2 />
      <Proj3 />
    </section>
  );
}

export default Projects;
