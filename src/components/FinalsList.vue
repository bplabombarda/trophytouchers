<script>
import FinalsListItem from './FinalsListItem.vue'
import json from '../data.json'

export default {
  components: {
    'finals-list-item': FinalsListItem
  },
  data() {
    return {
      finals: json.data
    }
  },
}
</script>

<template>
  <ul id="finals-list">
    <li className="finals-list-header">
      <div>Year</div>
      <div>Campbell</div>
      <div>Wales</div>
    </li>
    <finals-list-item v-for="final in finals" :final="final" />
  </ul>
</template>

<style scoped>
#finals-list {
  padding: 0;
}

.finals-list-header {
  opacity: 0.5;
}
</style>
