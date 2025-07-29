import "./NoResults.css";
import sadIcon from "../../assets/project-icons/not-found.svg";

function NoResults() {
  return (
    <section className="no-results" aria-labelledby="no-results-title">
      <img
        src={sadIcon}
        alt="Sad face icon"
        className="no-results__icon"
        loading="lazy"
      />
      <h2 id="no-results-title" className="no-results__title">
        Nothing found
      </h2>
      <p className="no-results__subtitle">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NoResults;
