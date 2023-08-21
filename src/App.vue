<script setup>
import FinalsList from './components/FinalsList.vue'
import Legend from './components/Legend.vue'
</script>

<template>
  <div>
    <header>
      <h1>Trophy Touchers</h1>
    </header>

    <FinalsList />
    <Legend />
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
  margin: 0;
  text-transform: uppercase;
}
</style>
