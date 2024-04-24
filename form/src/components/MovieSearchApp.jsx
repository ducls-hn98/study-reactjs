import { useEffect, useState } from "react";
import Input from "./Input";
import MovieList from "./MovieList";
import useDebounce from "../hooks/useDebounce";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGRmNWE0MDkxMGQ4OGU3Njc2MjE3N2ZiZmJkNDM4NSIsInN1YiI6IjYzN2ViYjEyNmU5MzhhMDBjZDAwNDkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RcKh-3wx4wfNsAXQusv5eLMhGbpYy4jxF88-k0dlKKs",
  },
};

export default function MovieSearchApp() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const queryDebounce = useDebounce(query, 500);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/search/movie?query=${queryDebounce}&page=1`;

    fetch(url, options)
      .then((data) => data.json())
      .then((result) => setData(result.results))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [queryDebounce]);

  const handleSearch = (e) => {
    setIsLoading(true);
    setQuery(e.target.value);
  };

  return (
    <div>
      <Input placeholder="Search movie" onChange={handleSearch}></Input>
      <MovieList listMovie={data} isLoading={isLoading}></MovieList>
    </div>
  );
}
