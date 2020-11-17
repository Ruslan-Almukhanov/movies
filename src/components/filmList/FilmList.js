import React from "react";
import styles from "./FilmList.module.css";
import defaultImage from "../../images/default.jpg";
const FilmList = ({ films }) => {
  const checkPoster = poster => {
    return poster === "N/A" ? defaultImage : poster;
  };
  return (
    <>
      <ul className={styles.filmList}>
        {films.map((film, i) => (
          <li key={i}>
            <div className={styles.imgBlock}>
              <img src={checkPoster(film.Poster)} />
            </div>
            <h4>{film.Title}</h4>
            <span className={styles.year}>{film.Year}</span>
            <span>{film.Type}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FilmList;
