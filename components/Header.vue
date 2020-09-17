<template>
  <header>
    <nuxt-link to="/"></nuxt-link>
    <language-switcher></language-switcher>
  </header>
</template>

<script>
import LanguageSwitcher from "~/components/widgets/LanguageSwitcher";
export default {
  name: "Header",
  components: {
    LanguageSwitcher
  }
}
</script>

<style scoped lang="sass">
@import "../assets/styles/variables"
header
  padding: 0 20px
  height: 70px
  align-items: center
  justify-content: space-between
  +setGridAuto(auto, null, "columns")

  a
    width: 50px
    height: 50px
    background: url("../static/images/logo.png") center no-repeat
    background-size: contain
</style>
