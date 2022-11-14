import {describe, expect, it} from '@jest/globals';
import {shallowMount, Wrapper} from "@vue/test-utils";
import PokemonSort from "~/components/PokemonSort.vue";

const expectationsForAzSort = (wrapper: Wrapper<PokemonSort>) => {
  expect(wrapper.text()).toContain('AZ');
  expect(wrapper.find('button').attributes('title')).toContain('Sort by name (A-Z)');
}
const expectationsForIdSort = (wrapper: Wrapper<PokemonSort>) => {
  expect(wrapper.text()).toContain('#');
  expect(wrapper.find('button').attributes('title')).toContain('Sort by ID');
}

describe('Layout', () => {

  it('render the sort by AZ sorting', () => {
    const pokemonSort = shallowMount(PokemonSort, {
      propsData: {
        filter: 'AZ',
      }
    });

    expectationsForAzSort(pokemonSort);
  });

  it('render the sort by ID sorting', () => {
    const pokemonSort = shallowMount(PokemonSort, {
      propsData: {
        filter: 'ID',
      }
    });

    expectationsForIdSort(pokemonSort);
  });

});

describe('Events', () => {

  it('can toggle the sorting from AZ to ID', async () => {
    const pokemonSort = shallowMount(PokemonSort, {
      propsData: {
        filter: 'AZ',
      }
    });

    await pokemonSort.find('button').trigger('click');
    expectationsForIdSort(pokemonSort);
  });

  it('can toggle the sorting from ID to AZ', async () => {
    const pokemonSort = shallowMount(PokemonSort, {
      propsData: {
        filter: 'ID',
      }
    });

    await pokemonSort.find('button').trigger('click');
    expectationsForAzSort(pokemonSort);
  });

});
