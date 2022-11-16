<template>
  <div>
    <Header />
    <PokemonSearch />
    <PokemonCardsContainer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="scss" scoped>
div > * + * {
  margin-top: clamp(0.7rem, 2vw, 1rem);
}
</style>
