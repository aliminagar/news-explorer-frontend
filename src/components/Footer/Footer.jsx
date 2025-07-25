import { Link } from "react-router-dom";
import GithubLogo from "../../assets/project-icons/github-icon.svg";
import FacebookLogo from "../../assets/project-icons/facebook-icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Desktop & Tablet View */}
      <div className="footer__desktop">
        <p className="footer__text">
          © 2025 A Magnificent Site for ALL, Powered by News API
        </p>
        <div className="footer__info">
          <Link to="/" className="footer__link">
            <p className="footer__home">Home</p>
          </Link>
          <a
            href="https://tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__about footer__link"
          >
            TripleTen
          </a>
          <div className="footer__socials">
            <a
              href="https://github.com/aliminagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GithubLogo}
                alt="GitHub"
                className="footer__social-logo"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FacebookLogo}
                alt="Facebook"
                className="footer__social-logo"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="footer__mobile">
        <div className="footer__mobile-top">
          <Link to="/" className="footer__link">
            <p className="footer__home">Home</p>
          </Link>
          <div className="footer__socials">
            <a
              href="https://github.com/aliminagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GithubLogo}
                alt="GitHub"
                className="footer__social-logo"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FacebookLogo}
                alt="Facebook"
                className="footer__social-logo"
              />
            </a>
          </div>
        </div>
        <a
          href="https://tripleten.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__about footer__link"
        >
          TripleTen
        </a>
        <p className="footer__text">© 2025 A Great Site, Powered by News API</p>
      </div>
    </footer>
  );
};

export default Footer;
