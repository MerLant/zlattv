<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { IconVerticalArrow } from '@/assets/images'
import type { DropdownItem } from '@/models'

const isOpen = ref(false)
const items = ref<DropdownItem[]>([
  { id: 1, label: 'Медицина' },
  { id: 2, label: 'Общество' },
  { id: 3, label: 'Коммуналка' },
  { id: 4, label: 'Политика' },
  { id: 5, label: 'Спорт' },
  { id: 6, label: 'Вектор развития' }
])

const selectedItem = ref<DropdownItem | null>(null)
const selectedLabel = ref('Выбрать рубрику')
const dropdownRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectItem = (item: DropdownItem) => {
  selectedItem.value = item
  selectedLabel.value = item.label
  isOpen.value = false
}

const closeCalendar = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeCalendar)
})

onUnmounted(() => {
  document.removeEventListener('click', closeCalendar)
})

// TODO: Отделить Input в отдельный компонент, чтобы можно было использовать в других местах
// TODO: Добавить возможность передавать в компонент список элементов через пропс
// TODO: Вывести меню в отдельный компонент, чтобы использовать в других местах
</script>

<template lang="pug">
div.dropdown
  button.dropdown__button(@click="toggleDropdown", ref="dropdownRef")
    | {{ selectedLabel }}
    IconVerticalArrow(:class="{'dropdown__arrow-icon': true, 'dropdown__arrow-icon--open': isOpen}")
  div.dropdown__menu(v-if="isOpen")
    ul.dropdown__list
      li.dropdown__item(v-for="item in items", :key="item.id", :class="{ 'dropdown__item--selected': item.id === selectedItem?.id }", @click="selectItem(item)")
        | {{ item.label }}
</template>

<style scoped lang="scss">
.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;

  &--disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &__button {
    width: 100%;
    height: 60px;
    padding: 18px 24px;
    border: 2px solid map-get($colors, black);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    background: none;

    font-family: $font-family;
    font-size: 16px;
    font-weight: 400;
    line-height: 135%;
    color: map-get($colors, black);
  }

  &__arrow-icon {
    margin-left: auto;
    transition: transform 0.2s;

    &--open {
      transform: rotate(-180deg);
    }
  }

  &__menu {
    position: absolute;
    padding: 20px 24px;
    top: 100%;
    left: 0;
    width: 100%;
    border: 2px solid map-get($colors, black);
    background-color: map-get($colors, white);
    z-index: 1000;
    max-height: 200px;
    overflow-y: auto;
    transform: translateY(-2px);
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {
    cursor: pointer;

    font-family: $font-family;
    font-size: 16px;
    font-weight: 500;
    line-height: 135%;
    color: map-get($colors, black);

    &--selected {
      color: map-get($colors, red);
    }

    &--disabled {
      pointer-events: none;
      color: map-get($colors, light-gray);
    }

    &:hover {
      color: map-get($colors, red);
    }
  }
}
</style>
