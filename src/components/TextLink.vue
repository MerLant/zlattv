<script setup lang="ts">
import { type ButtonProps, getColorName } from '@/models'
import { computed } from 'vue'

const props = defineProps<ButtonProps>()

const linkClass = computed(() => {
  return props.color ? 'color-' + getColorName(props.color) : ''
})
</script>

<template lang="pug">
template(v-if="href && type !== 'action'")
    router-link(v-if="type === 'navigate'", :to="href", :class="['link', linkClass]")
        slot
    a(v-else-if="type === 'link'", :href="href", :class="['link', linkClass]" target="_blank")
        slot
template(v-else)
    a(:class="['link', linkClass]", href="#")
        slot
</template>

<style scoped lang="scss">
@each $color-name, $color-value in $colors {
  .color-#{'' + $color-name} {
    color: $color-value;
  }
}

.link {
  cursor: pointer;
  background: none;
  border: none;

  font-family: $font-family;
  font-weight: 700;
  font-size: 20px;
  line-height: 135%;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: #{map-get($breakpoints, md)}px) {
  }
}
</style>
