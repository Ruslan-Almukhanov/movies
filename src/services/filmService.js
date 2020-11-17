export default class filmService {
  constructor() {
    this._apiBase = "https://www.omdbapi.com/?apikey=4124c14f&";
  }

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase} , received ${res.status}`
      );
    }
    return await res.json();
  };

  getAllFilms = async url => {
    return this.getResource(url);
  };

  getFilmBySearch = async url => {
    return this.getResource(url);
  };

  getByCategory = async url => {
    return this.getResource(url);
  };
}
