import { useState } from 'react';
import './Navbar.css';
// import logo from "../../assets/logo.jpg";
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <div className="navbar-container">
        <div className="navbar-links">
          <div className="navbar-link" onClick={() => navigate('/')}>
            Home
          </div>
          <div className="navbar-link" onClick={() => navigate('/about')}>
            About
          </div>
        </div>
        <div className="navbar-logo">
          {/* <img src={logo} alt="Logo" onClick={() => navigate('/')} /> */}
          <a href='/' className='text-3xl font-medium text-gray-600 group'>Code<span className="text-[#5e89ed] group-hover:text-6xl transition-all duration-300 ease">Gallant</span>X</a>
        </div>
        <div>
          <ul className="navbar-menu">
            <li className="navbar-menu-item" onClick={() => navigate('/portfolio')}>Projects</li>
            <li className="navbar-menu-item" onClick={() => navigate('/blog')}>Blog</li>
            <li>
              <div className="nav-connect">
                <a
                  href="JOHN_SAMUEL_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  View Resume
                </a>
              </div>
            </li>
          </ul>
          <div className="navbar-mobile-toggle">
            {isOpen ? (
              <CgClose color="black" onClick={() => setIsOpen(false)} size={40} />
            ) : (
              <BiMenu onClick={() => setIsOpen(true)} size={40} />
            )}
          </div>

          {isOpen && (
            <div className="navbar-mobile-menu">
              <div className="navbar-mobile-menu-wrapper">
                <nav>
                  <a href="#" onClick={() => navigate('/')}>Home</a>
                  <a href="#" onClick={() => navigate('/about')}>About</a>
                  <a href="#" onClick={() => navigate('/portfolio')}>Projects</a>
                  <a href="#" onClick={() => navigate('/blog')}>Blog</a>
                  <div className="cta-button-mobile">
                    <a
                      href="/JOHN_SAMUEL_RESUME.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
