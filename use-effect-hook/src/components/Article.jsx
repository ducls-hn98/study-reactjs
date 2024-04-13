import "@styles/article.scss";
import Tag from "@components/Tag.jsx";
import Social from "@components/Social.jsx";
import formatDate from "@utils/formatDate";

export default function Article({
  avatar,
  authorName,
  publishedAt,
  title,
  tags,
  reactions,
  comments,
}) {
  let listTag = "";

  if (tags.length > 0) {
    listTag = tags.map((tag) => (
      <li className="article__tag">
        <Tag value={tag}></Tag>
      </li>
    ));
  }

  return (
    <div className="article">
      <div className="article__header">
        <div className="author">
          <img src={avatar} alt="Author avatar" className="author__avatar" />
          <div className="author__info">
            <p className="author__name">{authorName}</p>
            <p className="author__published-at">{formatDate(publishedAt)}</p>
          </div>
        </div>
      </div>
      <div className="article__body">
        <p className="article__title">{title}</p>

        <ul className="article__tags">{listTag}</ul>
      </div>
      <div className="article__footer">
        <div className="article__social">
          <Social>
            <span className="article__icon material-symbols-outlined">
              add_reaction
            </span>
            <span>{reactions} reactions</span>
          </Social>
          <Social>
            <span className=" article__icon material-symbols-outlined">
              chat_bubble
            </span>
            <span>{comments} comments</span>
          </Social>
        </div>
        <div className="article__bookmark">
          <span className="material-symbols-outlined">bookmark</span>
        </div>
      </div>
    </div>
  );
}
