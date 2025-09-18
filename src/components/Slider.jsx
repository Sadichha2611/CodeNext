import React from "react";

function Slider() {
  const slides = [
    {
      src: "/images/22.jpg",
      caption: "Innovative Solutions for Your Business",
    },
    { src: "/images/mm.jpg", caption: "Creative Digital Experiences" },
  ];

  return (
    <div id="carouselExample" className="carousel slide carousel-fade">
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={slide.src}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fw-bold">{slide.caption}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          style={{ filter: "invert(1)" }}
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          style={{ filter: "invert(1)" }}
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
