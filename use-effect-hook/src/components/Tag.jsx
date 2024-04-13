import "@styles/tag.scss";

export default function Tag({ value }) {
  return (
    <a href="#" className="tag">
      {`#${value}`}
    </a>
  );
}
