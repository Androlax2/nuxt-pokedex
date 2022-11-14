<template>
  <div
    :class="{'focused': focused || search.length > 0}"
  >
    <input
      v-model="search"
      placeholder="Search ..."
      type="search"
      @blur="focused = false"
      @focus="focused = true"
    >
    <button
      v-if="search.length > 0"
      title="Clear the search"
      @click="clearSearch"
    >
      <img alt="Close" height="12" src="~/assets/icons/close.svg" width="12">
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';

@Component
export default class PokemonSearch extends Vue {
  search: string = '';
  focused: boolean = false;

  /**
   * Clear the search.
   */
  clearSearch(): void {
    this.search = '';
  }
}
</script>

<style lang="scss" scoped>

div {
  --input-height: 1.5rem;
  --input-padding: 0.5rem;
  --search-size: 0.65rem;

  display: flex;
  position: relative;
}

/*
|--------------------------------------------------------------------------
| Input
|--------------------------------------------------------------------------
|
|
|
*/

input {
  all: unset;
  width: 100%;
  height: var(--input-height);
  position: relative;
  text-align: center;
  border: 1.5px solid var(--color-light-gray);
  border-radius: 0.5rem;
  padding: 0 var(--input-padding);
  background: var(--color-neutral-min);
}
input,
input::placeholder {
  font-family: var(--font-family-base);
  font-size: 0.625rem;
  color: #666666;
  font-weight: 400;
  line-height: 1;
}
/* clears the 'X' from Internet Explorer */
input[type=search]::-ms-clear,
input[type=search]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}

/* clears the 'X' from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

// =============================================
// Search
// =============================================

div::after {
  content: '';
  display: block;
  width: var(--search-size);
  height: var(--search-size);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-image: url('~/assets/icons/search.svg');
  background-size: var(--search-size) var(--search-size);
  background-repeat: no-repeat;
  transform: translateX(calc(-100% - 1.5rem));
}

// =============================================
// Close
// =============================================

button {
  all: unset;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: var(--input-padding);
  bottom: 0;
  cursor: pointer;
  margin: auto;
}

/*
|--------------------------------------------------------------------------
| On Focus
|--------------------------------------------------------------------------
|
|
|
*/

div.focused {
  input {
    text-align: left;
    padding-right: calc(var(--input-padding) + var(--search-size));
    padding-left: calc(var(--input-padding) + var(--search-size) + 0.3rem);
  }

  &::after {
    right: unset;
    left: var(--input-padding);
    transform: none;
  }
}

</style>
