import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({
  isLoggedIn,
  onLogin,
  onLogout,
  isSavedNews,
  activeModal,
  onClose,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    if (activeModal && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (activeModal) setIsMenuOpen(false);
  }, [activeModal]);

  return (
    <header className={`header ${isSavedNews ? "header--saved" : ""}`}>
      <div className="header__container">
        <Link
          to="/"
          className={`header__logo ${isSavedNews ? "header__logo--saved" : ""}`}
        >
          NewsExplorer
        </Link>

        <Navigation
          isLoggedIn={isLoggedIn}
          onLogin={onLogin}
          onLogout={onLogout}
          isSavedNews={isSavedNews}
          isMenuOpen={isMenuOpen}
          onToggleMenu={handleToggleMenu}
          onClose={handleCloseMenu}
          currentUser={currentUser}
          activeModal={activeModal}
        />
      </div>
    </header>
  );
}

export default Header;
