import React, { useState, useEffect } from "react";
import "./App.css";
import FilmList from "./components/filmList";
import filmService from "./services/filmService";
import Spinner from "./components/spinner";
import AppHeader from "./components/appHeader";

function App() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const request = new filmService();

  const displayFilmsOrError = film => {
    if (film.Response != "False") {
      setFilms(film.Search);
      setLoading(false);
      setError(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const getData = func => {
    func
      .then(setLoading(true))
      .then(film => {
        displayFilmsOrError(film);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
        console.error(err);
      });
  };

  const selectYearHandler = e => {
    const target = e.target;
    const year = target.getAttribute("value");    
    year && getData(request.getAllFilms(`s=movie&y=${year}`));
  };

  const selectHandler = e => {
    getData(request.getByCategory(`s=${e.target.value}`));
  };

  useEffect(() => {
    search.length > 2
      ? getData(request.getFilmBySearch(`&s=${search}`))
      : getData(request.getAllFilms("s=movie"));
  }, [search]);
  console.log(films);

  return (
    <>
      <AppHeader
        search={search}
        setSearch={setSearch}
        selectHandler={selectHandler}
        selectYearHandler={selectYearHandler}
      />
      {loading && <Spinner />}
      {error && (
        <div>
          <h3 style={{ textAlign: "center" }}>
            По вашему запросу фильмов не найдено
          </h3>
        </div>
      )}
      {films && !error && !loading ? <FilmList films={films} /> : null}
    </>
  );
}

export default App;
