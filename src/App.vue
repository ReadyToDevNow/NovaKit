<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <router-link to="/about"></router-link>
  </header>

  <router-view></router-view>
</template>
