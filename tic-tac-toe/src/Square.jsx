import "./Square.css";

export default function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      <p className={value === "X" ? "square--x" : "square--o"}>{value}</p>
    </button>
  );
}
