<template>
  <div id="app">
    <tree-table :data="mockData" />
  </div>
</template>

<script>
import TreeTable from "./components/tree-table/";
import mockData from "./mock.js";

export default {
  name: "app",
  components: {
    TreeTable
  },
  data() {
    return {
      mockData
    };
  }
};
</script>
<style lang="stylus">
#app {
  color: #2c3e50;
  margin-top: 10px;
}
</style>
