import Image from "next/image";
import styles from "./page.module.css";
import HeroCarousel from "@/components/Hero";

export default function Home() {
  return (
    <main>
 {/* ======= Top Bar ======= */}
  <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope-fill" />
        <a href="mailto:contact@example.com">ponjieducare@gmail.com</a>
        {/* <i class="bi bi-phone-fill phone-icon"></i> +1 5589 55488 55 */}
      </div>
      <div className="social-links d-none d-md-block">
        <a
          href="https://www.facebook.com/profile.php?id=100027452545927"
          target="_blank"
          className="facebook"
        >
          <i className="bi bi-facebook" />
        </a>
        <a
          href="https://www.youtube.com/@PonjiEducare"
          target="_blank"
          className="youtube"
        >
          <i className="bi bi-youtube" />
        </a>
      </div>
    </div>
  </section>

  <>
  {/* ======= Header ======= */}
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center">
      <div className="logo me-auto">
        {/* <h1><a href="index.html">Ponji</a></h1> */}
        {/* Uncomment below if you prefer to use an image logo */}
        <a href="index.html">
          <img
            src="assets/img/logo.png"
            alt="Ponji logo"
            className="img-fluid"
          />
        </a>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
</>

<HeroCarousel/>


<>
  <main id="main">
    {/* ======= Our Portfolio Section ======= */}
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="section-title">
          <h2>Our Portfolio</h2>
          <p>
            Explore our diverse portfolio of captivating animations, showcasing
            our commitment to storytelling and visual excellence. Discover the
            magic of Ponji.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">Animations</li>
              <li data-filter=".filter-card">Graphics</li>
              <li data-filter=".filter-web">illustrations</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/hero/china festival.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Animation</h4>
                <p>Dragon Boat Festival explainer</p>
                <div className="portfolio-links">
                  <a
                    href="https://www.youtube.com/watch?v=VyyQGtkuTdk"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    data-vbtype="video"
                    data-autoplay="true"
                  >
                    <i className="bi bi-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/hero/ladies.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Illustration</h4>
                <p>African Women</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/hero/ladies.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="African Women"
                  >
                    <i className="bi bi-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/hero/lady.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Animation</h4>
                <p>Off the beaten path</p>
                <div className="portfolio-links">
                  <a
                    href="https://www.youtube.com/watch?v=ogYV7Id2NfM"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Off the beaten path"
                  >
                    <i className="bi bi-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/hero/nile.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Log</h4>
                <p>Nile Treatz</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/hero/nile.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Nile Treatz"
                  >
                    <i className="bi bi-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/hero/children.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Illustration</h4>
                <p>ABC story</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/hero/children.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="ABC story"
                  >
                    <i className="bi bi-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/hero/family_show.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Animation</h4>
                <p>Eco Stove Explainer</p>
                <div className="portfolio-links">
                  <a
                    href="https://www.youtube.com/watch?v=4sstBxXYc8o"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Eco Stove Explainer"
                  >
                    <i className="bi bi-play" />
                  </a>
                  {/* <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/hero/twende.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Logo</h4>
                <p>Twende</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/hero/twende.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Twende"
                  >
                    <i className="bi bi-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/hero/textured.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Logo</h4>
                <p>Textured</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/hero/textured.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Textured"
                  >
                    <i className="bi bi-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/hero/boy_monkey.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Illustration</h4>
                <p>African Animal Safari</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/hero/boy_monkey.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="African Animal Safari"
                  >
                    <i className="bi bi-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Our Portfolio Section */}
    {/* ======= About Us Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="col-lg-6 video-box">
            <img
              src="assets/img/hero/hi_boy.jpeg"
              className="img-fluid"
              alt="boy waving hi"
            />
            {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a> */}
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
            <div className="section-title">
              <h2>About Us</h2>
              <p>
                At Ponji, we are more than just a studio; we are storytellers,
                visionaries, and creators of immersive multimedia experiences.
                With a passion for animation, graphic design, concept design,
                illustration, and motion graphics, we breathe life into ideas
                and craft visual narratives that captivate and inspire.
              </p>
            </div>
            <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
              <div className="icon">
                <i className="bx bx-fingerprint" />
              </div>
              <h4 className="title">
                <a href="">Our Creative Vision</a>
              </h4>
              <p className="description">
                Our journey began with a simple belief: that the power of
                storytelling can change the world. With each project, we strive
                to push creative boundaries, using cutting-edge technology and
                artistic innovation to bring ideas to life.
              </p>
            </div>
            <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
              <div className="icon">
                <i className="bx bx-gift" />
              </div>
              <h4 className="title">
                <a href="">Crafting Visual Magic</a>
              </h4>
              <p className="description">
                Whether it's the whimsical characters in our animations, the
                striking visuals in our graphic designs, or the conceptual
                brilliance in our projects, we take pride in our ability to turn
                imagination into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End About Us Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon">
              <i className="bi bi-chat-left-dots" />
            </div>
            <h4 className="title">
              <a href="">2D Animation</a>
            </h4>
            <p className="description">
              Bring stories and ideas to life with captivating 2D animations
              that enchant and entertain.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="icon">
              <i className="bi bi-bounding-box" />
            </div>
            <h4 className="title">
              <a href="">Concept Design</a>
            </h4>
            <p className="description">
              Transform concepts into visual realities through innovative and
              imaginative design solutions.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon">
              <i className="bi bi-globe" />
            </div>
            <h4 className="title">
              <a href="">Illustration</a>
            </h4>
            <p className="description">
              Capture imagination and emotion through handcrafted illustrations
              that tell unique visual stories.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="icon">
              <i className="bi bi-broadcast" />
            </div>
            <h4 className="title">
              <a href="">Motion Graphics</a>
            </h4>
            <p className="description">
              Elevate your brand and message with dynamic and engaging motion
              graphics that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}
    {/* ======= Contact Us Section ======= */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex" data-aos="fade-up">
            <div className="info-box">
              <i className="bx bx-map" />
              <h3>Our Address</h3>
              <p>P.O.BOX 4685 Kampala, Uganda</p>
            </div>
          </div>
          <div
            className="col-lg-6 d-flex"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="info-box">
              <i className="bx bx-envelope" />
              <h3>Email Us</h3>
              <p>ponjieducare@gmail.com</p>
            </div>
          </div>
          {/* <div class="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="200">
      <div class="info-box ">
        <i class="bx bx-phone-call"></i>
        <h3>Call Us</h3>
        <p>+1 5589 55488 55<br>+1 6678 254445 41</p>
      </div>
    </div> */}
          {/* <div class="col-lg-12" data-aos="fade-up" data-aos-delay="300">
      <form action="forms/contact.php" method="post" role="form" class="php-email-form">
        <div class="row">
          <div class="col-lg-6 form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
          </div>
          <div class="col-lg-6 form-group">
            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
          </div>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
        </div>
        <div class="form-group">
          <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <div class="my-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div class="text-center"><button type="submit">Send Message</button></div>
      </form>
    </div> */}
        </div>
      </div>
    </section>
    {/* End Contact Us Section */}
  </main>
  {/* End #main */}
</>






<>
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-info">
            <h3>Ponji</h3>
            <p>
              P.O.BOX 4685 Kampala, Uganda
              <br />
              <strong>Email:</strong> poinjieducare@gmail.com
              <br />
            </p>
            <div className="social-links mt-3">
              <a
                href="https://www.facebook.com/profile.php?id=100027452545927"
                target="_blank"
                className="facebook"
              >
                <i className="bx bxl-facebook" />
              </a>
              <a
                href="https://www.youtube.com/@PonjiEducare"
                target="_blank"
                className="youtube"
              >
                <i className="bx bxl-youtube" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="/#about">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="/#services">Services</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> Concept Design
              </li>
              <li>
                <i className="bx bx-chevron-right" /> Illustration
              </li>
              <li>
                <i className="bx bx-chevron-right" /> Motion Graphics
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Ponji</h4>
            <p>
              A multimedia and design company that offers unique animation,
              graphic design, concept design, illustration, motion graphics
            </p>
            {/* <form action="" method="post">
        <input type="email" name="email"><input type="submit" value="Subscribe">
      </form> */}
          </div>
        </div>
      </div>
    </div>
    {/* <div class="container">
<div class="copyright">
  &copy; Copyright <strong><span>Ponji</span></strong>. All Rights Reserved
</div>
<div class="credits">
  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
</div>
    </div> */}
  </footer>
  {/* End Footer */}
</>


    </main>
  );
}
