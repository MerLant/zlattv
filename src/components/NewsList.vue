<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getNewsList } from '@/api'
import type { NewsPreview } from '@/models/news'
import { NewsCard } from '@/components'

const newsList = ref<NewsPreview[]>([])

onMounted(async () => {
  const { news } = await getNewsList()
  newsList.value = news
})
</script>

<template lang="pug">
section.news-list
  div.news-list__container
    NewsCard(v-for="news in newsList" :key="news.id" :news="news")
</template>

<style lang="scss" scoped>
.news-list {
  &__container {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 44px;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 50px;
      row-gap: 80px;
    }

    @media (min-width: #{map-get($breakpoints, lg)}px) {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 50px;
      row-gap: 80px;
    }
  }
}
</style>
