<template>
  <main>
    <h2>{{ title }}</h2>
    <section>
      <img src="~/assets/t3.png" data-aos="fade-down" alt="generating" />
      <p data-aos="fade-down">
        &emsp;The power of the Basic Counting Principles in combinatorics really
        takes center stage when certain algorithms come into play. These
        algorithms were introduced to us in spectacular fashion when we
        discussed Generating Permutations and Combinations. This topic was one
        that I was very excited to work with since it involved a bit of
        programming in Python.
      </p>
      <img
        src="~/static/img/l3/python.png"
        data-aos="fade-down"
        alt="python"
      />
      <p data-aos="fade-down">
        &emsp;The topic consisted of the basic concept of lexicographical order
        and some pseudocode of the aforementioned algorithms. The fun really
        started during the problem sets wherein we were required to program
        those algorithms ourselves. At first, it was a bit daunting considering
        how complex it was compared to our other programming tasks, but I was
        thrilled when I finally got it to work.
      </p>
      <img
        src="~/static/img/l3/combinations.gif"
        data-aos="fade-down"
        alt="combination"
        class="code"
      />
      <p data-aos="fade-down">
        &emsp;The thought that I am still a Computer Science Freshman and I just
        made a program that could attempt every possible password of an online
        system certainly cemented my belief in the value of cybersecurity. I
        could only imagine the level of sophistication needed to make an
        algorithm that can crack a much more modern and secure website. I am
        really excited to find out what else is in store in the world of
        combinatorics and their applications in Computer Science.
      </p>
      <img
        src="~/static/img/l3/permutations.gif"
        data-aos="fade-down"
        alt="permutation"
        class="code"
      />
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
      title: "Generating Permutations and Combinations",
    };
  },
  head() {
    return {
      title: "Generating Permutations and Combinations",
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
  border-radius: 15px;
}

.code {
  max-height: 70vh;
}

@media only screen and (max-width: 472px) {
  main {
    margin-bottom: 5vh;
    padding: 0 7.5vw;
  }
  img {
    width: 100% !important;
    height: auto !important;
  }
}
</style>
