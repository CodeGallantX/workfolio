import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <h3>Find Me on Social Media ✌🏽</h3>
        <div className="footer_links">
          <a href="https://www.linkedin.com/in/john-samuel-cgx/" target="_blank" rel="noopener noreferrer">
            LinkedIn <i data-feather="linkedin"></i>
          </a>

          <a href="https://twitter.com/JohnSamue24013" target="_blank" rel="noopener noreferrer">
            Twitter <i data-feather="twitter"></i>
          </a>

          <a href="https://github.com/CodeGallantX" target="_blank" rel="noopener noreferrer">
            Github <i data-feather="github"></i>
          </a>

          <a href="mailto:johnayobami77@proton.me">
            Email <i data-feather="mail"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
