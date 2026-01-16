<template>
  <div  class="Banana">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Banana',
      message: 'I love BANANA!'
    }
  }
};
</script>

<style>
  .durian {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: rgb(207, 227, 56);
  }  
</style>