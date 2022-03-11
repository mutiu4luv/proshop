import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="our-team">
      <div className="teams">
        <div className="who"> WHO ARE WE </div>
        <div className="team"> Our Team </div>
        <div className="para">
          {" "}
          Our long history of unparalleled commitment to partnering with the
          most extensive carriers and our ability to offer the most versatile
          services
        </div>
      </div>
      <div className="picture">
        <div className="bobby">
          <img className="img-bobby" src="images/mutiu.jpg " alt="mie" />
          <div className="bobby-para">
            Expert in automotive delivery of any kind of products and
            accessories to warehouses and recipients.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
