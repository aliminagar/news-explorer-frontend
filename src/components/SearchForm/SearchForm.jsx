import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const buttonClassName = `search-form__button ${
    searchTerm.trim() ? "search-form__button--active" : ""
  }`;

  return (
    <section className="search">
      <h1 className="search__title">
        What's going on in{" "}
        <span className="search__title-break">the world?</span>
      </h1>
      <p className="search__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter topic"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button className={buttonClassName} type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
