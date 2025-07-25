import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
import "./SavedNewsPage.css";
import mockSavedArticles from "../../utils/mockSavedArticles";

function SavedNewsPage({ currentUser, savedArticles, onDelete }) {
  const userArticles =
    currentUser && currentUser._id
      ? savedArticles.filter((a) => a.owner === currentUser._id)
      : mockSavedArticles;

  // Extract and sort keywords by frequency
  const keywordFrequency = {};
  userArticles.forEach((a) => {
    if (a.keyword) {
      keywordFrequency[a.keyword] = (keywordFrequency[a.keyword] || 0) + 1;
    }
  });

  const sortedKeywords = Object.keys(keywordFrequency).sort(
    (a, b) => keywordFrequency[b] - keywordFrequency[a]
  );

  const topKeywords = sortedKeywords.slice(0, 2);
  const remainingCount = sortedKeywords.length - topKeywords.length;

  return (
    <section
      className={`saved-news ${
        userArticles.length === 0 ? "saved-news--empty" : ""
      }`}
    >
      <div className="saved-news__container">
        <p className="saved-news__label">Saved articles</p>
        <h1 className="saved-news__title">
          {currentUser.name}, you have {userArticles.length} saved articles
        </h1>
        {sortedKeywords.length > 0 && (
          <p className="saved-news__keywords">
            By keywords:{" "}
            <span className="saved-news__keyword">
              <strong>{topKeywords.join(", ")}</strong>
              {remainingCount > 0 && (
                <>
                  {" "}
                  and{" "}
                  <strong>
                    {remainingCount} other{remainingCount > 1 ? "s" : ""}
                  </strong>
                </>
              )}
            </span>
          </p>
        )}
      </div>

      {userArticles.length > 0 && (
        <NewsCardList
          articles={userArticles}
          isSavedPage={true}
          isLoggedIn={true}
          currentUser={currentUser}
          savedArticles={savedArticles}
          onDelete={onDelete}
        />
      )}
      <Footer />
    </section>
  );
}

export default SavedNewsPage;
