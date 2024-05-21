<script setup lang="ts">
import { computed } from 'vue'
import { IconOK, IconInstagram, IconVK, IconYoutube, IconFacebook } from '@/assets/images'

const props = defineProps<{
  isVertical?: boolean
}>()
const containerClass = computed(() => {
  return `${props.isVertical ? 'social-icons--vertical' : 'social-icons--horizontal'}`
})
</script>

<template lang="pug">
div(class="social-icons" :class="containerClass")
  p.social-icons__title Подписывайтесь на нас:
  div.social-icons__list
    a.social-icons__item(href='https://www.youtube.com' target='_blank')
      IconYoutube.social-icons__icon
    a.social-icons__item(href='https://www.facebook.com' target='_blank')
      IconFacebook.social-icons__icon
    a.social-icons__item(href='https://vk.com' target='_blank')
      IconVK.social-icons__icon
    a.social-icons__item(href='https://ok.ru' target='_blank')
      IconOK.social-icons__icon
    a.social-icons__item(href='https://www.instagram.com' target='_blank')
      IconInstagram.social-icons__icon
</template>

<style lang="scss">
.social-icons {
  &__list {
    display: flex;
    flex-direction: row;
  }

  &__icon {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &--horizontal {
    display: flex;
    align-items: center;
    gap: 48px;

    .social-icons {
      &__title {
        margin-right: 10px;
        font-family: $font-family;
        font-size: 20px;
        font-weight: 700;
        line-height: 135%;
        color: map-get($colors, black);
      }

      &__list {
        gap: 16px;
      }

      &__icon {
        height: 16px;
        width: auto;
      }
    }
  }

  &--vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    .social-icons {
      &__title {
        font-family: $font-family;
        font-size: 24px;
        font-weight: 400;
        line-height: 115%;
        color: map-get($colors, black);
      }

      &__list {
        gap: 20px;
      }

      &__icon {
        height: 24px;
        width: auto;
      }
    }
  }
}
</style>
