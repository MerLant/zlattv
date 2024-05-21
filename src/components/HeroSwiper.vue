<script setup lang="ts">
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'

import type { NewsList } from '@/models/news'
import { computed, ref } from 'vue'
import { IconHeroSwiperArrow } from '@/assets/images'

const props = defineProps<{
  newsList: NewsList
}>()

SwiperCore.use([Autoplay, Pagination])

const swiperInstance = ref<SwiperCore | null>(null)
const isBeginning = ref(true)
const isEnd = ref(false)

function onSwiper(swiper: SwiperCore) {
  swiperInstance.value = swiper
  swiper.on('slideChange', () => {
    isBeginning.value = swiper.isBeginning
    isEnd.value = swiper.isEnd
  })
}

const swiperNextSlide = () => {
  if (!swiperInstance.value) return
  if (swiperInstance.value.animating) return
  swiperInstance.value.slideNext()
}

const swiperPrevSlide = () => {
  if (!swiperInstance.value) return
  if (swiperInstance.value.animating) return
  swiperInstance.value.slidePrev()
}
</script>

<template lang="pug">
template(v-if="newsList.length")
  div(class="slider")
    IconHeroSwiperArrow(:disable="isBeginning" class="slider__button slider__button--prev" @click="swiperPrevSlide")
    Swiper(
      class="slider__container",
      :slides-per-view="1",
      :pagination="{ clickable: true }",
      @swiper="onSwiper"
      :autoplay="{ delay: 5000, disableOnInteraction: true }"
    )
      SwiperSlide(v-for="news in newsList.slice(0, 6)" :key="news.id" class="slider__slide")
        div(class="slider__slide-content")
          .slider__slide-image-container
            img(class="slider__slide-image" :src="news.poster" :alt="news.title")
          div(class="slider__slide-text")
            p.slider__slide-text-category {{ news.categories[0].name }}
            p.slider__slide-text-title {{ news.title }}
    IconHeroSwiperArrow(:disable="isEnd" class="slider__button slider__button--next" @click="swiperNextSlide" style="transform: rotate(180deg)")
</template>

<style lang="scss" scoped>
.slider {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: map-get($colors, white);
  width: 100%;
  gap: 30px;
  padding: 12px 24px;

  @media (min-width: #{map-get($breakpoints, md)}px) {
    padding: 0;
    width: AdaptiveClamp(400, 500);
    border-radius: 100px 0 0 100px;
  }

  &__container {
    height: 100%;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      border-radius: 100px 0 0 100px;
    }
  }

  &__slide {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
    }

    &-content {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 12px;

      @media (min-width: #{map-get($breakpoints, md)}px) {
        gap: 20px;
        flex-direction: row;
      }
    }

    &-image-container {
      z-index: 2;
      overflow: hidden;
      padding: 4px;
      background-color: map-get($colors, black);
      width: 68px;
      height: 68px;
      border-radius: 50%;

      @media (min-width: #{map-get($breakpoints, md)}px) {
        width: 140px;
        height: 140px;
        padding: 8px;
        flex-direction: row;
      }
    }

    &-image {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      @media (min-width: #{map-get($breakpoints, md)}px) {
        gap: 10px;
        max-width: 200px;
      }

      text-align: center;
      font-family: $font-family;

      @media (min-width: #{map-get($breakpoints, md)}px) {
        align-items: flex-start;
        text-align: left;
      }

      &-category {
        font-weight: 300;
        font-size: 12px;
        line-height: 133%;
        color: map-get($colors, light-gray);

        @media (min-width: #{map-get($breakpoints, md)}px) {
          font-weight: 400;
          line-height: 115%;
        }
      }

      &-title {
        font-weight: 400;
        font-size: 12px;
        line-height: 133%;
        color: map-get($colors, black);

        @media (min-width: #{map-get($breakpoints, md)}px) {
          font-weight: 400;
          font-size: 16px;
          line-height: 135%;
        }
      }
    }
  }

  &__button {
    flex-shrink: 0;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      display: none;
    }
  }
}
</style>

<style lang="scss">
.slider {
  .swiper-pagination {
    display: none;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      display: block;
      right: 50px;
      bottom: AdaptiveClamp(5, 42);
      left: auto;
      width: auto;
    }

    &-bullet {
      width: 4px;
      height: 4px;
      background-color: map-get($colors, medium-gray);
      position: relative;

      &-active {
        background-color: map-get($colors, black);

        &::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border: 0.5px solid map-get($colors, medium-gray);
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
