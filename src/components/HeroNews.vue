<script setup lang="ts">
import { getNewsList } from '@/api'
import { ref } from 'vue'
import { BaseButton } from '@/components'
import { Color, type PreviewNewsProps } from '@/models'

defineProps<PreviewNewsProps>()
</script>

<template lang="pug">
.hero-news
    .hero-news__content
        .hero-news__text
            .hero-news__categories(v-for="category in news.categories")
                span.hero-news__category(:id="category.id") {{ category.name }}
            h2.hero-news__title {{ news.title }}
        BaseButton(:type="'navigate'" :href="`/news/${news.id}`" :color="Color.Black" class="hero-news__button-desktop") Читать
    .hero-news__image-wrapper
        img.hero-news__image(:src="news.poster" alt="news.title")
    BaseButton(:type="'navigate'" :href="`/news/${news.id}`" :color="Color.Black" class="hero-news__button-mobile") Читать

</template>

<style lang="scss">
.hero-news {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: #{map-get($breakpoints, md)}px) {
    flex-direction: column-reverse;
  }

  @media (min-width: #{map-get($breakpoints, lg)}px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    column-gap: 50px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      gap: 60px;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      gap: 5px;
    }
  }

  &__categories {
    display: flex;
    gap: 10px;
  }

  &__category {
    font-family: $font-family;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: map-get($colors, red);

    @media (min-width: #{map-get($breakpoints, md)}px) {
      line-height: 135%;
    }
  }

  &__title {
    font-family: $font-family;
    font-weight: 500;
    font-size: 22px;
    line-height: 127%;
    color: map-get($colors, black);

    @media (min-width: #{map-get($breakpoints, md)}px) {
      font-weight: 700;
      font-size: 52px;
      line-height: 125%;
    }
  }

  &__image-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-height: 200px;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      width: auto;
      width: 50%;
      height: AdaptiveClamp(200, 500);
      max-height: none;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__button-mobile {
    @media (min-width: #{map-get($breakpoints, md)}px) {
      display: none;
    }
  }

  &__button-desktop {
    display: none;
    @media (min-width: #{map-get($breakpoints, md)}px) {
      display: flex;
    }
  }
}
</style>
