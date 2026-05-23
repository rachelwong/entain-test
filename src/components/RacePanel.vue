<script setup>
import { onMounted, computed, ref } from 'vue'
import Race from '@/components/Race.vue'
import { useRaceStore } from '../stores/stores';
import Filter from '../components/Filter.vue'
import Timer from '../components/Timer.vue'
import { MIN_RACE_NUM } from '@/utils/constant';

const store = useRaceStore();

// intent is to get more races if the number is less than 5
// watch(
//   () => store.races.length < MIN_RACE_NUM,
//   async (needsMore) => {
//     if (needsMore && !store.loading) {
//       await store.updateRaceData()
//     }
//   },
// )


// on first load of the component, make a call and get races
onMounted(() => {
  store.updateRaceData()

  // // every thirty seconds, evaluate the timestamps of races, and get more if needed
  setInterval(async () => {
    if (store.races.length < MIN_RACE_NUM && !store.loading) {
      await store.updateRaceData()
    }
  }, 30000)
})

// Applying filterin logic
const selectedFilterIds = ref([]);

const filteredRaces = computed(() => {
  // show all race data available if no filters apply
  if (selectedFilterIds.value.length === 0) {
    return store.races;
  }
  // otherwise display races with matching category_ids
  return store.races.filter((x) => selectedFilterIds.value.includes(x.category_id))
});

// Updating filter depending on button events
const isFilterChecked = (categoryId) => {
  if (selectedFilterIds.value.includes(categoryId)) {
    selectedFilterIds.value = selectedFilterIds.value.filter((x) => x !== categoryId)
  } else {
    selectedFilterIds.value.push(categoryId)
  }
};

</script>

<template>
  <div className="race-panel">
    <Timer />
    <Filter :filters="store.filters" :isChecked="isFilterChecked" :selectedFilterIds="selectedFilterIds" />
    <ul class="races">
      <Race v-for="race in filteredRaces" :key="race.race_id" :race="race" />
    </ul>
  </div>
</template>

<style lang="scss">
@use '@/styles/components/RacePanel.scss';
</style>