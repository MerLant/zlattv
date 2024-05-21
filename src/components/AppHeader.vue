<script setup lang="ts">
import { BaseButton, TextLink, SocialLinks } from '@/components/'
import { Color } from '@/models'
import { IconLogo, IconSearch, IconVerticalArrow, IconPush, IconBurger } from '@/assets/images'
</script>

<template lang="pug">
header.header-desktop
  .header-desktop__top
    BaseButton(:type="'action'" :color="Color.Red") Предложить новость
    router-link(to="/")
      IconLogo(type="colored")
    .header-desktop__utility
      TextLink(:type="'link'" href="tel:83513651711" :color="Color.Black") 8 (3513) 65-17-11
      IconSearch
  .header-desktop__bottom
    nav.header-desktop__nav
      TextLink(:type="'navigate'" href="/news" :color="Color.Black" class="header-desktop__nav-item") Новости
      TextLink(:type="'action'" :color="Color.Black" class="header-desktop__nav-item") Телепроекты
      TextLink(:type="'action'" :color="Color.Black" class="header-desktop__nav-item") Реклама
      TextLink(:type="'action'" :color="Color.Black" class="header-desktop__nav-item")
        | Онлайн
        IconVerticalArrow
      TextLink(:type="'action'" :color="Color.Black" class="header-desktop__nav-item") Программа передач
      TextLink(:type="'action'" :color="Color.Black" class="header-desktop__nav-item")
        | Ещё
        IconVerticalArrow
    SocialLinks(:isVertical="false" class="header-desktop__social")
header.header-mobile
  .header-mobile__wrapper
    IconBurger(class="header-mobile__burger")
    router-link(to="/" class="header-mobile__logo-link")
      IconLogo(type="colored" class="header-mobile__logo")
    IconPush(class="header-mobile__push")
  .header-mobile__line
</template>

<style lang="scss" scoped>
.header-desktop {
  display: none;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 60px;
  padding: AdaptiveClamp(16, 52) AdaptiveClamp(22, 200) 0;

  @media (min-width: #{map-get($breakpoints, md)}px) {
    display: flex;
  }

  &__top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  &__utility {
    align-items: center;
    display: flex;
    gap: 46px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    border-bottom: 4px solid map-get($colors, black);
    padding-bottom: 24px;
    flex-wrap: wrap;
  }

  &__nav {
    display: flex;
    gap: AdaptiveClamp(16, 48);
    align-items: center;
  }

  &__nav-item {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__social {
    margin-left: auto;
  }
}

.header-mobile {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 22px 0;

  @media (min-width: #{map-get($breakpoints, md)}px) {
    display: none;
  }

  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  &__logo {
    height: 24px;
    width: auto;
  }

  &__logo-link {
    display: flex;
    align-items: center;
  }

  &__line {
    border-bottom: 2px solid map-get($colors, black);
  }
}
</style>
