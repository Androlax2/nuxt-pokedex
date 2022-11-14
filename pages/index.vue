<template>
  <div>
    <Header />
    <PokemonSearch />
    <PokemonCard
      id="001"
      :types="['Grass', 'Poison']"
      image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      name="Bulbasaur"
    />
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
