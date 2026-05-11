import "bootstrap/dist/css/bootstrap.min.css";
import films from "./data/data";

/*
Dovrete utilizzare lo stato e useEffect per gestire il filtraggio dinamico.

Per oggi diamo priorità alla logica e alla gestione dello stato. Una volta funzionante,
possiamo pensare allo stile!

Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
Se non viene selezionato alcun genere, devono essere mostrati tutti i film.

BONUS:

Aggiungere un campo di ricerca per filtrare i film anche per titolo.
Creare un sistema per aggiungere nuovi film alla lista tramite un form.
*/
function App() {

  function handleFilter() {
    console.log("hanno selezionato qualcosa:" + document.getElementById("filter").value);
  }
  return (
    <>
    <span className="m-2">filtra per: </span><select onInput={handleFilter} className="m-2" name="" id="filter">
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
