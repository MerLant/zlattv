<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getNewsDetailed } from '@/api'
import { DetailedNews } from '@/components'
import type { NewsDetailed } from '@/models/news'

const route = useRoute()
const news = ref<NewsDetailed | null>(null)

onMounted(async () => {
  const newsId = Number(route.params.id)
  news.value = await getNewsDetailed(newsId)
})
</script>

<template lang="pug">
div.news
  div.news__content(v-if="news")
    DetailedNews(:news="news")
  div.news__not-found(v-else)
    p 404
</template>

<style lang="scss" scoped>
.news {
  &__not-found {
    text-align: center;
    color: map-get($colors, red);
  }
}
</style>
