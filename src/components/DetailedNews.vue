<script lang="ts" setup>
import type { NewsDetailed } from '@/models/news'

defineProps<{
  news: NewsDetailed
}>()
</script>

<template lang="pug">
div.news-detail
    h1.news-detail__title {{ news.title }}
    p.news-detail__author Автор: {{ news.author.name }}
    p.news-detail__date Дата: {{ news.date }}
    div.news-detail__tags Теги:
        span.news-detail__tag(v-for="tag in news.tags" :key="tag.id") {{ tag.name }}
    div.news-detail__categories Катеогрия:
        span.news-detail__category(v-for="category in news.categories" :key="category.id") {{ category.name }}
    div.news-detail__body {{ news.content }}
</template>

<style lang="scss" scoped>
.news-detail {
  &__content {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  &__title {
    font-size: 2em;
    margin-bottom: 10px;
  }

  &__author,
  &__date,
  &__tags,
  &__categories {
    margin: 10px 0;
  }

  &__tag,
  &__category {
    display: inline-block;
    background-color: map-get($colors, gray);
    padding: 5px 10px;
    margin: 5px;
    border-radius: 4px;
  }

  &__body {
    margin-top: 20px;
  }
}
</style>
