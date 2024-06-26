import ArticleList from "./ArticleList";
import "@styles/app.scss";
import Header from "@components/Header";
import { useState } from "react";
import { Textarea } from "@components/Textarea";

function App() {
  const [tag, setTag] = useState("");

  function handleSearch(tag) {
    setTag(tag);
  }

  return (
    <>
      {h1}
      <Header search={(tag) => handleSearch(tag)} tag={tag}></Header>
      <div className="container">
        <ArticleList tag={tag}></ArticleList>
      </div>
    </>
  );
}

export default App;
