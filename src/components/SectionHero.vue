<script setup lang="ts">
import { HeroSwiper, HeroNews, DividerSection } from '@/components'
import { getNewsList } from '@/api'
import { ref, onMounted } from 'vue'
import type { NewsPreview } from '@/models/news'

const newsList = ref<NewsPreview[]>([])

onMounted(async () => {
  const result = await getNewsList()
  newsList.value = result.news
})
</script>

<template lang="pug">
section.hero
    template(v-if="newsList.length > 0")
        HeroNews(:news="newsList[0]" class="hero__news")
        HeroSwiper( :newsList="newsList" class="hero__slider")
DividerSection
</template>

<style lang="scss">
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin: AdaptiveClamp(34, 120) 0;

  &__news {
    padding: 0 AdaptiveClamp(24, 200);

    padding-bottom: 50px;

    @media (min-width: #{map-get($breakpoints, lg)}px) {
      padding-bottom: 0;
    }
  }

  &__slider {
    @media (min-width: #{map-get($breakpoints, lg)}px) {
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
