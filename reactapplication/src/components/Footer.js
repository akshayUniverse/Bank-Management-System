import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms & Conditions</Link>
        <Link to="/support">Support</Link>
      </div>
      <div className="social-media">
        <Link to={{ pathname: "https://facebook.com" }} target="_blank">
          <img src="facebook-icon.png" alt="Facebook" />
        </Link>
        <Link to={{ pathname: "https://linkedin.com" }} target="_blank">
          <img src="linkedin-icon.png" alt="LinkedIn" />
        </Link>
        <Link to={{ pathname: "https://youtube.com" }} target="_blank">
          <img src="youtube-icon.png" alt="YouTube" />
        </Link>
        <Link to={{ pathname: "https://twitter.com" }} target="_blank">
          <img src="twitter-icon.png" alt="Twitter" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
