import {
  Module,
  Mutation,
  MutationAction,
  VuexModule,
} from 'vuex-module-decorators'
import { ApiPokemon } from '~/store/models'
import { fetchPokemons } from '~/store/pokemon-api'
import { SortFilters } from '~/enums/SortFilters'

@Module({
  namespaced: true,
  name: 'pokemons',
  stateFactory: true,
})
export default class PokemonsModule extends VuexModule {
  pokemons: ApiPokemon[] = []
  sort: SortFilters = SortFilters.ID
  search: string = ''

  /**
   * Get the initial pokemons list.
   */
  get pokemonsList() {
    return this.pokemons
  }

  /**
   * Get the filtered pokemons list.
   */
  get filteredPokemonsList() {
    return this.pokemonsList
      .filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.search.toLowerCase())
      )
      .sort((a, b) => {
        switch (this.sort) {
          case SortFilters.AZ:
            return a.name.localeCompare(b.name)
          case SortFilters.ID:
            return a.id - b.id
          default:
            return 0
        }
      })
  }

  @MutationAction
  async loadPokemons() {
    const pokemons = await fetchPokemons()
    return { pokemons }
  }

  @Mutation
  setSort(sort: SortFilters) {
    this.sort = sort
  }

  @Mutation
  setSearch(search: string) {
    this.search = search
  }
}
