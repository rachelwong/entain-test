<template>
  <li class="race">
    <span>#{{ race.race_number }} - {{ race.meeting_name }}</span>
    <span>Start time: {{ race.display_start_time }}</span>
  </li>
</template>

<script setup lang="ts">
import type RaceSummary from '../models/RaceSummary'
const props = defineProps<{
  race: RaceSummary
}>()
</script>

<style lang="scss">
@use '@/styles/components/Race.scss';
</style>