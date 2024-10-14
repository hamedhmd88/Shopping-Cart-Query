import logo1 from "../assets/logo/logo1.png";
import logo2 from "../assets/logo/logo2.png";
import logo3 from "../assets/logo/logo3.png";
import logo4 from "../assets/logo/logo4.png";
import logo5 from "../assets/logo/logo5.png";
import logo6 from "../assets/logo/logo6.png";
import logo7 from "../assets/logo/logo7.png";
import logo8 from "../assets/logo/logo8.png";
import logo9 from "../assets/logo/logo9.png";
import logo10 from "../assets/logo/logo10.png";
import logo11 from "../assets/logo/logo11.png";
import logo12 from "../assets/logo/logo12.png";
import logo13 from "../assets/logo/logo13.png";
import logo14 from "../assets/logo/logo14.png";
import logo15 from "../assets/logo/logo15.png";
import React from "react";

function ImageSlider() {
  const images = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo12,
    logo13,
    logo14,
    logo15,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
  ];

  return <>
    <section className="w-full  py-6 overflow-hidden">
        <div className="flex items-center space-x-6 animate-scroll-horizontal">
          {/* Repeated logos for infinite scroll effect */}
          {[...images].map((image, i) => (
            <React.Fragment key={i}>
              <img
                src={image}
                alt="Logo 1"
                className="h-16 w-16 object-contain hover:scale-110 transition-transform"
              />
              
            </React.Fragment>
          ))}
        </div>
      </section>
  </>;
}

export default ImageSlider;
