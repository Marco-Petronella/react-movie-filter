import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import filmsList from "./data/data";

function App() {
  const originalList = filmsList;
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms(filmsList)
  }, [])

  function handleGenreFilter() {
    const selectedFilter = document.getElementById("filterGenre").value;
    if (selectedFilter != "ALL") { 
      const filteredFilms = originalList.filter((film) => film.genre == selectedFilter)
      setFilms(filteredFilms) 
    }
      else {
      setFilms(originalList)
      }
  }
    function handleTitleFilter() {
    const selectedFilter = document.getElementById("filterTitle").value;
    if (selectedFilter != "ALL") { 
      const filteredFilms = originalList.filter((film) => film.title.toLowerCase().includes(selectedFilter.toLowerCase()))
      setFilms(filteredFilms) 
    }
      else {
      setFilms(originalList)
      }
  }
  
  return (
    <>
    <span className="m-2">filtra per: </span><select onChange={handleGenreFilter} className="m-2" name="" id="filterGenre">
      <option value="ALL">Tutti i film</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option>
    </select>
    <p className="m-2">Ricerca film per titolo: <input onChange={handleTitleFilter} className="m-2" name="" id="filterTitle"></input></p>

    <ul>
    {films.map(film => (
      <li key={film.title}>{film.title} , {film.genre}</li>
    ))}
    </ul>
    </>
  )
}

export default App
