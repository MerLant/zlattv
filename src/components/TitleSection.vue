<template lang="pug">
p(class="title-section")
    slot
</template>

<style lang="scss" scoped>
.title-section {
  font-family: $font-family;
  font-size: 100px;
  font-weight: 700;
  line-height: 90%;
  color: map-get($colors, black);

  @media (max-width: #{map-get($breakpoints, md)}px) {
    font-size: 40px;
    line-height: 100%;
  }
}
</style>
