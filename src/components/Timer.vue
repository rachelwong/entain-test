<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { format } from 'date-fns/format';

const currentTime = ref(new Date());
let timer = null;

// automatically recalculates when currentTime changes
const displayTime = computed(() => {
  return format(currentTime.value, 'dd-MM-yyyy HH:mm:ss')
})

onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = new Date();
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <p class="timer">Countdown timer: {{ displayTime }}</p>
</template>

<style lang="scss">
@use '@/styles/components/Timer.scss';
</style>