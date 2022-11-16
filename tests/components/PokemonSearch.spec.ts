import { afterEach, beforeEach, describe, expect, it } from '@jest/globals'
import { shallowMount, Wrapper } from '@vue/test-utils'
import PokemonSearch from '~/components/PokemonSearch.vue'

let pokemonSearch: Wrapper<PokemonSearch>

beforeEach(() => {
  pokemonSearch = shallowMount(PokemonSearch)
})

afterEach(() => {
  pokemonSearch.destroy()
})

describe('Layout', () => {
  it('has a search input', () => {
    const $input = pokemonSearch.find('input')
    expect($input.exists()).toBe(true)
    expect($input.attributes('placeholder')).toBe('Search ...')
  })

  it('has a close button when search input is not empty', async () => {
    const $input = pokemonSearch.find('input')
    await $input.setValue('pokemon')
    const $closeButton = pokemonSearch.find('button')
    expect($closeButton.exists()).toBe(true)
  })

  it('does not have a close button when search input is empty', async () => {
    const $input = pokemonSearch.find('input')
    await $input.setValue('pokemon')
    expect(pokemonSearch.find('button').exists()).toBe(true)
    await $input.setValue('')
    expect(pokemonSearch.find('button').exists()).toBe(false)
  })

  it('should have focused class when search is not empty', async () => {
    const $input = pokemonSearch.find('input')
    await $input.setValue('pokemon')
    expect(pokemonSearch.classes()).toContain('focused')
  })
})

describe('Events', () => {
  it('clear the search on click on close button', async () => {
    await pokemonSearch.find('input').setValue('pokemon')
    expect(pokemonSearch.vm.$data.search).toBe('pokemon')
    const $closeButton = pokemonSearch.find('button')
    await $closeButton.trigger('click')
    expect(pokemonSearch.vm.$data.search).toBe('')
  })

  it('should remove the focused class on close button click', async () => {
    await pokemonSearch.find('input').setValue('pokemon')
    const $closeButton = pokemonSearch.find('button')
    await $closeButton.trigger('click')
    expect(pokemonSearch.classes()).not.toContain('focused')
  })
})
