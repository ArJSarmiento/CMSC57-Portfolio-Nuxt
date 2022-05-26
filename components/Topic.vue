<template>
  <div class="topicCont">
    <NuxtLink :to="topic.link" >
      <div class="imgLink">
        <img
          :src="require(`../assets/${topic.img}`)"
        />
      </div>
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
  .topicCont{
    position: relative;
    z-index: 2;
    background: white;
  }
  .imgLink {
    width: 100%;
    background-color: #fff;
    position: relative;
    overflow: hidden;
  }

  img{
    transition: 0.2s all ease-out;
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  img:hover, img:focus{
    transform: scale(1.2);
  }

  p{
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 27px;
  }
</style>
