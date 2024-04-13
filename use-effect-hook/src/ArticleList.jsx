import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Article from "@components/Article";
import "@styles/article-list.scss";

const url = "https://dev.to/api/articles";
const handleFetchData = async (tag = "") => {
  const data = await axios.get(`${url}?tag=${tag}`);
  return data;
};

const sanitizeResult = (result) => {
  if (result.length == 0) {
    return [];
  }

  return result.map((r) => {
    return {
      id: r.id,
      avatar: r.user.profile_image_90,
      username: r.user.username,
      publishedAt: r.published_at,
      title: r.title,
      tags: r.tag_list,
      reactions: r.public_reactions_count,
      comments: r.comments_count,
    };
  });
};

export default function ArticleList({ tag }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleFetchData(tag)
      .then((result) => {
        let data = sanitizeResult(result.data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, [tag]);

  let listArticle = "";

  if (data.length == 0) {
    listArticle = <p>No article</p>;
  } else {
    listArticle = data.map((d) => (
      <Article
        key={d.id}
        avatar={d.avatar}
        authorName={d.username}
        publishedAt={d.publishedAt}
        title={d.title}
        tags={d.tags}
        reactions={d.reactions}
        comments={d.comments}
      ></Article>
    ));
  }

  return <div className="list-article">{listArticle}</div>;
}
