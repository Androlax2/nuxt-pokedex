<template>
  <div :style="cssProps" class="pokemon-card">
    <div class="pokemon-card__header">
      <p class="pokemon-card__id">#{{ id }}</p>
      <img :alt="name" :src="image" class="pokemon-card__image" />
    </div>
    <div class="pokemon-card__bottom">
      <p class="pokemon-card__name">{{ name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { PokemonTypes } from '~/enums/PokemonTypes'
import { getPokemonColorByType } from '~/utils'

@Component
export default class PokemonCard extends Vue {
  @Prop({ required: true, type: Number }) readonly id!: string
  @Prop({ required: true, type: String }) readonly name!: string
  @Prop({ required: true, type: String }) readonly image!: string
  @Prop({ required: true, type: Array }) readonly types!: PokemonTypes[]

  /**
   * Get the CSS props for the component.
   */
  get cssProps(): string {
    return `--pokemon-color: ${this.color};`
  }

  /**
   * Get the pokemon color based on the first type.
   */
  get color(): string {
    return getPokemonColorByType(this.types[0])
  }
}
</script>

<style lang="scss" scoped>
.pokemon-card {
  --pokemon-card-border-radius: 0.6em;
  --pokemon-card-gap-between-items: 0.2em;

  width: 100%;
  overflow: hidden;
  background-color: #fff;
  user-select: none;
}

// =============================================
// Header
// =============================================

.pokemon-card__header {
  display: flex;
  flex-direction: column;
  border: 0.1em solid var(--pokemon-color);
  border-bottom: none;
  row-gap: var(--pokemon-card-gap-between-items);
  border-top-left-radius: var(--pokemon-card-border-radius);
  border-top-right-radius: var(--pokemon-card-border-radius);
}

// Id
// ================================

.pokemon-card__id {
  display: flex;
  align-items: center;
  font-size: 0.5em;
  color: var(--pokemon-color);
  text-align: right;
  padding-top: 0.5em;
  padding-right: 0.75em;
  place-self: flex-end;
}

// Image
// ================================

.pokemon-card__image {
  width: 4.375em;
  text-align: center;
  pointer-events: none;
  place-self: center;
}

// =============================================
// Bottom
// =============================================

.pokemon-card__bottom {
  font-size: 0.625em;
  color: var(--color-neutral-min);
  text-align: center;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  background-color: var(--pokemon-color);
  border-bottom-left-radius: var(--pokemon-card-border-radius);
  border-bottom-right-radius: var(--pokemon-card-border-radius);
}
</style>
