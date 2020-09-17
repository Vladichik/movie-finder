/**
 *
 * Written by vlad on 17/09/2020
 */

import GateKeeper from "assets/scripts/GateKeeper";

export const state = () => ({
  search_results: []
});

export const mutations = {
  vuexSetMoviesResults(state, res) {
    state.search_results = res;
  }
}

export const actions = {
  vuexGetMovies({commit}, payload) {
    commit("vuexSetMoviesResults", []);
    GateKeeper.fetchMoviesByTitle(payload).then(resp => {
      commit("vuexSetMoviesResults", resp);
    })
  }
}
