<template>
  <section class="wtn-slide">
    <div class="wtn-image-frame">
      <img :src="slide.Poster">
    </div>
    <h4>{{slide.Title}}</h4>
    <span v-if="slide.Director">{{$t('director')}}: {{slide.Director}}</span>
    <span>{{$t('year')}}: {{slide.Year}}</span>
  </section>
</template>

<script>
export default {
  props: ["slide"],
  name: "MovieSlideTemplate"
}
</script>

<style lang="sass">
@import "assets/styles/variables"
.wtn-slide
  background: white
  height: 100%
  +setGrid(null, null, 1fr auto auto auto, 5px, "rows")

  .wtn-image-frame
    overflow: hidden

  img
    width: 100%

  h3
    color: $c_blue

  span
    font-size: 14px
    color: $very_dark_grey



</style>
