import React, { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf, getFilmStats } from "../helpers/film.helpers" ;
import { Link } from "react-router-dom";


function FilmsPage(props) {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState([]);

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setList(result);
      })

      .catch((err) => {
        console.error(err);
      });
  }
  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, "director")
  let film = getFilmStats(list);
  
  useEffect(() => {
    getFilms();
  }, []);


  return (
    <div>
        <h1>Studio Ghibli Films</h1>
    <ul>
        <form>
            <div class="form-group">
            <label htmlFor="searchDirector">Search Director</label>
            <select 
            name="directors" 
            id="directors" 
            value={searchDirector}
            onChange= {(e) => setSearchDirector(e.target.value)} >
                <option value="">All</option>
                {directors.map((director, idx) => {
                    return (
                        <option key={director + idx} value={director}>
                            {director}
                        </option>
                    )
                })}
            </select>
            </div>
        </form>
        <div>
  <div>
    <span># Of Films</span>
    <span>{film.total}</span>
  </div>
  <div>
    <span>Average Rating</span>
    <span>{film.avg_score.toFixed(2)}</span>
  </div>
  <div>
    <span>Latest Film</span>
    <span>{film.latest}</span>
  </div>
</div>
    </ul>
    <ul>
        {filmsByDirector.map((film) => {
            return <li key={film.id}> 
            <Link to={`/film/${film.id}`} ><h5>{film.title}</h5></Link>
            <img src={film.image} alt="movie photo"/>
                </li>
        })}
        </ul>
    </div>
  );
}

export default FilmsPage;
