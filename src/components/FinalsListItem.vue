<script>
export default {
  props: ['final'],
  data(props) {
    return {
      year: props.final.year,
      campbell: props.final.Campbell,
      wales: props.final.Wales,
      isLockout: props.final.year == '2005'
    }
  },
}
</script>

<template>
  <li>
    <div className="year">{{ year }}</div>
    <div :class="{
      lockout: isLockout,
      'touched-trophy': campbell.touch,
      winner: campbell.winner
    }">{{ campbell?.abbr }}</div>
    <div :class="{
      lockout: isLockout,
      'touched-trophy': wales.touch,
      winner: wales.winner
    }">{{ wales?.abbr }}</div>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}

.lockout {
  color: gray;
}

.touched-trophy {
  background: darkgreen;
}

.winner {
  color: gold;
}

.year {
  font-weight: normal;
}
</style>
