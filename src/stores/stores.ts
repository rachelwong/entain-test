import { defineStore } from 'pinia';
import { ref } from 'vue';
import type RaceSummary from '../models/RaceSummary'
import { fromUnixTime, differenceInMinutes } from "date-fns"
import getRaces from '../services/getRaces';

export const useRaceStore = defineStore('races', () => {
  const pageCount = 10;
  const loading = ref<boolean>(false);
  const error = ref<boolean>(false);
  const page = ref(1);
  const now = new Date();
  const MIN_RACE_NUM = 5;
  const races = ref<RaceSummary[]>([])

  const fetchRaceData = async (targetPageCount: number) => {
    try {
      loading.value = true;
      const raceResponse = await getRaces(targetPageCount * pageCount);
      const data = Object.values(raceResponse?.race_summaries ?? [])
        .sort(
          (a, b) => a.advertised_start.seconds - b.advertised_start.seconds
        )
      races.value.push(...data);
    } catch (err) {
      error.value = true;
    } finally {
      loading.value = false;
    }
  }

  // intentionally mutate the store to remove races whose start times are over 1 minute ago
  const removeStaleRaces = () => {
    races.value = races.value.filter((x) => differenceInMinutes(now, fromUnixTime(x.advertised_start.seconds)) >= 1)
  }

  const resetStore = () => {
    races.value = [];
    loading.value = false;
    error.value = false;
    page.value = 1;
  }

  const updateRaceData = () => {
    if (loading.value) {
      return;
    }

    // check to ensure no race data is too old
    removeStaleRaces();

    // for as long as there is less than 5 races currently in the store, then get more race data
    while (races.value.length < MIN_RACE_NUM) {
      fetchRaceData(page.value)
      // increment pagination for next fetch of data
      page.value++
    }
  }

  return {
    races,
    loading,
    error,
    updateRaceData,
    resetStore,
  }
})