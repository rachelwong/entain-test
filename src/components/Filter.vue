<template>
  <ul class="filters">
    <li v-for="filter in props.filters" :key="filter.category_id" class="filter">
      <button type="button" @click="props.isChecked?.(filter.category_id)"
        :class="props.selectedFilterIds.includes(filter.category_id) ? 'active' : ''" data-testid="filter-item">
        {{ filter.name }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type RaceFilterType from '../models/RaceFilterType'

const props = defineProps({
  filters: {
    type: Array as PropType<RaceFilterType[]>,
    required: true,
  },
  isChecked: {
    type: Function as PropType<(categoryId: string) => void>,
    required: true,
  },
  selectedFilterIds: {
    type: Array,
    required: true,
    default: () => []
  },
})

</script>

<style lang="scss">
@use '@/styles/components/Filter.scss';
</style>