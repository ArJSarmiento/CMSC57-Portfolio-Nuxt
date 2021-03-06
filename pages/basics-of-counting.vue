<template>
  <main>
    <h2>{{ title }}</h2>
    <section>
        <img src="~/assets/t1.png" data-aos="fade-down" alt="counting"/>
      <p data-aos="fade-down">
        &emsp;The starting lessons of Discrete Mathematical Structures in Computer
        Science II were certainly not what I have expected. At first, I thought
        we would dive deeper into the previous semester’s topic on linear
        algebra and its applications in computer science. I was surprised when
        we started off with a much easier topic of Basic Counting Principles.
        Little did I know that this lesson would be the foundation of what was
        yet to come.
      </p>
      <p data-aos="fade-down">
        &emsp;The main principles introduced in this lesson were the Product Rule and
        the Sum Rule. The product rule or multiplication principle states that
        if there are <i>a</i> ways of doing something and <i>b</i> ways of doing another
        thing, then there are <i>a</i> · <i>b</i> ways of performing both actions.
      </p>
        <img src="~/static/img/l1/productRule.png" data-aos="fade-down" alt="product rule">
      <p data-aos="fade-down">
        &emsp;The Sum rule, on the other hand, states that if <i>a</i> task can be done
        either in one of <i>a</i> ways or in one of <i>b</i> ways, where none of the set of <i>a</i>
        ways is the same as any of the set of <i>b</i> ways, then there are <i>a</i>+<i>b</i> ways to
        do the task.
      </p>
        <img src="~/static/img/l1/sumRule.svg" data-aos="fade-down" alt="sum rule">
      <p data-aos="fade-down" >
        &emsp;These principles can be applied in almost any field of mathematics but in the course, it is often used in
        combinations and permutations. I was fascinated by how such a simple principle could be applied in so many
        industries.
        One common problem that intrigued me was the one below:
      </p>
      <code>
        How many strings are there of 5 lowercase alphabet letters that have the letter ‘x’ in them? The same letter can repeat multiple times in the same string?
      </code>
      <p data-aos="fade-down">
        &emsp;Since repeating is allowed, the number of strings of 5 lowercase alphabet letters is 26<sup>5</sup>. To get the
        string with an x in them we must subtract this with the number of strings without an x which is
        25<sup>5</sup>. Therefore, the answer is 26<sup>5</sup>-25<sup>5</sup> which is equal to 2,115,751.
      </p>
      <p data-aos="fade-down">
        &emsp;As we seen above, the answers to these questions come by the millions. Assuming that this was a password for an
        online system it's amazing how unlikely a user can just guess a password considering how large the result is.
        It's much more mind-blowing if you realize that we know this fact by using the simple rules we
        learned above.
      </p>
      <img src="~/static/img/l1/password.jpg" data-aos="fade-down" alt="password" >
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
      title: "Basics of Counting",
    };
  },
  head() {
    return {
      title: "Basics of Counting",
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

code{
  text-align: center;
  margin:10px 0;
}

h2{
  justify-content: center;
  text-align: center;
  font-weight: 600;
  line-height: 30px;
}

p{
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

@media only screen and (max-width: 720px) {
  main {
    margin-bottom: 5vh;
    padding: 0 7.5vw;
  }
  img {
    width: 100% ;
    height: auto ;
    max-height:1000vh;
  }
}
</style>
