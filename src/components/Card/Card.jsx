import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';  
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Card.css';

const Card = ({ title, to, emoji, pillText }) => {  
  useEffect(() => {
    feather.replace();
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="card-container" data-aos="fade-up" data-aos-delay="200">
      <Link to={to} className="card bg-gray-800">
        <div className="card_pill">
          <span
            className="pill flex flex-row items-center justify-center px-2 gap-2"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            {pillText} <i className="transform -translate-y-1" data-feather="loader"></i>
          </span>
        </div>
        <div
          className="card_content"
          data-aos="fade-in"
          data-aos-delay="400"
          data-aos-duration="600"
        >
          {title && title.trim() && (
            <p>
              {title} <span role="img" aria-label={title.toLowerCase()}>{emoji}</span>
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
