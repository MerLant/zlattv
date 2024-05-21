<script setup lang="ts">
import { TitleSection } from '@/components'

defineProps<{
  categoryId: number
}>()
</script>

<template lang="pug">
section(class="tv-premier")
    TitleSection Премьерные выпуски
</template>

<style lang="scss" scoped>
.tv-premier {
  /* УДАЛИТЬ */
  overflow: hidden;
  /* УДАЛИТЬ */
}
</style>
