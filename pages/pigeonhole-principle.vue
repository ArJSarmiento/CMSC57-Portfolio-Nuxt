<template>
  <main>
    <h2>{{ title }}</h2>
    <section>
      <img src="~/assets/t2.png" data-aos="fade-down" alt="pigeon" />
      <p data-aos="fade-down">
        &emsp;Despite being called the Pigeonhole Principle, the principle itself is the farthest thing from avian. This
        principle may well be the most intuitive and useful concept I have encountered in this subject. I found it to be
        so straightforward and obvious that I immediately searched for its applications in my surroundings.
      </p>
      <p data-aos="fade-down">
        &emsp;The Pigeonhole Principle simply says that if there are four pigeon holes and five pigeons each of which
        needs to be put into one of those holes, then after we've put each pigeon into a pigeon hole there must be at
        least one pigeon hole that has multiple pigeons in it. Generally, the principle can be expressed with the
        formula:
      </p>
      <img src="~/static/img/l2/formula.svg" data-aos="fade-down" alt="formula">
      <p data-aos="fade-down">
        &emsp;With the formula above we solve problems of varying complexity. It just now depended on distinguishing the
        pigeons from the pigeonholes.
      </p>
      <p data-aos="fade-down">
        &emsp;I remember during the first exam, I was thrilled that I was able to use the Pigeonhole Principle and the
        Product Rule to solve the problem below.
      </p>
      <code>
        How many people are needed to guarantee that at least 6 were born on the same day of the week (e.g. Monday, Tuesday) and in the same month (perhaps in different years)?
      </code>
      <p data-aos="fade-down">
        &emsp;In the problem the number of pigeonholes can be found using the Product Rule. Since there are 7 days in
        the week and 12 months in a year, we have 84 pigeonhole. To get the number of pigeons we can use the formula
        above with 6 as our <code>ceil(n/k)</code>. Therefore we now have 421 pigeons needed to have at least 6 were born on the same
        day of the week and in the same month.
      </p>
      <p data-aos="fade-down">
        &emsp;This just goes to show how each concept, regardless of its complexity can be used to solve problems in
        elegant fashion.
      </p>
      <img src="~/static/img/l2/calendar.jpg" data-aos="fade-down" alt="calendar">
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
      title: "Pigeonhole Principle",
    };
  },
  head() {
    return {
      title: "Pigeonhole Principle",
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
