import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({
  articles,
  showMore = true,
  onShowMore,
  isSavedPage = false,
  isLoggedIn = false,
  savedArticles = [],
  onSave,
  onDelete,
  showTitle = false,
  onUnauthClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const isArticleSaved = (article) =>
    savedArticles.some(
      (a) =>
        a.title === article.title &&
        (a.source?.name || a.source) ===
          (article.source?.name || article.source)
    );

  const createUniqueKey = (article, index) => {
    return `${article.title}-${article.url}-${index}-${
      isSavedPage ? "saved" : "search"
    }`;
  };

  return (
    <>
      <section className="news-card-list">
        {showTitle && <h2 className="news-card-list__title">Search results</h2>}
        <ul className="news-card-list__grid">
          {articles.map((article, index) => (
            <NewsCard
              key={createUniqueKey(article, index)}
              article={article}
              isSavedPage={isSavedPage}
              isLoggedIn={isLoggedIn}
              onSave={onSave}
              onDelete={onDelete}
              isSaved={isArticleSaved(article)}
              savedArticles={savedArticles} //
              onUnauthClick={onUnauthClick}
            />
          ))}
        </ul>
      </section>

      {showMore && !isSavedPage && (
        <section className="news-card-list__button-wrapper">
          <div className="news-card-list__button-container">
            <button
              className="news-card-list__button"
              onClick={onShowMore}
              disabled={!isLoggedIn}
              aria-disabled={!isLoggedIn}
            >
              Show more
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default NewsCardList;
