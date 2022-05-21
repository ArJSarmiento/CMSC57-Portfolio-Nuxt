<template>
  <section>
    <div class="text">
      <h2>{{title}}</h2>
      <h1>{{mainTitle}}</h1>
      <div>
        <p>{{sub1}}</p>
        <p>{{sub2}}</p>
      </div>
    </div>
    <img src="~/static/svg/erdos.svg" alt="Paul Erdős">
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: "Discrete  Mathematics in Computer Science II",
      mainTitle: "CMSC 57 PORTFOLIO",
      sub1: "“Mathematics is a machine that turns coffee into theorems”",
      sub2: "-Paul Erdős, Father of Discrete Mathematics"
    };
  }
};

</script>
<style lang="scss" scoped>
  section{
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;

    margin: 5vh 0;
  }
  .text{
    display: flex;
    flex-direction: column;
    gap:30px;
  }
  h2{
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 30px;
  }
  h1{
    font-weight: 600;
    font-size: 7rem;
    line-height: 125px;
  }
  p{
    font-weight: 400;
    font-size: 1rem;
    line-height: 27px;
  }
  img{
    height: 80vh;
    width: auto;
  }

  @media only screen and (max-width: 953px) {
    *{
      text-align: center;
    }
     section{
        grid-template-columns: 1fr;
        gap: 30px;
     }
     h2{
        font-size: 1.2rem;
        line-height: 20px;
     }
     h1{
        font-size: 3.5rem;
        line-height: 70px;
     }
     img{
        height: 50vh;
        width: auto;
      }
  }
</style>
