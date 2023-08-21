<script>
export default {}
</script>

<template>
  <section class="legend">
    <div className="legend-item">
      <div className="legend-icon legend-touch"></div>
      Touched conference trophy.
    </div>
    <div className="legend-item">
      <div className="legend-icon legend-champ"></div>
      Stanley Cup champion.
    </div>
  </section>
</template>

<style scoped>
.legend-item {
  font-size: 12px;
  text-align: left;
  width: 100%;
  max-width: 240px;
  margin-bottom: 5px;
  margin: 0 auto;
}

.legend-icon {
  width: 12px;
  height: 12px;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  margin-right: 10px;
}

.legend-touch {
  background: lightgreen;
}

.legend-champ {
  background: gold;
}
</style>
