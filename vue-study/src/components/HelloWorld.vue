<template>
  <div class="hello">
    <h1 v-text='msg'></h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: false,
      default: 'hello vue'
    }
  }
}
</script>

<style scoped>

</style>
