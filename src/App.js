import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/5.jpg";
import image6 from "./assets/6.jpg";
import backgroundVideo from "./assets/background-video.mp4";

function App() {
  const [sliderImages, setSliderImages] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState(15 * 24 * 60 * 60); // 15 days in seconds

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current) => setCurrentSlide(current), // Update current slide index
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const days = Math.floor(countdown / (24 * 60 * 60));
  const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = countdown % 60;

  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className="header">
        <h1>SCENTED ETHOS</h1>
      </header>
      <div className="container">
        {" "}
        {/* New container for layout */}
        <div className="slider-container">
          {" "}
          {/* Moved inside container */}
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slider Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="countdown-container">
          {" "}
          {/* Moved inside container */}
          <div className="countdown">
            <p className="coming-soon">Coming Soon</p>{" "}
            {/* Added "Coming Soon" text */}
            <div className="jumbotron">
              <p className="launch-text">Website launching in:</p>
              <div className="time-units">
                <div className="time-unit">
                  <span className="value">{days}</span>
                  <span className="label">Days</span>
                </div>
                <div className="time-unit">
                  <span className="value">{hours}</span>
                  <span className="label">Hours</span>
                </div>
                <div className="time-unit">
                  <span className="value">{minutes}</span>
                  <span className="label">Minutes</span>
                </div>
                <div className="time-unit">
                  <span className="value">{seconds}</span>
                  <span className="label">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
