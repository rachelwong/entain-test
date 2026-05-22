<script setup lang="ts">
import type RaceSummary from '../models/RaceSummary'
import { fromUnixTime } from 'date-fns/fromUnixTime';
import { format } from 'date-fns/format';

const props = defineProps<{
  race: RaceSummary
}>()

const raceTimestamp = format(fromUnixTime(props.race.advertised_start.seconds), 'dd-mm-yyyy HH:mm:aa')

</script>


<template>
  <li class="race">
    <span>#{{ race.race_number }} {{ race.meeting_name }}</span>
    <span>Start time: {{ raceTimestamp }}</span>
  </li>
</template>

<style lang="scss">
@use '@/styles/components/Race.scss';
</style>