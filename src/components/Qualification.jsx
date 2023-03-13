import React from "react";

function Qualification() {
  return (
    <section className="qualification section" id="experience">
      <h2 className="section_title">Work Experience</h2>
      <span className="section_subtitle">My Work Experience</span>

      <div className="qualification_container container">
        <div className="qualification_sections">
          <div
            className="qualification_content qualification_active"
            data-content
            id="education"
          >
            {/* first one */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Hospito</h3>
                <span className="qualification_subtitle">
                  Frontend Developer
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jan 2023 - Mar 2023
                </div>
              </div>
              <div>
                <span className="qualification_circle"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            {/* second one */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_circle"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Frendy</h3>
                <span className="qualification_subtitle">
                  Full Stack Developer
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  May 2022 - July 2022
                </div>
              </div>
            </div>

            {/* third one */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Cerebry</h3>
                <span className="qualification_subtitle">
                  AI Software Developer
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Mar 2022 - June 2022
                </div>
              </div>
              <div>
                <span className="qualification_circle"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_circle"></span>
                {/* <span className="qualification_line"></span> */}
              </div>
              <div>
                <h3 className="qualification_title">CEOITBOX(TNS)</h3>
                <span className="qualification_subtitle">
                  Javascript Developer
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  June 2021 - Dec 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
