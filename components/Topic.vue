<template>
  <div>
    <NuxtLink :to="topic.link">
       <img
        :src="require(`../assets/${topic.img}`)"
       />
    </NuxtLink>
    <h4>{{topic.title}}</h4>
    <p>{{topic.sub}}</p>
  </div>
</template>

<script>
export default {
  props: ['topic']
}
</script>

<style lang="scss" scoped>
  img{
    width: 100%;
    height: auto;
  }
  p{
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 27px;
  }
</style>
