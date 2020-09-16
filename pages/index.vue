<template>
  <section class="wtn-home-page wtn-content">
    <div class="wtn-view-content">
      <div class="wtn-view-desc">
        <h1>{{ $t('main_ttl') }}</h1>
        <nuxt-link class="wtn-button-def wtn-search-btn" to="search">{{$t('find_movies')}}</nuxt-link>
      </div>
      <div class="wtn-random-images" :style="setViewImage()"></div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    setViewImage() {
      const imageID = Math.floor(Math.random() * 3) + 1;
      return `background: url("images/${imageID}.png") no-repeat; background-size: contain`;
    }
  }
}
</script>

<style lang="sass">
@import "assets/styles/variables"
.wtn-home-page
  height: 100%

  h1
    color: $c_brown

.wtn-view-content
  height: 100%
  align-items: center
  +setGrid(auto auto, 20px, null, null, "columns")

.wtn-view-desc
  justify-content: flex-end
  +setGridAuto(auto, 20px, "rows")

.wtn-random-images
  background-position: left
  min-height: 600px


@media all and (max-width: $smartphone_media)
  .wtn-view-desc
    justify-content: center
  .wtn-view-content
    align-content: center
    grid-template-columns: auto
    grid-template-rows: auto auto
    grid-row-gap: 30px

  .wtn-random-images
    background-position: center !important
    min-height: 500px
</style>



