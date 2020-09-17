<template>
  <div class="wtn-no-data-msg">
    <span>{{$t("no_results")}}</span>
  </div>
</template>

<script>
export default {
  name: "NoDataReceivedMessage"
}
</script>

<style lang="sass">
.wtn-no-data-msg
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  background: white
  display: flex
  align-items: center
  justify-content: center

</style>
