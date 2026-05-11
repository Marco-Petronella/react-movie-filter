import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import filmsList from "./data/data";

function App() {
  const originalList = filmsList;
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms(filmsList)
  }, [])

  function handleFilter() {
    const selectedFilter = document.getElementById("filter").value;
    const filteredFilms = originalList.filter((film) => film.genre == selectedFilter)
    setFilms(filteredFilms)
  }
  return (
    <>
    <span className="m-2">filtra per: </span><select onChange={handleFilter} className="m-2" name="" id="filter">
      <option value="">Tutti i film</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option>
    </select>
    <ul>
    {films.map(film => (
      <li key={film.title}>{film.title} , {film.genre}</li>
    ))}
    </ul>
    </>
  )
}

export default App
