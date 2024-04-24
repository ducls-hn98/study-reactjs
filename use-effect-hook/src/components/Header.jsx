import "@styles/header.scss";
import { useEffect, useRef } from "react";

export default function Header({ tag, search }) {
  const inputRef = useRef(null);
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      search(event.target.value);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <header className="header">
      <div className="search">
        <input
          type="text"
          className="search__input"
          onKeyDown={handleSearch}
          defaultValue={tag}
          ref={inputRef}
        />
        <button className="search__btn">
          <span className="material-symbols-outlined search__icon">search</span>
        </button>
      </div>
    </header>
  );
}
