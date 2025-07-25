import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import "./Main.css";

function Main({
  articles,
  isLoading,
  errorMessage,
  visibleCards,
  setVisibleCards,
  isLoggedIn,
  savedArticles,
  onSave,
  onDelete,
  onUnauthClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const userSavedArticles = savedArticles.filter(
    (article) => article.owner === currentUser?._id
  );

  const showSavedAsDefault = isLoggedIn && articles.length === 0;
  const showResults =
    isLoading ||
    errorMessage === "Nothing Found" ||
    articles.length > 0 ||
    (isLoggedIn && articles.length > 0) ||
    (showSavedAsDefault && userSavedArticles.length > 0);

  return (
    <main className="main">
      <section className="results-section">
        {isLoading ? (
          <Preloader />
        ) : errorMessage === "Nothing Found" ? (
          <NoResults />
        ) : errorMessage ? (
          <p className="results-section__message">{errorMessage}</p>
        ) : articles.length > 0 ? (
          <NewsCardList
            articles={articles.slice(0, visibleCards)}
            showMore={articles.length > visibleCards}
            onShowMore={() => setVisibleCards((prev) => prev + 3)}
            isLoggedIn={isLoggedIn}
            savedArticles={savedArticles}
            onSave={onSave}
            onDelete={onDelete}
            showTitle={
              showResults &&
              errorMessage !== "Nothing Found" &&
              articles.length > 0
            }
            onUnauthClick={onUnauthClick}
          />
        ) : showSavedAsDefault && userSavedArticles.length > 0 ? (
          <NewsCardList
            articles={userSavedArticles}
            showMore={false}
            isSavedPage={false}
            isLoggedIn={isLoggedIn}
            savedArticles={savedArticles}
            onDelete={onDelete}
            onUnauthClick={onUnauthClick}
          />
        ) : null}
      </section>
    </main>
  );
}

export default Main;
