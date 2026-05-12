 import { useEffect, useState } from "react";
import filmsList from "../data/data";
import { handleGenreFilter, handleTitleFilter, handleAddFilm, handleSetNewFilm } from "./Functions";
 
 export default function AppMain() {
 const originalList = filmsList;
  const [films, setFilms] = useState([]);
  const [addFilm, setAddFilm] = useState({
    title: "",
    genre: "",
  });

  useEffect(() => {
    setFilms(filmsList)
  }, [])
  
  
  return (
    <>
    <span className="m-2">filtra per: </span><select onChange={(e) => handleGenreFilter(e, originalList, setFilms)} className="m-2" name="" id="filterGenre">
      <option value="ALL">Tutti i film</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option>
    </select>
    <p className="m-2">Ricerca film per titolo: <input onChange={(e) => handleTitleFilter(e, originalList, setFilms)} className="m-2" name="" id="filterTitle"></input></p>
    
    <form className="m-2 p-2" onSubmit={(e) => handleAddFilm(e, originalList, addFilm, setFilms)}>

      <p>titolo <input 
      type="text" 
      name="title"
      onChange={(e) => handleSetNewFilm(e, addFilm, setAddFilm)}
      placeholder="Inserisci Titolo" />

      <span> genere: </span>
      <select onChange={(e) => handleSetNewFilm(e, addFilm, setAddFilm)} className="m-2" name="genre">
      <option value="">Seleziona un genere</option>
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