<script setup lang="ts">
import { type Button, Color, getColorName, type ButtonProps } from '@/models'
import { computed } from 'vue'

const props = defineProps<ButtonProps>()

const buttonClass = computed(() => {
  return props.color ? 'color-' + getColorName(props.color) : ''
})
</script>

<template lang="pug">
template(v-if="href && type !== 'action'")
    router-link(v-if="type === 'navigate'" :to="href" v-bind="$attrs" class="link")
        button(:class="['button', buttonClass]")
            slot
    a(v-else-if="type === 'link'" :href="href" v-bind="$attrs" class="link" target="_blank")
        button(:class="['button', buttonClass]")
            slot
template(v-else)
    button(:class="['button', buttonClass]" v-bind="$attrs")
        slot
</template>

<style scoped lang="scss">
@each $color-name, $color-value in $colors {
  .color-#{'' + $color-name} {
    color: $color-value;
    border-color: $color-value;
  }
}

.link {
  text-decoration: none;
}

.button {
  background: none;
  border-radius: 56px;
  width: 100%;
  padding: 16px 30px;
  border: 2px solid;
  text-decoration: none;

  font-family: $font-family;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease-in-out;
  }

  @media (min-width: #{map-get($breakpoints, md)}px) {
    width: auto;
  }
}
</style>
