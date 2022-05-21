<template>
  <nav>
    <NuxtLink to="/" class="iconLink">
      <img src="~/static/img/icon.png" alt="logo">
      <span>Home</span>
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
    backdrop-filter: blur(10px);
    width: 100%;
    height: 15vh;
  }
  .iconLink {
    display: flex;
    align-items: center;
    padding: 20px 45px;
    margin: 0;
    text-decoration: none;

    span{
      color:#2D2D2D;
      font-size: 1rem;
      margin-left: 10px;
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
