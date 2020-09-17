<template>
  <section class="wtn-home-page wtn-content">
    <div class="wtn-view-content">
      <div class="wtn-view-desc">
        <h1>{{ $t('main_ttl') }}</h1>
        <input type="text" v-model="searchString" :placeholder="$t('movie_ttl_ph')"/>
        <nuxt-link :class="['wtn-button-def wtn-search-btn', {'wtn-disabled' : !searchString.length}]" :to="`results?str=${searchString}`">{{ $t('find_movies') }}
        </nuxt-link>
      </div>
      <div class="wtn-main-image"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchString: ""
    }
  }
}
</script>

<style lang="sass">
@import "assets/styles/variables"
.wtn-home-page
  height: 100%

  h1
    color: white

.wtn-view-content
  height: 100%
  align-items: center
  +setGrid(1fr 1fr, 40px, null, null, "columns")

.wtn-view-desc
  justify-content: flex-end
  +setGridAuto(auto, 20px, "rows")

.wtn-main-image
  min-height: 600px
  background: url("../static/images/1.png") left no-repeat
  background-size: contain


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



