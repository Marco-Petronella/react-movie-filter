import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import filmsList from "./data/data";

function App() {
  const originalList = filmsList;
  const [films, setFilms] = useState([]);
  const [addFilm, setAddFilm] = useState({
    title: "",
    genre: "",
  });

  useEffect(() => {
    setFilms(filmsList)
  }, [])

  function handleGenreFilter(e) {
    const selectedFilter = e.target.value;
    if (selectedFilter != "ALL") { 
      const filteredFilms = originalList.filter((film) => film.genre == selectedFilter)
      setFilms(filteredFilms) 
    }
      else {
      setFilms(originalList)
      }
  }
    function handleTitleFilter(e) {
    const selectedFilter = e.target.value
    if (selectedFilter != "ALL") { 
      const filteredFilms = originalList.filter((film) => film.title.toLowerCase().includes(selectedFilter.toLowerCase()))
      setFilms(filteredFilms) 
    }
      else {
      setFilms(originalList)
      }
  }
    function handleAddFilm(e) {
      e.preventDefault()
    console.log(e.target.value);
    originalList.push(addFilm);
    setFilms(originalList)
  }
  function handleSetNewFilm(e) {
    setAddFilm({
      ...addFilm,
      [e.target.name]: e.target.value,
  });
  console.log(addFilm);
  
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
    
    <form className="m-2 p-2" onSubmit={handleAddFilm}>

      <p>titolo <input 
      type="text" 
      name="title"
      onChange={handleSetNewFilm}
      placeholder="Inserisci Titolo" />

      <span> genere: </span>
      <select onChange={handleSetNewFilm} className="m-2" name="genre">
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option> </select>

      <button type="submit" className="btn btn-primary"> Aggiungi </button>
      </p>
    </form>
    <ul>
    {films.map(film => (
      <li key={film.title}>{film.title} , {film.genre}</li>
    ))}
    </ul>
    </>
  )
}

export default App
