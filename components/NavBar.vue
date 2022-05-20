<template>
  <nav>
    <NuxtLink to="/" class="iconLink">
      <img src="~/static/img/icon.png" alt="logo">
      <span>CMSC 57 Portfolio</span>
    </NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
  nav{
    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);

    width: 100%;
    height: 15vh;
  }
  .iconLink {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 0;
    text-decoration: none;

    span{
      color:black;
      font-weight: 600;
      font-size: 1.5rem;
    }

    img{
      height : 50px;
    }

  }
  @media only screen and (max-width: 472px) {
    span{
      display: none;
    }
    nav, .iconLink {
      justify-content: center;
    }
  }
</style>
