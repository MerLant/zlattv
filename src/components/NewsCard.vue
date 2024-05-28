<script setup lang="ts">
import {} from 'vue'
import type { NewsPreview } from '@/models/news'
import { IconHeroSwiperArrow } from '@/assets/images'

const props = defineProps<{ news?: NewsPreview; highlighted: Boolean }>()
</script>

<template lang="pug">
template(v-if="news && news.poster")
    router-link(:to="{ name: 'newsDetailed', params: { id: news.id } }" :class="{'highlighted': highlighted }").news-card
        .news-card__poster-wrapper
            img.news-card__poster(:src="news.poster" :alt="news.title")
        .news-card__content
            .news-card__info
                .news-card__categories
                    span.news-card__category(v-for="category in news.categories" :key="category.id") {{ category.name }}
                .news-card__date {{ new Date(news.date).toLocaleDateString() }}
            p.news-card__title {{ news.title }}
            p.news-card__paragraph {{ news.leadParagraph }}
        IconHeroSwiperArrow.news-card__arrow
template(v-else)
    .loading Загрузка...

</template>

<style lang="scss" scoped>
.news-card {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: #{map-get($breakpoints, md)}px) {
    width: 100%;
    gap: 35px;
  }

  &__poster-wrapper {
    overflow: hidden;
    width: 100%;
    height: auto;
    max-height: 300px;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      width: auto;
      height: AdaptiveClamp(200, 500);
      /* max-height: none; */
    }
  }

  &__poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      gap: 16px;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 66px;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      gap: 34px;
    }
  }

  &__categories {
    display: flex;
    gap: 8px;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      gap: 20px;
    }
  }

  &__category {
    font-family: $font-family;
    font-weight: 400;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 0.05em;
    color: map-get($colors, red);

    @media (min-width: #{map-get($breakpoints, md)}px) {
      font-size: 16px;
      line-height: 135%;
    }
  }

  &__title {
    font-family: $font-family;
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    color: map-get($colors, black);

    @media (min-width: #{map-get($breakpoints, md)}px) {
      font-size: 20px;
      line-height: 135%;
    }
  }

  &__date {
    font-family: $font-family;
    font-weight: 400;
    font-size: 12px;
    line-height: 133%;
    color: map-get($colors, light-gray);

    @media (min-width: #{map-get($breakpoints, md)}px) {
      line-height: 115%;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  }
  &__arrow {
    display: none;
    transform: rotate(135deg);
    @media (min-width: #{map-get($breakpoints, md)}px) {
      display: block;
    }
  }

  &__paragraph {
    display: none;
  }
}

.highlighted {
  &.news-card {
    background-color: map-get($colors, white);
    padding: 50px;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      flex-direction: row;
      /* justify-content: flex-end; */
      align-items: stretch;
    }

    .news-card__content {
      @media (min-width: #{map-get($breakpoints, md)}px) {
        flex-grow: 1;
        gap: 20px;
        justify-content: space-between;
        height: 100%;
      }
    }

    .news-card__arrow {
      @media (min-width: #{map-get($breakpoints, md)}px) {
        margin-top: auto;
      }
    }

    .news-card__paragraph {
      display: block;
    }
  }
}
.loading {
  text-align: center;
}
</style>
