<script setup lang="ts">
import { effect, ref, watchEffect } from 'vue'
import { Color } from '@/models'

const props = defineProps<{
  disable?: Boolean
}>()

const color = ref<Color>(Color.White)

watchEffect(() => {
  if (props.disable) {
    color.value = Color.LightGray
  } else {
    color.value = Color.Black
  }
})
</script>

<template>
  <svg
    :class="`${disable ? 'disable' : ''}`"
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.31065 7.77941L11.3759 17.1429H7.95964L0 7.84981L7.22003 0L10.6011 0L3.31065 7.77941Z"
      :fill="color"
    />
    <path d="M2.84803 6.75293L20 6.75293L20 9.4634L2.84803 9.4634L2.84803 6.75293Z" :fill="color" />
  </svg>
</template>

<style scoped lang="scss">
svg {
  cursor: pointer;
}

.disable {
  cursor: not-allowed;
}
</style>
