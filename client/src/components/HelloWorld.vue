<template>
  <div class="welcome_message">
    <h1>{{ msg }}</h1>
    <h3>Underneath message</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>