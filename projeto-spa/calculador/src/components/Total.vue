<template>
  <div>
    <h3>Total Gasto: R${{ message }},00</h3>
  </div>
</template>

<script>
  export default {
    props: ['message']
  }
</script>

<style scoped>
  h3 {
    margin-top: 100px;
    margin-left: 800px;
    color: SeaGreen;
    font-family: helvetica;
  }
</style>