import React, { useState, useEffect } from "react";

function FilmsList(props) {
  const [list, setList] = useState([]);

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
  useEffect(() => {
    getFilms();
  }, []);

  return (
    <ul>
      {list.map((e) => {
        return <li key={e.id}>{e.title}</li>;
      })}
    </ul>
  );
}

export default FilmsList;
