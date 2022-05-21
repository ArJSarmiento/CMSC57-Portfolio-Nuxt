<template>
  <main>
    <Landing/>
    <Topics/>
  </main>
</template>

<script>
import Landing from '../components/Landing.vue'
export default {
    layout: "default",
    head() {
        return {
            title: "Home"
        };
    },
    components: { Landing }
}
</script>

<style>
  main {
    padding: 0;
    margin: 12vh 0;
    width: 100vw;
    padding: 0 5vw;
  }
  @media only screen and (max-width: 472px) {
    main{
      padding: 10px 7.5vw;
    }
  }
</style>
