/** @format */

import React from "react";
import CV from "../../assests/ResumeEn.pdf";
import CVFR from "../../assests/My-ResumeFr.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV English
      </a>
      <a href={CVFR} download className="btn">
        Download CV French
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
