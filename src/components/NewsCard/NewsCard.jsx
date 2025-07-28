import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import saveIcon from "../../assets/project-icons/unsave-icon.svg";
import saveIconActive from "../../assets/project-icons/save-icon-active.svg";
import deleteIcon from "../../assets/project-icons/delete-icon.svg";
import "./NewsCard.css";

function NewsCard({
  article,
  isSavedPage,
  isLoggedIn,
  onSave,
  onDelete,
  isSaved,
  onUnauthClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwner = article.owner === currentUser?._id;

  const tooltipText = isSavedPage
    ? isOwner
      ? "Remove from saved"
      : ""
    : !isLoggedIn
    ? "Sign in to save articles"
    : isSaved
    ? "Already saved"
    : "Save article";

  const handleClick = () => {
    if (!isLoggedIn && !isSavedPage) {
      onUnauthClick();
      return;
    }

    if (isSavedPage && isOwner) {
      onDelete(article);
    } else if (!isSavedPage && isLoggedIn) {
      onSave(article);
    }
  };

  const iconSrc = isSavedPage
    ? deleteIcon
    : isSaved
    ? saveIconActive
    : saveIcon;

  return (
    <li className="news-card">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-card__image"
      />

      {isSavedPage && article.keyword && (
        <span className="news-card__keyword">{article.keyword}</span>
      )}

      <div className="tooltip-container">
        {tooltipText && <span className="tooltip-text">{tooltipText}</span>}
        <button
          className={`news-card__save ${
            isSavedPage ? "news-card__delete" : ""
          } ${isSaved ? "saved-active" : ""}`}
          onClick={handleClick}
          aria-label={
            isSavedPage
              ? "Remove from saved"
              : isSaved
              ? "Already saved"
              : "Save article"
          }
        >
          <img className="tooltip-icon" src={iconSrc} alt="action" />
        </button>
      </div>

      <div className="news-card__content">
        <div className="news-card__body">
          <p className="news-card__date">
            {new Date(article.publishedAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h3 className="news-card__title">{article.title}</h3>
          <p className="news-card__description">{article.description}</p>
        </div>
        <span className="news-card__source">{article.source.name}</span>
      </div>
    </li>
  );
}

export default NewsCard;
