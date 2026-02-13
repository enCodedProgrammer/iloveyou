import React from "react"
import "./Carousel.css"
import sl1 from "../images/sl1.jpeg"
import sl2 from "../images/sl2.jpeg"
import sl3 from "../images/sl3.jpeg"
import sl4 from "../images/sl4.jpeg"
import sl5 from "../images/sl5.jpeg"



const images = [
  sl1,
  sl2,
  sl3,
  sl4,
  sl5
];


const InBetweenScroll = () => {
  return (
    <section className="gallery-carousel">
      <h2>Our Moments</h2>
      <p className="caption">These are not just pictures. They are pieces of us.</p>
      <div className="carousel-wrapper">
        {images.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`Moment ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InBetweenScroll;