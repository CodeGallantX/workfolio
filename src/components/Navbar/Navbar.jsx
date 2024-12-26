import { useState } from 'react';
import './Navbar.css';
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
          <a href="/" className="navbar-link">
            Home
          </a>
          <a href="/about" className="navbar-link">
            About
          </a>
        </div>
      </div>
      <div className="navbar-logo">
        {/* <img src={logo} alt="Logo" onClick={() => navigate('/')} /> */}
        <a href='/' className='text-3xl font-medium text-gray-600 group'>Code<span className="text-[#5e89ed] group-hover:text-6xl transition-all duration-300 ease">Gallant</span>X</a>
      </div>
      <div>
        <ul className="navbar-menu">
          <li className="navbar-menu-item"><a href="/portfolio">Projects</a></li>
          <li className="navbar-menu-item"><a href="/blog">Blog</a></li>
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
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/portfolio">Projects</a>
                <a href="/blog">Blog</a>
                <div className="cta-button-mobile">
                  <button
                    target="_blank"
                    onClick={()=> navigate('/JOHN_SAMUEL_RESUME.pdf')}
                    rel="noopener noreferrer"
                  >
                    Resume
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header >
  );
};

export default Navbar;
