<template>
  <button :title="title" @click="toggleFilter">
    <span>{{ text }}</span>
    <img
      alt="Arrow Down"
      height="24"
      src="~/assets/icons/arrow-down.svg"
      width="14"
    />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getModule } from 'vuex-module-decorators'
import { Prop, Watch } from 'vue-property-decorator'
import { SortFilters } from '~/enums/SortFilters'
import pokemons from '~/store/pokemons'
import { Debounce } from '~/utils/decorator'

@Component
export default class PokemonSort extends Vue {
  @Prop({ default: SortFilters.ID, type: String }) readonly filter!: SortFilters
  state_filter: SortFilters = this.filter
  pokemonsStore = getModule(pokemons, this.$store)

  /**
   * Is the filter in A-Z mode.
   */
  get isAZ(): boolean {
    return this.state_filter === SortFilters.AZ
  }

  /**
   * Get the title for the button.
   */
  get title(): string {
    return this.isAZ ? 'Sort by name (A-Z)' : 'Sort by ID'
  }

  /**
   * Get the text for the button.
   */
  get text(): string {
    return this.isAZ ? 'AZ' : '#'
  }

  /**
   * Toggle the filter.
   */
  toggleFilter(): void {
    this.state_filter = this.isAZ ? SortFilters.ID : SortFilters.AZ
  }

  /**
   * Sort the pokemon list.
   */
  @Watch('state_filter')
  @Debounce(25)
  sortPokemon(): void {
    this.pokemonsStore.setSort(this.state_filter)
  }
}
</script>

<style lang="scss" scoped>
button {
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
}

span {
  width: 1ch;
  font-size: 0.5rem;
  color: var(--color-dark-gray);
  font-weight: 500;
  line-height: 1;
}
</style>
