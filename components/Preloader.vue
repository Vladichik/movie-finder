<template>
  <div class="wtn-main-app-preloader">
    <div class="wtn-main-app-preloader-content">
      <div>
        <moon-loader :size="40" color="#0079f8"></moon-loader>
      </div>
    </div>
  </div>
</template>

<script>
import {MoonLoader} from "@saeris/vue-spinners";

export default {
  name: "Preloader",
  components: {
    MoonLoader
  }
}
</script>

<style lang="sass">
@import "../assets/styles/variables"

.wtn-main-app-preloader
  position: absolute
  background: white
  display: flex
  align-items: center
  justify-content: center
  z-index: 100
  top: 0
  bottom: 0
  left: 0
  right: 0


.wtn-main-app-preloader-content
  +setGridAuto(auto, 20px, "rows")
  justify-items: center
  color: $c_blue

</style>
