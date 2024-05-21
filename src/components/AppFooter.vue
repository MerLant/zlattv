<script setup lang="ts">
import { DividerBlock, SocialLinks, TextLink } from '@/components'
import { IconXpage } from '@/assets/images'

defineProps<{
  categoryId: number
}>()
</script>

<template lang="pug">
footer.footer
    SocialLinks(:isVertical="true")
    DividerBlock
    .footer__info
        p.footer__copyright
            | © 2021 &laquo;Златоустовское телевидение&raquo;
            br
            | Политика конфиденциальности
        TextLink(:type="'link'" href="https://www.xpage.ru/")
            IconXpage.footer__developer
</template>

<style lang="scss" scoped>
.footer {
  padding: AdaptiveClamp(32, 60) AdaptiveClamp(24, 200) AdaptiveClamp(30, 50);
  display: flex;
  flex-direction: column;
  background-color: map-get($colors, white);
  align-items: center;
  gap: 20px;

  @media (min-width: #{map-get($breakpoints, md)}px) {
    align-items: normal;
    gap: 50px;
  }

  &__info {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__copyright {
    font-size: 14px;
    line-height: 170%;
    font-weight: 400;
    font-family: $font-family;
    color: map-get($colors, black);
    text-align: center;

    @media (min-width: #{map-get($breakpoints, md)}px) {
      text-align: left;
    }
  }
}
</style>
