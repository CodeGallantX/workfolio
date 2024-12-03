import logo from "../../assets/logo.jpg";

import './MainFooter.css';

const MainFooter = () => {
  return (
    <div className='mainfooter'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          {/* <img src={logo} alt="Company Logo" /> */}
          <a href='/' className='text-3xl font-medium text-gray-600 hover:text-[#5e89ed] transition-all duration-300 ease'>Code<span className="text-[#5e89ed]">Gallant</span>X</a>
          <p className="italic text-gray-500">&ldquo;A transformer is not defined by the cog in its chest, but by spark in its heart...&rdquo;</p>
        </div>
        <div className='footer-top-right'>
          <div className="flex flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
              className="outline-none px-6 w-full text-gray-600 border border-gray-300 rounded-md py-3 focus:ring-1 focus:ring-accent-color transition-all duration-300 ease-in-out rounded-xl"
            />
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© Samuel John 2024</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
