<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { IconCalendar, IconRedArrow, IconVerticalArrow } from '@/assets/images'
import { MonthNames, Weekdays } from '@/models'

const today = new Date()
const selectedDate = ref<Date | null>(null)
const currentMonth = ref(today.getMonth())
const currentYear = ref(today.getFullYear())
const isCalendarOpen = ref(false)
const calendarRef = ref<HTMLElement | null>(null)

const getMonthName = (monthIndex: number) => {
  return Object.values(MonthNames)[monthIndex]
}

const getWeekdayName = (weekdayIndex: number) => {
  return Object.values(Weekdays)[weekdayIndex]
}

const daysInMonth = computed(() => {
  const days = []
  const date = new Date(currentYear.value, currentMonth.value, 1)
  const firstDayIndex = (date.getDay() + 6) % 7

  for (let i = 0; i < firstDayIndex; i++) {
    days.push({ date: null, index: i })
  }

  while (date.getMonth() === currentMonth.value) {
    days.push({ date: new Date(date) })
    date.setDate(date.getDate() + 1)
  }
  return days
})

const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value -= 1
  } else {
    currentMonth.value -= 1
  }
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value += 1
  } else {
    currentMonth.value += 1
  }
}

const isToday = (date: Date) => {
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

const isSelected = (date: Date) => {
  return (
    selectedDate.value &&
    date.getDate() === selectedDate.value.getDate() &&
    date.getMonth() === selectedDate.value.getMonth() &&
    date.getFullYear() === selectedDate.value.getFullYear()
  )
}

const selectDay = (date: Date) => {
  selectedDate.value = date
  toggleCalendar()
}

const toggleCalendar = () => {
  isCalendarOpen.value = !isCalendarOpen.value
}

const closeCalendar = (event: MouseEvent) => {
  if (calendarRef.value && !calendarRef.value.contains(event.target as Node)) {
    isCalendarOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeCalendar)
})

onUnmounted(() => {
  document.removeEventListener('click', closeCalendar)
})

const selectedDateFormatted = computed(() => {
  if (selectedDate.value) {
    const day = selectedDate.value.getDate().toString().padStart(2, '0')
    const month = (selectedDate.value.getMonth() + 1).toString().padStart(2, '0')
    const year = selectedDate.value.getFullYear()
    return `${day}/${month}/${year}`
  }
  return 'Выберите дату'
})

// TODO: Вывести календарь в отдельный компонент
// TODO: Добавить передовать выбранную дату в компонент через пропс
</script>

<template lang="pug">
div.calendar(ref="calendarRef")
  div.calendar__input(@click="toggleCalendar")
    IconCalendar
    span {{ selectedDateFormatted }}
    IconVerticalArrow(:class="{'calendar__arrow-icon': true, 'open': isCalendarOpen}")
  div.calendar__popup(v-if="isCalendarOpen")
    div.calendar__header
      button.calendar__nav-button(@click="prevMonth")
        IconRedArrow
      span.calendar__month-year {{ getMonthName(currentMonth.value) }}
      button.calendar__nav-button(@click="nextMonth")
        IconRedArrow(style="transform: rotate(180deg)")
    div.calendar__weekdays
      div.calendar__weekday(v-for="day in Object.values(Weekdays)", :key="day") {{ day }}
    div.calendar__days
      div.calendar__day(v-for="day in daysInMonth", :key="day.date ? day.date : day.index", @click="day.date && selectDay(day.date)")
        div.calendar__day-text(:class="{ 'calendar__day-text--today': day.date && isToday(day.date), 'calendar__day-text--selected': day.date && isSelected(day.date), 'calendar__day-text--empty': !day.date }")
          | {{ day.date ? day.date.getDate() : '' }}
</template>

<style lang="scss" scoped>
.calendar {
  position: relative;

  &__input {
    display: flex;
    align-items: center;
    border: 2px solid map-get($colors, black);
    padding: 18px 24px;
    cursor: pointer;
    gap: 20px;
    height: 60px;
  }

  &__arrow-icon {
    margin-left: auto;
    transition: transform 0.2s;

    &.open {
      transform: rotate(-180deg);
    }
  }

  &__popup {
    width: 100%;
    border: 2px solid map-get($colors, black);
    padding: 20px;
    background-color: white;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    transform: translateY(-2px);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }

  &__calendar__month-year {
    font-family: $font-family;
    font-weight: 700;
    font-family: 14px;
    line-height: 143%;
    text-align: center;
  }

  &__weekdays {
    border-bottom: 2px solid map-get($colors, black);
    padding: 4px 0;
    margin-bottom: 8px;

    font-family: $font-family;
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    text-align: center;
  }

  &__days {
    row-gap: 14px;
  }

  &__weekdays,
  &__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 16px;
  }

  &__day-text {
    cursor: pointer;
    width: 24px;
    height: 24px;
    padding: 2px;

    font-family: $font-family;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    /* line-height: 133%; */

    &--today {
      color: map-get($colors, red);
    }

    &--selected {
      border: 1px solid map-get($colors, black);
      border-radius: 50%;
    }

    &--empty {
      cursor: default;
      background-color: transparent;
    }
  }

  &__day {
    height: 24px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__weekday {
    height: 16px;
  }

  &__weekday,
  &__day {
    text-align: center;
  }

  &__nav-button {
    background: none;
    border: none;
    cursor: pointer;
  }
}
</style>
