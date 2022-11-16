<template>
  <div class="pokemon-cards-container">
    <div v-for="pokemon in pokemons" :key="pokemon.id">
      <keep-alive>
        <PokemonCard
          :id="pokemon.id"
          :image="pokemon.sprites.other['official-artwork'].front_default"
          :name="pokemon.name"
          :types="pokemon.types.map((type) => type.type.name)"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getModule } from 'vuex-module-decorators'
import pokemons from '~/store/pokemons'

@Component
export default class PokemonCardsContainer extends Vue {
  pokemonsStore = getModule(pokemons, this.$store)

  get pokemons() {
    return this.pokemonsStore.filteredPokemonsList
  }

  created() {
    this.pokemonsStore.loadPokemons()
  }
}
</script>

<style lang="scss" scoped>
.pokemon-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(6.25em, 1fr));
  gap: clamp(0.7rem, 2vw, 1rem) clamp(0.7rem, 2vw, 1rem);
}
</style>
