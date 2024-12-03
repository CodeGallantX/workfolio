import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';
import HeroImage from '../../assets/idee.jpg';
// import HeroImage from '/profile.jpeg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="hero-container">
      <div className="hero" data-aos="fade-up">
        <img 
          src={HeroImage} 
          alt="Profile Placeholder" 
          className="hero-image" 
          data-aos="zoom-in"
        />
        <div className="content" data-aos="fade-in" data-aos-delay="200">
          <h6 className="greeting">Hello, I&apos;m Samuel John</h6>
          <h1 className="main_head">
            <span className="highlight">Front-End Developer</span> <br />
          </h1>
          <h6 className="subtitle">
            I build frontend applications. Sometimes I design, and  I work on the backend. I ensure that the apps I deliver are fast, easy to use, and responsive.
          </h6>
          <div className="social-icons">
            <a href="https://wa.me/+2348096044860" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://facebook.com/johnsamuelcgx" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/johndayo227" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/CodeGallantX" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:johnayobami77@proton.me" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linktr.ee/codegallantx" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link"></i>
            </a>
          </div>
          <a href="https://wa.me/+2348096044860" className="cta" target="_blank" rel="noopener noreferrer">
            <button className="hero_button">Let’s chat</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
