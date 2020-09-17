<template>
  <section class="wtn-results-page wtn-content">
    <wtn-slider-block :data="search_results" :head="$t('longer_process')"></wtn-slider-block>
    <wtn-slider-block :data="no_director_data" :head="$t('faster_process')"></wtn-slider-block>
  </section>
</template>

<script>
import {mapActions, mapState} from "vuex";
import GateKeeper from "assets/scripts/GateKeeper";
import MoviesSliderComponent from "@/components/MoviesSliderComponent";

export default {
  name: "results",
  components: {
    "wtn-slider-block": MoviesSliderComponent
  },
  created() {
    /**
     * Here I show two ways of fetching data
     * one: using Vuex store and two: direct API call from component
     */
    // VUEX
    this.callMoviesFetcherFromVuex();
    // FROM COMPONENT
    this.callResultsFromComponent();
  },
  data() {
    return {
      no_director_data: []
    }
  },
  computed: {
    ...mapState(["search_results"])
  },
  methods: {
    ...mapActions(["vuexGetMovies"]),

    callMoviesFetcherFromVuex() {
      const qStr = this.$route.query.str;
      if (qStr && qStr.length) {
        this.vuexGetMovies(qStr);
      }
    },

    callResultsFromComponent() {
      const qStr = this.$route.query.str;
      if (qStr && qStr.length) {
        GateKeeper.fetchMoviesByTitle(qStr, true).then(resp => {
          this.no_director_data = resp;
        })
      }
    }
  }
}
</script>

<style scoped lang="sass">
@import "../assets/styles/variables"
.wtn-results-page
  height: 100%
  overflow: auto
  margin: 0 0 40px 0
  +setGridAuto(auto, 30px, "rows")
</style>
