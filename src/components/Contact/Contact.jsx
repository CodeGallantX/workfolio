import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-section">
        <div className="contact-left">
          <h1>Send a Message</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you'd like me to work on.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <img src={mail_icon} alt="Mail Icon" />
              <span>johnayobami77@proton.me</span>
            </div>
            <div className="info-item">
              <img src={location_icon} alt="Location Icon" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="info-item">
              <img src={call_icon} alt="Call Icon" />
              <span>+234 809 604 4860</span>
            </div>
          </div>
        </div>

        <form className="contact-right">
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="form-input rounded-xl px-4 indent-2 placeholder:indent-2"
            />
          </fieldset>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-input rounded-xl px-4 indent-2 placeholder:indent-2"
            />
          </fieldset>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="reason">Reason for Message</label>
            <select name="reason" id="reason" className="form-select rounded-xl px-2 indent-1 placeholder:indent-1" required>
              <option value="">Select a reason</option>
              <option value="job-opportunity">I have a job for you.</option>
              <option value="collaboration">Let’s build something together?</option>
              <option value="general-inquiry">Just wanted to ask a thing or two</option>
              <option value="feedback">I have some feedback for you.</option>
            </select>
          </fieldset>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="message">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Hi John, "
              className="form-textarea rounded-xl px-4 indent-2 placeholder:indent-2"
            ></textarea>
          </fieldset>
          <button type="submit" className="contact-submit rounded-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
