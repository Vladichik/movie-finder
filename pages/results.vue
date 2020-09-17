<template>
  <section class="wtn-results-page wtn-content">
    <div class="wtn-slider-section">
      <h2>{{ $t('longer_process') }}</h2>
      <vueper-slides class="wtn-slide-frame" :visibleSlides="4" :slideMultiple="true" :gap="3">
        <preloader v-if="!search_results.length"></preloader>
        <vueper-slide v-for="(slide, i) in search_results" :key="i" v-slot:content>
          <wtn-slide :slide="slide"></wtn-slide>
        </vueper-slide>
      </vueper-slides>
    </div>

    <div class="wtn-slider-section">
      <h2>{{ $t('faster_process') }}</h2>
      <vueper-slides class="wtn-slide-frame" :visibleSlides="4" :slideMultiple="true" :gap="3">
        <preloader v-if="!no_director_data.length"></preloader>
        <vueper-slide v-for="(slide, i) in no_director_data" :key="i" v-slot:content>
          <wtn-slide :slide="slide"></wtn-slide>
        </vueper-slide>
      </vueper-slides>
    </div>
  </section>
</template>

<script>
import {mapActions, mapState} from "vuex";
import MovieSlideTemplate from "@/components/MovieSlideTemplate";
import Preloader from "@/components/Preloader";
import {VueperSlides, VueperSlide} from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import GateKeeper from "assets/scripts/GateKeeper";

export default {
  name: "results",

  components: {Preloader, VueperSlides, VueperSlide, "wtn-slide": MovieSlideTemplate},
  created() {
    /**
     * Here I show two ways of fetching data
     * one: using Vuex store and second direct API call from component
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

.wtn-slider-section
  padding: 0 0 20px 0
  border-bottom: solid 1px lightgrey

  h2
    color: white
    font-size: 20px
    margin: 0 0 20px 0

.wtn-slide-frame
  position: relative
  background: white
  padding: 40px 45px 0 45px
</style>
