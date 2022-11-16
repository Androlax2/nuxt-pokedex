import { afterEach, beforeEach, describe, expect, it } from '@jest/globals'
import { shallowMount, Wrapper } from '@vue/test-utils'
import PokemonCard from '~/components/PokemonCard.vue'
import { PokemonTypes } from '~/enums/PokemonTypes'

let pokemonCard: Wrapper<PokemonCard>

beforeEach(() => {
  pokemonCard = shallowMount(PokemonCard, {
    propsData: {
      id: 1,
      name: 'Bulbasaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      types: ['Grass', 'Poison'] as PokemonTypes[],
    },
  })
})

afterEach(() => {
  pokemonCard.destroy()
})

describe('Layout', () => {
  it('render the pokemon ID', () => {
    expect(pokemonCard.text()).toContain('#001')
  })

  it('render the pokemon image', () => {
    expect(pokemonCard.find('img').attributes('src')).toContain(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    )
  })

  it('render the correct alt for the pokemon image', () => {
    expect(pokemonCard.find('img').attributes('alt')).toContain('Bulbasaur')
  })

  it('render the pokemon name', () => {
    expect(pokemonCard.text()).toContain('Bulbasaur')
  })

  it('use the color of the first pokemon type', () => {
    expect(
      getComputedStyle(pokemonCard.element).getPropertyValue('--pokemon-color')
    ).toBe('#74CB48')
  })
})
