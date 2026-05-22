<script setup>
import { ref, watchEffect } from 'vue'
import getRaces from '../services/getRaces';
import { fromUnixTime } from "date-fns"
import Filter  from '@/components/Filter.vue'

  const result = ref([])

watchEffect(async () => {

  const raceResponse = await getRaces();
  result.value = raceResponse;
  console.log('raceResponse', raceResponse);
  })

  function truncate(v) {
    const newline = v.indexOf('\n')
    return newline > 0 ? v.slice(0, newline) : v
  }
</script>

<template>
  <div className="race-panel">
    <h2>race panel hello</h2>
    <Filter />
    <p>{{Object.values(result.race_summaries)
  .sort((a, b) => a.advertised_start.seconds - b.advertised_start.seconds)
  .map((x) => `${x.race_name} ${fromUnixTime(x.advertised_start.seconds)}`)}}</p>
  </div>
</template>

<style lang="scss">
  @use '@/styles/components/RacePanel.scss';
</style>