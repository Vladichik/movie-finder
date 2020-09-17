<template>
  <div class="wtn-slider-section">
    <h2>{{ head }}</h2>
    <vueper-slides class="wtn-slide-frame" :visibleSlides="4" :slideMultiple="true" :gap="3">
      <preloader v-if="data && !data.length"></preloader>
      <no-data-received-message v-if="!data"></no-data-received-message>
      <vueper-slide v-for="(slide, i) in data" v-if="data && data.length" :key="i" v-slot:content>
        <wtn-slide :slide="slide"></wtn-slide>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import {VueperSlides, VueperSlide} from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import Preloader from "@/components/widgets/Preloader";
import MovieSlideTemplate from "@/components/MovieSlideTemplate";
import NoDataReceivedMessage from "@/components/widgets/NoDataReceivedMessage";
export default {
  name: "MoviesSliderComponent",
  props: ["data", "head"],
  components: {
    NoDataReceivedMessage,
    Preloader,
    VueperSlides,
    VueperSlide,
    "wtn-slide": MovieSlideTemplate,
    "wtn-no-results": NoDataReceivedMessage
  },
}
</script>

<style lang="sass">
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
