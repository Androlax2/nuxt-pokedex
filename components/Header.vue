<template>
  <div class="header">
    <div class="logo">
      <img
        alt="Pokéball Logo"
        height="36"
        src="~/assets/images/logo.png"
        width="36"
      />
      <p>Pokédex</p>
    </div>
    <PokemonSort />
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.logo {
  display: flex;
  align-items: center;
  user-select: none;
  gap: clamp(0.25rem, 3vw, 1rem);
}
.logo img {
  width: clamp(25px, 8vw, 36px);
  user-select: none;
  pointer-events: none;
}
.logo > p {
  font-size: clamp(0.9rem, 5vw, 1.5rem);
  color: var(--color-dark-gray);
  font-weight: 700;
  line-height: 1;
}
</style>
