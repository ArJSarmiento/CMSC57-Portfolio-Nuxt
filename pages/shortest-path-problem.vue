<template>
  <main>
    <h2>{{ title }}</h2>
    <section>
      <img src="~/assets/t9.png" data-aos="fade-down" alt="counting" />
      <p data-aos="fade-down">
        &emsp;Back in the 11 <sup>th</sup> grade, I had some fun developing a game that used the A* Pathfinding
        algorithm to implement the tracking of the enemies to the player while they avoid certain obstacles. It was a
        third-party library that allowed me to easily implement it without worrying about the algorithm itself. However,
        when I began studying this week’s lesson I developed a level of appreciation for how pathfinding algorithms are
        implemented.
      </p>
      <img src="~/static/img/l9/SPACE-SHOOTER.gif" data-aos="fade-down" alt="SPACE-SHOOTER" class="code">
      <p data-aos="fade-down">
        &emsp;Edsger Wybe Dijkstra renowned Computer Scientist and author of the Dijkstra Algorithm has provided a
        series of steps that makes pathfinding in graphs a much more efficient task. The pseudocode for Dijkstra
        Algorithm is as follows:
      </p>
      <img src="~/static/img/l9/pseudocode.jpg" data-aos="fade-down" alt="pseudocode" class="code">
      <p data-aos="fade-down">
        &emsp;With this, we can find the lengths of shortest paths from a given source vertex to all other vertices as
        we can see below.
      </p>
      <img src="~/static/img/l9/anim.gif" data-aos="fade-down" alt="anim" class="code">
      <p data-aos="fade-down">
        &emsp;I had a challenging yet engaging experience implementing this algorithm in the problem sets. My learning
        experience in this lesson and the course overall is one filled with discoveries, reflections, and “aha” moments
        that I will forever cherish. After all the lessons and problem sets, I developed an admiration for trailblazers
        such as Dijkstra which paved the way for people like me who are passionate about computer science. I hope to
        continue learning from them as I move forward on my journey in the world of Discrete Mathematics.
      </p>
      <img src="~/static/img/l9/dijkstra.jpg" data-aos="fade-down" alt="dijkstra">
    </section>
  </main>
</template>

<script>
import aosMixin from "~/mixins.js/aos";
export default {
  mixins: [aosMixin],
  layout: "default",
  data() {
    return {
      title: "Shortest Path Problem",
    };
  },
  head() {
    return {
      title: "Shortest Path Problem",
    };
  },
};
</script>

<style scoped>
main {
  margin: 12vh 0;
  width: 100vw;
  padding: 0 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

section {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 20px;
}

code {
  text-align: center;
  margin: 10px 0;
}

h2 {
  justify-content: center;
  text-align: center;
  font-weight: 600;
  line-height: 30px;
}

p {
  text-align: justify;
  font-weight: 500;
  font-size: 1rem;
  line-height: 35px;
}

img {
  max-height: 50vh;
  width: auto;
  padding: 10px;

  border-radius: 15px;
}

.code {
  max-height: 70vh;
  padding: 0;
}

@media only screen and (max-width: 472px) {
  main {
    margin-bottom: 5vh;
    padding: 0 7.5vw;
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
