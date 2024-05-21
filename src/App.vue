<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AppHeader, AppFooter } from '@/components/'
import { Color } from './models'
</script>

<template lang="pug">
AppHeader
RouterView
AppFooter
</template>

<style scoped lang="scss"></style>
