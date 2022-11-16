import { ApiPokemon, ApiPokemonList } from '~/store/models'
import { firstCharacterToUpperCase } from '~/utils'

/**
 * Base API Url for the Pokemon API.
 */
const baseApiUrl: string = 'https://pokeapi.co/api/v2'

/**
 * Fetch a list of pokemons.
 */
export async function fetchPokemons(): Promise<ApiPokemon[]> {
  const response = await fetch(`${baseApiUrl}/pokemon`)
  const { results } = (await response.json()) as ApiPokemonList

  const pokemons: ApiPokemon[] = []
  for (const pokemon of results) {
    const pokemonResponse = await fetch(pokemon.url)
    pokemons.push((await pokemonResponse.json()) as ApiPokemon)
  }

  // First letter in uppercase for `name` and `type name` properties.
  pokemons.forEach((pokemon) => {
    pokemon.name = firstCharacterToUpperCase(pokemon.name)
    pokemon.types.forEach((type) => {
      type.type.name = firstCharacterToUpperCase(type.type.name)
    })
  })

  return pokemons
}

/**
 * Fetch a pokemon with a given ID.
 */
export async function fetchPokemon(id: number): Promise<ApiPokemon> {
  const response = await fetch(`${baseApiUrl}/pokemon/${id}`);
  return (await response.json()) as ApiPokemon;
}
