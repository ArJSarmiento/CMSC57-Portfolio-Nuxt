<template>
  <main>
    <h2>{{ title }}</h2>
    <section>
      <img src="~/assets/t6.png" data-aos="fade-down" alt="counting" />
      <p data-aos="fade-down">
        &emsp;During the summer of 2021, I spent some of my time studying
        Machine Learning and Data Analysis. Within that period, I played with
        many ML models such as Linear Regression, Decision Tree Regression,
        Random Forrest Regression, Logistic Regression, and many more. I have
        made some predictions, visualizations, and classifications on numerous
        data sets on the web. Despite having experience in the discipline, I had
        little to no intuition about its mathematical foundations. I was only
        familiar with Linear Regression in Statistics but other than that I was
        clueless.
      </p>
      <p data-aos="fade-down">
        &emsp;It was only when I learned about Bayes Theorem that I had my first
        glimpse into the inner workings of Data Science. I was amazed by the
        role of Probability Theory especially Conditional Probability in
        computing the Bayes Theorem formula below.
      </p>
      <img
        src="~/static/img/l5/given.svg"
        data-aos="fade-down"
        alt="given"
        class="formula"
      />
      <img
        src="~/static/img/l6/bayes.svg"
        data-aos="fade-down"
        alt="bayes"
        class="formula"
      />
      <p data-aos="fade-down">
        &emsp;The spam filter and the disease problems also worked great in
        facilitating my understanding as I have also known that these are some
        applications of Machine Learning. This lesson has further cemented my
        belief that Artificial Intelligence is heavily interrelated with
        Statistics.
      </p>
      <img
        src="~/static/img/l6/machine.jpg"
        data-aos="fade-down"
        alt="machine"
      />
      <p data-aos="fade-down">
        &emsp;Learning Bayes Theorem in this chapter really opened my eyes to
        how mathematical concepts play a fundamental role in these technologies.
        It also made me appreciate the level of abstraction I’m working with
        when I code on a Jupyter Notebook. My perspective has completely changed
        and I am grateful that
      </p>
      <img
        src="~/static/img/l6/jupyter.png"
        data-aos="fade-down"
        alt="jupyter"
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
      title: "Bayes Theorem",
    };
  },
  head() {
    return {
      title: "Bayes Theorem",
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

.formula{
  width: 50%;
  height: auto;
}

@media only screen and (max-width: 472px) {
  main {
    margin-bottom: 5vh;
    padding: 0 7.5vw;
  }
  img {
    width: 100% !important;
    height: auto;
    max-height: 500vh;
  }
}
</style>
