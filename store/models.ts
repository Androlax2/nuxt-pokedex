export interface ApiPokemonResult {
  name: string
  url: string
}

export interface ApiPokemonList {
  count: number
  next: string
  previous: string
  results: ApiPokemonResult[]
}

export interface ApiPokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface ApiPokemon {
  id: number
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: ApiPokemonType[]
}
