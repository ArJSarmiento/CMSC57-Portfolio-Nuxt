<template>
  <section>
    <h1 data-aos="fade-down">About the Author</h1>
    <div class="info" data-aos="fade-down">
      <img src="~/static/img/profile.jpeg" alt="profile" data-aos="fade-down"/>
      <div data-aos="fade-down">
        <h3>&emsp;Hello my name is Arnel Jan Sarmiento! <span>
          A coffee enthusiast and Computer Science student at the
          University of the Philippines Mindanao. I believe
          in the power of learning and teamwork. I am actively looking for
          opportunities to collaborate and create meaningful projects in tech.
        </span></h3>
        <div class="social-buttons">
          <a href="mailto:rneljan@gmail.com" target="_blank" class="social-buttons__button social-button social-button--mail" aria-label="Email">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </a>
          <a href="https://www.facebook.com/Arnel.Jansarmiento.2003/" target="_blank" class="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
          <font-awesome-icon :icon="['fab', 'fa-facebook-f']" />
          </a>
          <a href="https://www.linkedin.com/in/ArJSarmiento/" target="_blank" class="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </a>
          <a href="https://github.com/ArJSarmiento/" target="_blank" class="social-buttons__button social-button social-button--github" aria-label="GitHub">
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </div>
</section>
</template>

<script>
  import aosMixin from "~/mixins.js/aos";
  export default {
    mixins: [aosMixin],
  };
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
  font-size: 2rem;
}
section {
  margin: 10vh 0;
  padding: 0 10vw;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: center;
  justify-items: center;
}

span, h3 {
  text-align: justify;
  font-size: 1rem;
  line-height: 35px;
}

span{
  font-weight: 500;
}

.info {
  display:grid;
  gap: 30px;
  justify-items: center;
  max-width: 500px;
}

img{
  height: 30vh;
  width: auto;
  border-radius: 100px 100px 0 0;
}

.social-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__button {
    margin: 10px 5px 0;
  }
}

$social-button-size: 65px;
$social-button-icon-size: 0.4;
$social-button-background: #fff;
$social-button-active-color: #fff;
$social-button-transition-time: 0.3s;

$social-button-colors: (
  'mail': #212121,
  'facebook': #3b5999,
  'linkedin': #0077b5,
  'github': #6e5494,
);

.social-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  width: $social-button-size;
  height: $social-button-size;
  text-decoration: none;
  border-radius: 100%;
  background: $social-button-background;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    display: block;
    width: 0;
    height: 0;
    border-radius: 100%;
    transition: $social-button-transition-time;
  }

  &:focus,
  &:hover {
    color: $social-button-active-color !important;

    &::after {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      margin-left: calc(-50% - 1px);
    }
  }

  i,
  svg {
    position: relative;
    z-index: 1;
    transition: $social-button-transition-time;
  }

  i {
    font-size: $social-button-size * $social-button-icon-size;
  }

  svg {
    height: percentage($social-button-icon-size);
    width: percentage($social-button-icon-size);
  }

  @each $name, $color in $social-button-colors {
    &--#{$name} {
      color: $color !important;

      &::after {
        background: $color;
      }
    }
  }
}

@media only screen and (max-width: 472px) {
  section {
    padding: 0;
  }
}
</style>
