/**
 *
 * Written by vlad on 17/09/2020
 */
import axios from "axios";
import {Constants} from "assets/scripts/Constants";

export default class GateKeeper {
  /**
   * Fetching movies from API
   * @param title - Search string
   * @param noDirector - If True We don't fetch director data for each movie
   * @return {Promise<unknown[] | []>}
   */
  static fetchMoviesByTitle(title, noDirector) {
    return axios.get(`${Constants.BASE_URL}&s=${title}&type=movie`).then(response => {
      if (response.data.Response === "True" && response.data.Search.length) {
        if (noDirector) {
          return response.data.Search
        } else {
          return this.getEachMovieDirectorAndEnrichData(response.data.Search);
        }
      } else {
        return null;
      }
    })
  }

  /**
   * Since SEARCH API with parameter "&s=blabla" doesn't return a director name, we need to fetch it from
   * IMDB/TITLE API and after that to enrich each movie object with found director name.
   * @param movies - array of received movies
   * @return {Promise<unknown[]>}
   */
  static getEachMovieDirectorAndEnrichData(movies) {
    const allPromises = movies.map(movie => {
      return new Promise(resolve => {
        axios.get(`${Constants.BASE_URL}&plot=full&i=${movie.imdbID}`).then(response => resolve(response))
      })
    })

    return Promise.all(allPromises).then(promises => {
      if (promises && promises.length) {
        return movies.map(movie => {
          const foundInPromise = promises.find(prom => prom.data.imdbID === movie.imdbID);
          if (foundInPromise) {
            movie.Director = foundInPromise.data.Director
            return movie
          }
        })
      }
    })
  }
}
