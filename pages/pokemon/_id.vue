<template>
  <h1>Yolo</h1>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {getModule} from 'vuex-module-decorators';
import pokemons from '~/store/pokemons';
import {fetchPokemon} from '~/store/pokemon-api';
import {ApiPokemon} from "~/store/models";

@Component
export default class PokemonPage extends Vue {
  readonly pokemonsStore = getModule(pokemons, this.$store);
  pokemon: ApiPokemon | null = null;

  /**
   * Get the ID of the pokemon.
   */
  get id() {
    return parseInt(this.$route.params.id);
  }

  async created() {
    try {
      this.pokemon = this.pokemonsStore.pokemonsList.find((pokemon) => pokemon.id === this.id) || await fetchPokemon(this.id);
    } catch (error) {
      this.$nuxt.error({statusCode: 404, message: 'Pokemon not found'});
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
