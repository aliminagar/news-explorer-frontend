/**
 * News Explorer Project
 * Created by Alireza Minagar
 * July 2025
 */

import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import SignupSuccessModal from "../SignupSuccessModal/SignupSuccessModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { fetchNewsArticles } from "../../utils/newsApi";
import {
  signup,
  authorize as signin,
  checkToken as getUserInfo,
  getSavedArticles,
  saveArticle,
  deleteArticle,
} from "../../utils/stubApi";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import keyboardImg from "../../assets/project-images/keyboard-img.png";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSavedNews = location.pathname === "/saved-news";

  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCards, setVisibleCards] = useState(3);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({ name: "" });
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAppReady, setAppReady] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [activeModal, setActiveModal] = useState(null);
  const handleModalClose = () => setActiveModal(null);

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser({ name: "" });
    setSavedArticles([]);
    localStorage.removeItem("jwt");
    navigate("/");
  };

  // Auth check
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return setAppReady(true);

    getUserInfo(token)
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
        return getSavedArticles(token);
      })
      .then(setSavedArticles)
      .catch((err) => {
        console.error("Token validation failed:", err);
        handleLogout();
      })
      .finally(() => setAppReady(true));
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isAppReady) return null;

  const handleSearch = (query) => {
    if (!query.trim()) {
      setErrorMessage("Please enter a keyword");
      return;
    }

    localStorage.setItem("lastSearchQuery", query);
    const cached = localStorage.getItem(`newsCache-${query}`);
    setSearchQuery(query);
    setVisibleCards(3);
    setErrorMessage("");
    setArticles([]);

    if (cached) {
      setArticles(JSON.parse(cached));
      return;
    }

    setIsLoading(true);
    fetchNewsArticles(query)
      .then((articles) => {
        if (articles.length === 0) {
          setErrorMessage("Nothing Found");
        } else {
          setArticles(articles);
          localStorage.setItem(`newsCache-${query}`, JSON.stringify(articles));
        }
      })
      .catch(() =>
        setErrorMessage(
          "Sorry, something went wrong during the request. Please try again later."
        )
      )
      .finally(() => setIsLoading(false));
  };

  const handleRegister = ({ name, email, password }) => {
    return signup({ name, email, password })
      .then(() => {
        setActiveModal("success");
      })
      .catch((err) => {
        console.error("Registration failed:", err);
        if (err.includes("409")) {
          setErrorMessage("User with this email already exists.");
        } else {
          setErrorMessage("Registration failed. Please try again.");
        }
      });
  };

  const handleLogin = ({ email, password }) =>
    signin({ email, password })
      .then(({ token }) => {
        localStorage.setItem("jwt", token);
        return Promise.all([getUserInfo(token), getSavedArticles(token)]);
      })
      .then(([user, articles]) => {
        setCurrentUser(user);
        setSavedArticles(articles);
        setLoggedIn(true);
        setActiveModal(null);
        navigate("/saved-news");
      });

  const handleSaveArticle = (article) => {
    const token = localStorage.getItem("jwt");
    const keyword = searchQuery.trim();

    // Deduplication: Find if article is already saved (by title)
    const existing = savedArticles.find((a) => a.title === article.title);
    if (existing) {
      // If already saved, delete it (toggle)
      handleDeleteArticle(existing);
      return;
    }

    const cleanedArticle = {
      keyword,
      title: article.title,
      description: article.description,
      publishedAt: article.publishedAt,
      source: { name: article.source?.name || article.source },
      urlToImage: article.urlToImage,
    };

    saveArticle(token, cleanedArticle)
      .then((saved) => setSavedArticles((prev) => [...prev, saved]))
      .catch((err) => console.error("Failed to save article:", err));
  };

  /**
   * Deletes a saved article by its unique ID.
   */
  const handleDeleteArticle = (article) => {
    const token = localStorage.getItem("jwt");
    if (!article?._id) return;

    deleteArticle(token, article._id)
      .then(() => {
        setSavedArticles((prev) => prev.filter((a) => a._id !== article._id));
      })
      .catch((err) => console.error("Failed to delete article:", err));
  };

  // Handler for unauthorized save icon click
  const handleUnauthSaveClick = () => {
    setActiveModal("register"); // Open registration modal
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="intro-background">
                  <Header
                    isSavedNews={false}
                    isLoggedIn={isLoggedIn}
                    currentUser={currentUser}
                    onLogin={() => setActiveModal("login")}
                    onLogout={handleLogout}
                    activeModal={activeModal}
                    onClose={handleModalClose}
                  />
                  <SearchForm onSearch={handleSearch} />
                </div>

                <Main
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  articles={articles}
                  visibleCards={visibleCards}
                  setVisibleCards={setVisibleCards}
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  onSave={handleSaveArticle}
                  onDelete={handleDeleteArticle}
                  onUnauthClick={handleUnauthSaveClick}
                />

                <About />

                {!isLoggedIn &&
                  activeModal === "login" &&
                  screenWidth === 768 && (
                    <img
                      src={keyboardImg}
                      alt="Mobile keyboard"
                      className="app__keyboard-img"
                    />
                  )}

                <Footer />
              </>
            }
          />

          <Route
            path="/saved-news"
            element={
              <div className="saved-background">
                <Header
                  isSavedNews
                  isLoggedIn={isLoggedIn}
                  currentUser={currentUser}
                  onLogin={() => setActiveModal("login")}
                  onLogout={handleLogout}
                  activeModal={activeModal}
                  onClose={handleModalClose}
                />
                <SavedNewsPage
                  currentUser={currentUser}
                  savedArticles={savedArticles}
                  onDelete={handleDeleteArticle}
                />
              </div>
            }
          />
        </Routes>

        <RegisterModal
          isOpen={activeModal === "register"}
          onRegister={handleRegister}
          onClose={handleModalClose}
          onSwitchToLogin={() => setActiveModal("login")}
        />
        <LoginModal
          isOpen={activeModal === "login"}
          onLogin={handleLogin}
          onClose={handleModalClose}
          onSwitchToRegister={() => setActiveModal("register")}
        />
        <SignupSuccessModal
          isOpen={activeModal === "success"}
          onClose={handleModalClose}
          onSignInClick={() => setActiveModal("login")}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
