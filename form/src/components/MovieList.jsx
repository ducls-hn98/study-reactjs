import Card from "./Card";
import CardLoading from "./CardLoading";

export default function MovieList({ listMovie, isLoading }) {
  return (
    <div
      className=""
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(390px, 1fr))",
        columnGap: "10px",
        rowGap: "10px",
      }}
    >
      {isLoading && [1, 2, 3].map((v) => <CardLoading key={v}></CardLoading>)}
      {listMovie.length != 0 &&
        !isLoading &&
        listMovie.map((v, i) => (
          <Card
            key={i}
            title={v.title}
            overview={v.overview}
            poster_path={v.poster_path}
            vote_average={v.vote_average}
          ></Card>
        ))}
    </div>
  );
}
