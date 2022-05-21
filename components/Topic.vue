<template>
  <div>
    <router-link to="{params: link}">
       <img :src="require(`../assets/${img}`)" />
    </router-link>
    <h3>{{title}}</h3>
    <p>{{sub}}</p>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    sub: String,
    link: String
  }
}
</script>

<style lang="scss" scoped">
  div{
    width: 250px !important;
  }
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
