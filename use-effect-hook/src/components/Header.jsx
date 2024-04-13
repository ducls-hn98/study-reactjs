import "@styles/header.scss";

export default function Header({ tag, search }) {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      search(event.target.value);
    }
  };

  return (
    <header className="header">
      <div className="search">
        <input
          type="text"
          className="search__input"
          onKeyDown={handleSearch}
          defaultValue={tag}
        />
        <button className="search__btn">
          <span className="material-symbols-outlined search__icon">search</span>
        </button>
      </div>
    </header>
  );
}
