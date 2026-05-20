<template>
  <div class="header">
    <div class="header__wrapper">
      <img :src="logo" class="header__wrapper__logo" />
    </div>
  </div>
</template>

<script setup>
import logo from '@/assets/images/brand-wordmark-onbrand.svg?url'

</script>

<style lang="scss">
  @use '@/styles/components/Header.scss';
</style>