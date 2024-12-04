import { useEffect } from 'react';
import './About.css';
// import User from '../../assets/bigtee.jpg'; 
import User from '/profile.jpg'; 
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import Stack from '../../components/Stack/Stack';
import MoreInfo from '../../components/MoreInfo/MoreInfo';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className='upper-about'>
        <p>Introduction</p>
        <h1>About Me</h1>
      </div>

      <div className="about-container">
  <div className="about-content">
    <div className="about-image">
      <img src={User} alt="Logo" />
    </div>
    <div className="about-text" data-aos="fade-up">
      <h1>Hello, I’m Samuel John Ayobami —  CodeGallantX</h1>
      <p>
        <em>"Strive not to be a success, but rather to be of value." – Albert Einstein</em>
      </p>
      <p>
        I’m a frontend and backend developer dedicated to creating fast, intuitive, and impactful web applications. My work combines sleek designs with functional features, ensuring seamless user experiences across all devices.
      </p>
      <h2>Career Focus</h2>
      <p>
        With expertise in frontend tools like React, NextJS Tailwind CSS, and JavaScript, and backend frameworks like Django, I craft full-stack solutions that deliver value and drive impact. I’m currently seeking opportunities to contribute my skills to innovative projects and teams.
      </p>
      <h2>Education</h2>
      <p>
        I’m pursuing a Bachelor’s degree in Computer Science at Lagos State University of Science and Technology. My academic journey complements my professional development, equipping me with a solid foundation in technology and problem-solving.
      </p>
      <h2>Notable Projects</h2>
      <ul>
        <li><strong>CivicTrack</strong>: A platform designed to promote political transparency in Africa, focusing on Nigerian politicians.  </li>
        <li><strong>LevelUP Recyclers</strong>: A website developed to support waste management efforts, combining efficiency with an eco-conscious design.  </li>
        <li><strong>EduConnect</strong>: A peer-learning platform tailored for students to share knowledge and collaborate effectively.</li>
      </ul>
      <h2>Community Impact</h2>
      <p>
        As someone passionate about giving back, I actively contribute to community-focused initiatives. I’ve been working on projects like <strong>Donify</strong>, aimed at fostering sharing and collaboration within local communities.
      </p>
      <h2>Beyond Code</h2>
      <p>
        When I’m not coding, I enjoy exploring creative ideas, mentoring others, and working on projects that make a difference. I’m always ready to listen to good music and help people become their best selves.
      </p>
      <p>
        <a href="#">Hire Me</a> | <a href="#">Say Hello</a>
      </p>
      <MoreInfo />
      <Stack />
    </div>
  </div>
</div>

      <Footer/>
    </>
  );
};

export default About;
