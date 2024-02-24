"use client"

import { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';

const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming you have 3 slides
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Assuming you have 3 slides
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Auto slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
<>
  {/* ======= Hero Section ======= */}
  <section id="hero">
    <div className="hero-container">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval={5000}
      >
        <ol className="carousel-indicators" id="hero-carousel-indicators" />
        <div className="carousel-inner" role="listbox">
          {/* Slide 1 */}
          <div
            className="carousel-item active"
            style={{ backgroundImage: 'url("assets/img/hero/people.jpeg")' }}
          >
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animate__animated animate__fadeInDown">
                  Welcome to <span>Ponji</span>
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  Where Imagination Takes Flight. Experience Ponji Studio's
                  enchanting animations. Explore limitless creativity and embark
                  on a magical journey into the world of animation.
                </p>
                <a
                  href="#about"
                  className="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div
            className="carousel-item"
            style={{ backgroundImage: 'url("assets/img/hero/story.jpeg")' }}
          >
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animate__animated animate__fadeInDown">
                  Our Creative Vision
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  Igniting Imagination. Crafting captivating worlds, Ponji
                  Studio knows no creative bounds. Join us on this limitless
                  journey of animation excellence.
                </p>
                <a
                  href="#about"
                  className="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div
            className="carousel-item"
            style={{ backgroundImage: 'url("assets/img/hero/family.jpeg")' }}
          >
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animate__animated animate__fadeInDown">
                  Unleash Your Story
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  our Ideas, Our Magic. Transform your concepts into animated
                  masterpieces. Let's collaborate and bring your story to life
                  together!
                </p>
                <a
                  href="#about"
                  className="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          />
        </a>
        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </section>
  {/* End Hero */}
</>

  );
};

export default HeroCarousel;
