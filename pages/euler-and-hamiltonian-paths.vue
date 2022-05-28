<template>
  <main>
    <h2>{{ title }}</h2>
    <section>
      <img src="~/assets/t8.png" data-aos="fade-down" alt="counting" />
      <p data-aos="fade-down">
        &emsp;Who knew that one of the most famous and utilized fields in mathematics originated from the thoughts of a
        curious Prussian Mayor. Carl Gottlieb Ehler found himself at his wit's end when he contacted Leonhard Euler to
        ask about a simple thought experiment about a set of bridges in the City of Königsberg. The problem that boggled
        his mind is stated as follows:
      </p>
      <code data-aos="fade-down">
        Given the set of bridges displayed above, which route would allow someone to cross all 7 bridges without crossing any of them more than once?
      </code>
      <p data-aos="fade-down">
        &emsp;Euler grappled with the idea and later invented a new kind of geometry that would be the backbone of
        solving these kinds of problems. Thus, it marked the beginning of the field of Graph Theory. Naturally, Euler
        would name such a grand discovery to himself, hence we have the Eulerian Path. The Eulerian path describes a
        path in a graph that uses each edge precisely once. If such a path exists, the graph is called traversable. An
        Eulerian circuit, on the other hand, describes a cycle that uses each edge precisely once. If such a cycle
        exists, the graph is called Eulerian.
      </p>
      <p data-aos="fade-down">
        &emsp;We can identify Eulerian Paths and Circuits with the following theorems.
      </p>
      <div data-aos="fade-down">
        <h3>Theorem 1</h3>
        <p>
          &emsp;A connected multigraph with at least two vertices has an Euler circuit if and only if each of its
          vertices has an even degree.
        </p>
      </div>

      <div data-aos="fade-down">
        <h3>Theorem 2</h3>
        <p>
          &emsp;A connected multi-graph has an Euler path but not an Euler circuit if and only if it has exactly two
          vertices of odd degree.
        </p>
      </div>

      <p data-aos="fade-down">
        &emsp;We can represent the Königsberg problem with the graph below.
      </p>
      <img src="~/static/img/l8/graph.jpg" data-aos="fade-down" alt="graph">
      <p data-aos="fade-down">
        &emsp;Since our graph has exactly four vertices of odd degrees, it is not an Eulerian Path. Therefore, it is
        impossible for someone to cross all 7 bridges without crossing any of them more than once.
      </p>
      <p data-aos="fade-down">
        &emsp;There is also a Hamiltonian Path that deals with a different class of problems which focuses on graphs
        that visit each vertex exactly once. In this case, Königsberg has a Hamiltonian Path.
      </p>
      <p data-aos="fade-down">
        &emsp;It is simply amazing how such random and seemingly trivial questions can transform into theorems that
        become the foundations of modern technology. It is so fascinating to discover how these stories of invention
        unfold and to witness their applications centuries after. It's funny how Carl Gottlieb Ehler and Leonhard
        Euler's question about bridges led to Google, a system that can answer almost any question.
      </p>
      <img src="~/static/img/l8/euler.jpg" data-aos="fade-down" alt="euler">
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
      title: "Euler and Hamiltonian Paths",
    };
  },
  head() {
    return {
      title: "Euler and Hamiltonian Paths",
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
