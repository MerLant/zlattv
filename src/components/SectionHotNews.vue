<script setup lang="ts">
import { BaseButton, NewsList, DividerSection, TitleSection } from '@/components/'
import { IconLogo } from '@/assets/images'
import { Color } from '@/models'
</script>

<template lang="pug">
section(class="hot-news")
  .hot-news__header
    TitleSection.hot-news__title Свежие новости
    BaseButton(:type="'navigate'" href="/news" :color="Color.Black" class="hot-news__button-desktop") Все новости
  NewsList
  BaseButton.hot-news__button-mobile(:type="'navigate'" href="/news" :color="Color.Black" class="") Все новости
  .hot-news__ad
    IconLogo(type="grey")
DividerSection
</template>

<style lang="scss" scoped>
.hot-news {
  margin: AdaptiveClamp(22, 82) AdaptiveClamp(24, 200) AdaptiveClamp(52, 100);
  display: flex;
  flex-direction: column;
  gap: 54px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__title {
    width: 50%;
  }

  &__ad {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 36px;
    width: 100%;
    height: AdaptiveClamp(276, 400);
    background-color: map-get($colors, black);
  }
}
</style>

<style lang="scss">
.hot-news {
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
}
</style>
