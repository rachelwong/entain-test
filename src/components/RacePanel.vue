<script setup type="ts">
import { ref, onMounted } from 'vue'
import getRaces from '../services/getRaces';
import Filter from '@/components/Filter.vue'
import Race from '@/components/Race.vue'
import { fromUnixTime, format } from "date-fns"

const result = ref([])


const loadRaces = async () => {
  const raceResponse = await getRaces();
  result.value = Object.values(raceResponse.race_summaries)
    .sort(
      (a, b) => a.advertised_start.seconds - b.advertised_start.seconds
    )
    .map((x) => { return { ...x, display_start_time: format(fromUnixTime(x.advertised_start.seconds), 'dd-MM-yyyy  HH:mm:ss') } })
  console.log('raceResponse', JSON.parse(JSON.stringify(result.value)))

}

onMounted(() => {
  console.log('HELLO')
  loadRaces()
})
</script>

<template>
  <div className="race-panel">
    <Filter />
    <ul>
      <Race v-for="race in result" :key="race.race_id" :race="race" />
    </ul>
    <!-- <p>{{Object.values(result.race_summaries)
  .sort((a, b) => a.advertised_start.seconds - b.advertised_start.seconds)
  .map((x) => `${x.race_name} ${fromUnixTime(x.advertised_start.seconds)}`)}}</p> -->
  </div>
</template>

<style lang="scss">
@use '@/styles/components/RacePanel.scss';
</style>