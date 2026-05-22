<template>
  <ul class="filters">
    <li v-for="filter in filters" :key="filter.category_id" class="filter">
      <input
        type="checkbox"
        :id="filter.category_id"
        name="filter"
        :checked="isSelectedFilter"
      >
      <label :for="filter.category_id">{{ filter.name }}</label><br>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  selectedFilterIds: {
    type: Array,
    required: true,
    default: () => []
  },
})

const filters = ref([
  { name: 'Greyhound racing', category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61' },
  { name: 'Harness racing', category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b' },
  { name: 'Horse racing', category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae' }
]);


const isSelectedFilter: boolean = filters.value.some((x) => props.selectedFilterIds.includes(x.category_id))

</script>

<style lang="scss">
  @use '@/styles/components/Filter.scss';
</style>