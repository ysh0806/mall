<template>
  <div class="goods">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>

</style>
