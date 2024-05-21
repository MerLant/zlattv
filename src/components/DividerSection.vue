<template lang="pug">
.divider-section
  .divider-section__background
</template>

<style lang="scss" scoped>
.divider-section {
  padding: 0 AdaptiveClamp(24, 200);
  width: 100%;
  display: flex;
  justify-content: center;

  &__background {
    height: 4px;
    width: 100%;
    background: map-get($colors, black);
  }
}
</style>
