<script setup type="ts">
import { watch, onMounted } from 'vue'
// import Filter from '@/components/Filter.vue'
import Race from '@/components/Race.vue'
import { useRaceStore } from '../stores/stores';

const store = useRaceStore();

// const loadRaces = async () => {
//   const raceResponse = await getRaces();
//   result.value = Object.values(raceResponse.race_summaries)
//     .sort(
//       (a, b) => a.advertised_start.seconds - b.advertised_start.seconds
//     )
//     .map((x) => { return { ...x, display_start_time: format(fromUnixTime(x.advertised_start.seconds), 'dd-MM-yyyy  HH:mm:ss') } })
//   // result.value.push(Object.values(raceResponse.race_summaries)
//   //   .sort(
//   //     (a, b) => a.advertised_start.seconds - b.advertised_start.seconds
//   //   )
//   //   .map((x) => { return { ...x, display_start_time: format(fromUnixTime(x.advertised_start.seconds), 'dd-MM-yyyy  HH:mm:ss') } }))
//   console.log('raceResponse', JSON.parse(JSON.stringify(Object.values(result.value))))
// }

watch(
  store.races,
  (state) => { },
  { deep: true }
)


// use watch and debounce to mutate state in store
onMounted(() => {
  store.updateRaceData();
})
</script>


<template>
  <div className="race-panel">
    <!-- <Filter /> -->
    <ul>
      <Race v-for="race in store.races" :key="race.race_id" :race="race" />
    </ul>
    <!-- <p>{{Object.values(result.race_summaries)
  .sort((a, b) => a.advertised_start.seconds - b.advertised_start.seconds)
  .map((x) => `${x.race_name} ${fromUnixTime(x.advertised_start.seconds)}`)}}</p> -->
  </div>
</template>

<style lang="scss">
@use '@/styles/components/RacePanel.scss';
</style>