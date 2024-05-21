<script setup lang="ts">
import {
  BaseButton,
  NewsList,
  DividerSection,
  TitleSection,
  InputCalendar,
  DropdownMenu,
  NewsCard
} from '@/components/'
import { IconLogo } from '@/assets/images'
import { Color } from '@/models'
import type { NewsDetailed } from '@/models/news'
import { getNewsDetailed } from '@/api/news'
import { onMounted, ref } from 'vue'

const news = ref<NewsDetailed | null>()

onMounted(async () => {
  const newsResult = await getNewsDetailed(1)
  news.value = newsResult
})
</script>

<template lang="pug">
section(class="news")
    .news__header
        p.news__title Все новости
        p.news__crumb Главная \ Новости
    .news__setting
        InputCalendar
        DropdownMenu
    NewsList
    template(v-if="news")
        NewsCard(:news="news" :highlighted="true")
</template>

<style lang="scss" scoped>
.news {
  margin: AdaptiveClamp(20, 55) AdaptiveClamp(24, 200) AdaptiveClamp(52, 70);
  display: flex;
  flex-direction: column;
  gap: 54px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__title {
    font-family: $font-family;
    font-size: 70px;
    font-weight: 700;
    color: map-get($colors, black);
    line-height: 125%;
  }

  &__setting {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 50px;
    }

    @media (min-width: #{map-get($breakpoints, lg)}px) {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 50px;
    }
  }
}
</style>

<style lang="scss">
.news {
  &__button-desktop {
    display: none;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      display: flex;
    }
  }

  &__button-mobile {
    display: flex;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      display: none;
    }
  }

  &__crumb {
    font-family: $font-family;
    font-size: 16px;
    font-weight: 400;
    color: map-get($colors, light-grey);
    line-height: 135%;
  }
}
</style>
