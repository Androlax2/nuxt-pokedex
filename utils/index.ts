import {PokemonTypes} from '~/enums/PokemonTypes';

/**
 * Get the color of the associated pokemon type.
 *
 * @param type
 */
export const getPokemonColorByType = (type: string) => {
  switch (type) {
    case PokemonTypes.Normal:
      return '#AAA67F';
    case PokemonTypes.Fighting:
      return '#C12239';
    case PokemonTypes.Flying:
      return '#A891EC';
    case PokemonTypes.Ground:
      return '#DEC16B';
    case PokemonTypes.Poison:
      return '#A43E9E';
    case PokemonTypes.Rock:
      return '#B69E31';
    case PokemonTypes.Bug:
      return '#A7B723';
    case PokemonTypes.Ghost:
      return '#70559B';
    case PokemonTypes.Steel:
      return '#B7B9D0';
    case PokemonTypes.Fire:
      return '#F57D31';
    case PokemonTypes.Water:
      return '#6493EB';
    case PokemonTypes.Grass:
      return '#74CB48';
    case PokemonTypes.Electric:
      return '#F9CF30';
    case PokemonTypes.Psychic:
      return '#FB5584';
    case PokemonTypes.Ice:
      return '#9AD6DF';
    case PokemonTypes.Dragon:
      return '#7038F8';
    case PokemonTypes.Dark:
      return '#75574C';
    case PokemonTypes.Fairy:
      return '#E69EAC';
    default:
      return '#000';
  }
};
