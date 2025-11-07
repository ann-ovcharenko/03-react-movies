import React, { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const normalizedQuery = query.trim();

    if (normalizedQuery === "") {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(normalizedQuery);
    setQuery("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="query"
            value={query}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />

          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
