<template>
  <main>
    <h2>{{ title }}</h2>
    <section>
      <img src="~/assets/t7.png" data-aos="fade-down" alt="counting" />
      <p data-aos="fade-down">
        &emsp;Before going through this lesson, I've only encountered graphs in a Data Structures and Algorithms course
        I took a while ago. I was aware that graphs were discrete structures consisting of vertices and edges that
        connect these vertices. But I have never really dived deep into their different types and real-world
        applications. It was only when I studied this week’s lesson that I realized how ubiquitous graphs really are in
        our digital world.
      </p>
      <p data-aos="fade-down">
        &emsp;The types of graphs are as follows:
      </p>
      <ol data-aos="fade-down">
        <li>Simple graph</li>
        <li>Multigraph</li>
        <li>Pseudograph </li>
        <li>Directed graph </li>
        <li>Directed multigraph</li>
      </ol>
      <p data-aos="fade-down">
        &emsp;Regardless of which type of graph we are dealing with, roads between cities are used as the prime example
        of real-world application of graphs. It just takes a certain level of understanding to identify which type of
        graph one should use, as established in the week’s Problem Set. I can imagine how Google Maps is implemented as
        a large graph of every street as an edge and every destination as a vertex. I also assume that its
        direction-finding feature is based on a Shortest-Path finding algorithm similar to Dijkstra's algorithm.
      </p>
      <img src="~/static/img/l7/maps.jpg" data-aos="fade-down" alt="maps" />
      <p data-aos="fade-down">
        &emsp;I find that from video games to web-based networks, the possibilities are certainly endless with the
        applications of this abstract concept. Even the search engine for Google itself was based on a network of
        interconnected hyperlinks modeled as graphs. I look forward to creating meaningful programs that utilize graphs
        and
        their unique properties. Such possibilities, especially in this era of Artificial Intelligence and Quantum
        Computing, makes Computer Science a very exciting field to be involved in.
      </p>
      <img src="~/static/img/l7/network.jpg" data-aos="fade-down" alt="network" />
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
      title: "Graphs and Graph Models",
    };
  },
  head() {
    return {
      title: "Graphs and Graph Models",
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
