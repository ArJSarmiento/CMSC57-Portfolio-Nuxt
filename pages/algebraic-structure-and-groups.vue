<template>
  <main>
    <h2>{{ title }}</h2>
    <section>
      <img src="~/assets/t4.png" data-aos="fade-down" alt="counting" />
      <p data-aos="fade-down">
        &emsp;For me, the topic of Algebraic Structure and Groups has been the newest and most challenging concept I
        have ever encountered in the course. I simply have never encountered something like it.
      </p>
      <p data-aos="fade-down">
        &emsp;At first, the introduction with symmetries of the square and its segway toward binary operations was very
        unintuitive for me. It was only when I learned the topic of groups that I found their connection. To review, a
        group is a set <i>S</i>  and a binary operation <span><img src="~/static/img/l4/operation.png" alt="operation"></span> such that:
      </p>
      <ol data-aos="fade-down">
        <li>
          <span><img src="~/static/img/l4/operation.png" alt="operation"></span> is associative for all elements in <i>S</i>
        </li>
        <li>
          There exists an identity element <i>e</i> for all elements in <i>S</i>
        </li>
        <li>
          There exists an inverse element <i>e</i> for all elements in <i>S</i>
        </li>
      </ol>
      <img src="~/static/img/l4/symmetries.png" data-aos="fade-down" alt="product rule" class="code">
      <p data-aos="fade-down">
        &emsp;Knowing this, I was amazed to see how this can be used to model geometric patterns such as the symmetries
        of the square problem we have encountered previously. Later on, I learned more examples of groups through the
        materials with modular/clock arithmetic as its prime example.
      </p>
      <img src="~/static/img/l4/clock.jpg" data-aos="fade-down" alt="sum rule">
      <p data-aos="fade-down">
        &emsp;I also had a wonderful time implementing the Euclidean Algorithms in Python to find the modular
        multiplicative inverse and GCD. Implementing the algorithm certainly made the lab exercises much easier. It
        probably took me days before really grasping the distinction between Groups, Rings, and Fields but in the end,
        it was really rewarding. I really look forward to seeing what else is in store for this topic as I move forward in my
        journey in computer science.
      </p>
      <img src="~/static/img/l4/algo.gif" data-aos="fade-down" alt="euclidean" class="code">
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
      title: "Algebraic Structure and Groups",
    };
  },
  head() {
    return {
      title: "Algebraic Structure and Groups",
    };
  },
};
</script>

<style lang="scss" scoped>
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

span{
  img{
    padding: 0;
    width: 20px;
    height: 20px;
  }
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

p, li {
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
    width: 100%;
    height: auto;
  }
}
</style>
