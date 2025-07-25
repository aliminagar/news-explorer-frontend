import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import logoutIcon from "../../assets/project-icons/logout-icon.svg";
import "./Navigation.css";

function Navigation({
  isLoggedIn,
  onLogin,
  onLogout,
  isSavedNews,
  isMenuOpen,
  onToggleMenu,
  onClose,
  activeModal,
}) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const savedClass = isSavedNews ? "saved-news" : "";

  const showCloseIcon = activeModal === "login" || activeModal === "register";

  return (
    <nav className="navigation">
      {/* Hamburger becomes X if a modal is open */}
      {!isMenuOpen && (
        <button
          className="navigation__hamburger"
          onClick={showCloseIcon ? onClose : onToggleMenu}
          aria-label={showCloseIcon ? "Close modal" : "Toggle menu"}
        >
          {showCloseIcon ? (
            <span
              className={`navigation__close-icon ${
                isSavedNews ? "navigation__close-icon--dark" : ""
              }`}
            >
              ×
            </span>
          ) : (
            <>
              <span
                className={`navigation__hamburger-line ${
                  isSavedNews ? "navigation__hamburger-line--dark" : ""
                }`}
              />
              <span
                className={`navigation__hamburger-line ${
                  isSavedNews ? "navigation__hamburger-line--dark" : ""
                }`}
              />
            </>
          )}
        </button>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`navigation__overlay navigation__overlay--visible ${savedClass}`}
        >
          <div className={`navigation__mobile-menu ${savedClass}`}>
            <button className="navigation__close" onClick={onClose}>
              &times;
            </button>

            {/* Top divider below logo */}
            <div className="navigation__divider" />

            <Link to="/" className="navigation__link" onClick={onClose}>
              Home
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  to="/saved-news"
                  className="navigation__link"
                  onClick={onClose}
                >
                  Saved articles
                </Link>
                <button
                  className="navigation__logout"
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                >
                  {currentUser?.name}
                  <img
                    className={`navigation__logout-icon ${
                      !isSavedNews ? "navigation__logout-icon--white" : ""
                    }`}
                    src={logoutIcon}
                    alt="logout"
                  />
                </button>
              </>
            ) : (
              <>
                <button
                  className="navigation__button"
                  onClick={() => {
                    onLogin();
                    onClose();
                  }}
                >
                  Sign in
                </button>

                {/* Bottom divider under Sign in */}
                <div className="navigation__divider" />
              </>
            )}
          </div>
        </div>
      )}

      {/* Desktop */}
      <div className="navigation__menu">
        <Link
          to="/"
          className={`navigation__link ${
            location.pathname === "/" ? "navigation__link--active" : ""
          } ${isSavedNews ? "navigation__link--saved" : ""}`}
        >
          Home
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              to="/saved-news"
              className={`navigation__link ${
                location.pathname === "/saved-news"
                  ? "navigation__link--active"
                  : ""
              } ${isSavedNews ? "navigation__link--saved" : ""}`}
            >
              Saved articles
            </Link>
            <button
              className={`navigation__logout ${
                isSavedNews
                  ? "navigation__logout--saved"
                  : "navigation__logout--home"
              }`}
              onClick={onLogout}
            >
              {currentUser?.name}
              <img
                className={`navigation__logout-icon ${
                  !isSavedNews ? "navigation__logout-icon--white" : ""
                }`}
                src={logoutIcon}
                alt="logout"
              />
            </button>
          </>
        ) : (
          <button
            className={`navigation__button ${
              isSavedNews ? "navigation__button--saved" : ""
            }`}
            onClick={onLogin}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
