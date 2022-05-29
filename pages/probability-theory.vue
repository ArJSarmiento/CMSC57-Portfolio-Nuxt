<template>
  <main>
    <h2>{{ title }}</h2>
    <section>
      <img
        src="~/assets/t5.png"
        data-aos="fade-down"
        alt="counting"
      />
      <p data-aos="fade-down">
        &emsp;The previous lessons established that with the topic of
        <NuxtLink to="/basics-of-counting">Basics of Counting</NuxtLink> with
        Combinatorics we are able to calculate the number of possibilities in
        which an event can occur. I realized that we can now apply this with
        Probability Theory to solve much more complex probability problems. But
        first, we must define probability as the number of times an event can
        occur over the number of trials.
      </p>
      <img
        src="/img/l5/definition.png"
        data-aos="fade-down"
        alt="definition"
      />
      <p data-aos="fade-down">
        &emsp;You can really appreciate how these concepts interrelate to solve
        problems that are often difficult to solve without the other. An example
        is the problem below.
      </p>
      <code data-aos="fade-down">
        &emsp;When we randomly select a permutation of {1, 2, 3}, what is the
        probability that 1 precedes 3?
      </code>
      <p data-aos="fade-down">
        &emsp;To solve this problem, we must generate all the permutations of
        {1, 2, 3} in which there are 3! = 6.
      </p>
      <p data-aos="fade-down">These are:</p>
      <code data-aos="fade-down">
        {1, 2, 3} {1, 3, 2} {2, 1, 3} {2, 3, 1} {3, 1, 2} {3, 2, 1}
      </code>
      <p data-aos="fade-down">
        &emsp;Among them, only the following show that 1 precedes 3:
      </p>
      <code data-aos="fade-down"> {1, 2, 3} {1, 3, 2} {2, 1, 3} </code>
      <p data-aos="fade-down">
        &emsp;Therefore, the probability of 1 preceding 3 is 3/6 or 0.5.
      </p>
      <p data-aos="fade-down">
        &emsp;Below are other probability theorems that I also found useful in
        probability problems and more advanced topics such as
        <NuxtLink to="/bayes-theorem">Bayes Theorem</NuxtLink>.
      </p>
      <img
        src="/img/l5/and.svg"
        data-aos="fade-down"
        alt="and"
        class="formula"
      />
      <img
        src="/img/l5/or.svg"
        data-aos="fade-down"
        alt="ot"
        class="formula"
      />
      <img
        src="/img/l5/not.svg"
        data-aos="fade-down"
        alt="not"
        class="formula"
      />
      <img
        src="/img/l5/given.svg"
        data-aos="fade-down"
        alt="given"
        class="formula"
      />
      <p data-aos="fade-down">
        Another concept that has fascinated me in this lecture was the Bernoulli
        trial which is the performance of an experiment with two possible
        outcomes such as a series of bits. The formula for finding the
        probability of exactly <i>k</i> successes in <i>n</i> independent
        Bernoulli trial with a probability of success <i>p</i> and probability
        of failure <i>q</i> is expressed as:
      </p>
      <img
        src="/img/l5/bernoulli.png"
        data-aos="fade-down"
        alt="bernoulli"
      />
      <p data-aos="fade-down">
        I find this to be incredibly useful in assessing the probability of
        guessing the value of random tasks like a coin flip. I also have
        encountered numerous problems that have been modeled from this principle
        such as the life and death distribution of a department of a hospital
        and many others.
      </p>
      <p data-aos="fade-down">
        The world of probability is vast and filled with sophisticated
        principles which dictate all events in the universe. With the proper
        knowledge of these principles, we can predict and manipulate the choice
        of the dice who play god.
      </p>
      <img
        src="/img/l5/coin.jpg"
        data-aos="fade-down"
        alt="coin"
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
      title: "Probability Theory",
    };
  },
  head() {
    return {
      title: "Probability Theory",
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

img{
  max-height: 50vh;
  width: auto;
  padding: 10px;

  border-radius: 15px;
}

.formula {
  width: 50%;
  height: auto;
}

@media only screen and (max-width: 720px) {
  main {
    margin-bottom: 5vh;
    padding: 0 7.5vw;
  }

  img{
    width: 100% !important;
    height: auto;
    max-height: 500vh;
  }
}
</style>
