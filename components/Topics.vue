<template>
  <section>
    <h1 data-aos="fade-down">Topics</h1>
    <div class="topicsGrid">
      <Topic
        v-for="t in topics"
        :key="t.id"
        :topic="t"
        data-aos="fade-down"
      />
    </div>
  </section>
</template>
<script>
import aosMixin from '~/mixins.js/aos'
export default {
  mixins: [aosMixin],
  data (){
    return {
    topics:[
      {
        id: 1,
        title: "Basics of Counting",
        sub: "Week 1",
        img: "t1.png",
        link: "/basics-of-counting"
      },
      {
        id: 2,
        title: "Pigeonhole Principle",
        sub: "Week 2",
        img: "t2.png",
        link: "/pigeonhole-principle"
      },
      {
        id: 3,
        title: "Generating Permutations and Combinations",
        sub: "Week 3",
        img: "t3.png",
        link: "/generating-permutations-and-combinations"
      },
      {
        id: 4,
        title: "Algebraic Structure and Groups",
        sub: "Week 6",
        img: "t4.png",
        link: "/algebraic-structure-and-groups"
      },
      {
        id:5,
        title: "Probability Theory",
        sub: "Week 7",
        img: "t5.png",
        link: "/probability-theory"
      },
      {
        id:6,
        title:"Bayes Theorem",
        sub: "Week 8",
        img: "t6.png",
        link: "/bayes-theorem"
      },
      {
        id:7,
        title: "Graphs and Graph Models",
        sub: "Week 10",
        img: "t7.png",
        link: "/graphs-and-graph-models"
      },
      {
        id:8,
        title:"Euler and Hamiltonian Paths",
        sub: "Week 12",
        img: "t8.png",
        link: "/euler-and-hamiltonian-paths"
      },
      {
        id:9,
        title:"Shortest-Path Problem",
        sub: "Week 12",
        img: "t9.png",
        link: "/shortest-path-problem"
      },
    ]}
  }
}
</script>
<style lang="scss" scoped>
  h1{
    font-weight: 600;
    font-size: 2rem;
  }
  section{
    display:grid;
    grid-template-columns: 1fr;
    margin: 10vh 0;
    padding: 0 10vw;
    gap: 30px;
    align-items: center;
    justify-items: center;
  }

  .topicsGrid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
  @media only screen and (max-width: 472px) {
    section{
      padding: 0;
    }
    .topicsGrid{
      grid-template-columns: 1fr 1fr ;
    }
  }
</style>
