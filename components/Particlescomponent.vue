<template>
  <!-- particle component-->
  <div>
    <no-ssr>
      <vue-particles
        color="#2D2D2D"
        linesColor="#2D2D2D"
        shapeType="edge"
        out_mode="bounce"
        :particlesNumber="80"
        :lineWidth="1"
        :lineOpacity="0.5"
        :lineDistance="100"
        :lineSpeed="0.5"
        :particleRadius="2"
        :particleOpacity="0.5"
        :particleSpeed="0.2"
        :moveSpeed="0.5"
        />
    </no-ssr>
  </div>

</template>
 <script>
export default {
  name: "Particlescomponent",
};
</script>
<style scoped>
#tsparticles {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
