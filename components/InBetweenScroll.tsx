import React from "react"
import "./Carousel.css"


const images = [
  "/images/sl1.jpeg",
  "/images/sl2.jpeg",
  "/images/sl3.jpeg",
  "/images/sl4.jpeg",
  "/images/sl5.jpeg"
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