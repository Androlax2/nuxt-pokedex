import { describe, expect, it, jest } from '@jest/globals'
import { fetchPokemon, fetchPokemons } from '~/store/pokemon-api'

describe('Pokemon API', () => {
  it('can fetch a list of pokemons', async () => {
    // @ts-ignore
    // eslint-disable-next-line require-await
    const makeFetchResponse = (value) => ({ json: async () => value })
    const mockFetch = jest
      .fn()
      .mockReturnValueOnce(
        makeFetchResponse({
          results: [
            {
              name: 'bulbasaur',
              url: 'https://pokeapi.co/api/v2/pokemon/1/',
            },
            {
              name: 'ivysaur',
              url: 'https://pokeapi.co/api/v2/pokemon/2/',
            },
          ],
        })
      )
      .mockReturnValueOnce(
        makeFetchResponse({
          sprites: {
            other: {
              'official-artwork': {
                front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
              },
            },
          },
        })
      )
      .mockReturnValueOnce(
        makeFetchResponse({
          sprites: {
            other: {
              'official-artwork': {
                front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
              },
            },
          },
        })
      )
    // @ts-ignore
    global.fetch = mockFetch

    const pokemons = await fetchPokemons()
    expect(pokemons).toEqual([
      {
        sprites: {
          other: {
            'official-artwork': {
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            },
          },
        },
      },
      {
        sprites: {
          other: {
            'official-artwork': {
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
            },
          },
        },
      },
    ])

    expect(mockFetch).toHaveBeenCalledTimes(3)
    expect(mockFetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon')
    expect(mockFetch).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/1/'
    )
    expect(mockFetch).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/2/'
    )
  })

  it('can fetch a pokemon with a given ID', async () => {
    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            id: 1,
            name: 'bulbasaur',
            height: 7,
            weight: 69,
            sprites: {
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            },
          }),
      })
    )

    const pokemon = await fetchPokemon(1)
    expect(pokemon).toEqual({
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      },
    })

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1')
  })
})
