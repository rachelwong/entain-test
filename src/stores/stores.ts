import { defineStore } from 'pinia';
import { ref } from 'vue';
import type RaceSummary from '../models/RaceSummary'
import { fromUnixTime, differenceInMinutes } from "date-fns"
import getRaces from '../services/getRaces';
import { filterValues, MIN_RACE_NUM } from '../utils/constant';

export const useRaceStore = defineStore('races', () => {
  const loading = ref<boolean>(false);
  const error = ref<boolean>(false);
  const races = ref<RaceSummary[]>([])
  const isRefilling = ref(false) // flag to prevent calling api too many times

  const filters = ref(filterValues);

  const trimToMax = () => {

    races.value = races.value
      .sort((a, b) => a.advertised_start!.seconds - b.advertised_start!.seconds)
      .slice(0, MIN_RACE_NUM);
  };

  const fetchRaceData = async () => {
    try {
      loading.value = true;
      const raceResponse = await getRaces();
      const data = Object.values(raceResponse?.race_summaries ?? [])
        .sort(
          (a, b) => a.advertised_start.seconds - b.advertised_start.seconds
      )
      races.value = [...data]
    } catch (err) {
      error.value = true;
    } finally {
      loading.value = false;
    }
  }

  // intentionally mutate the store to remove races whose start times are over 1 minute ago
  const removeStaleRaces = () => {
    const now = new Date();
    races.value = races.value.filter((x) => differenceInMinutes(now, fromUnixTime(x.advertised_start.seconds)) < 1)

  }

  const resetStore = () => {
    races.value = [];
    loading.value = false;
    error.value = false;
  }

const updateRaceData = async () => {
  if (loading.value) return

  loading.value = true

  try {
    removeStaleRaces()

    if (races.value.length >= MIN_RACE_NUM) {
      return;
    }

    await fetchRaceData()
    trimToMax()
    removeStaleRaces()
  } finally {
    loading.value = false
  }
}
  return {
    races,
    loading,
    error,
    filters,
    updateRaceData,
    resetStore,
  }
})
