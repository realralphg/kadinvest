<template>
  <div ref="features" class="wrapper">
    <div class="hold small_container">
      <header class="heading">
        <div class="abt">
          <h2 class="about">Expected</h2>
          <h2 class="about">Outcomes</h2>
        </div>

        <div class="line"></div>
      </header>

      <div class="paragraphs">
        <div class="left">
          <p>
            Participants will have a close-up experience of Kaduna's famed
            effective facilitation processes and the internationally acclaimed
            innovative business environment. This should precipitate a slew of
            fresh international and domestic investors, creating a ripple effect
            which will cause a considerable increase in capital investments in
            Kaduna State over the coming years. Increased local interest is also
            expected, cementing Kaduna's status as the agship state for
            investments in Nigeria and the following:
          </p>
        </div>

        <div class="right">
          <!-- <Cards
            :cards="visibleCards"
            @cardAccepted="handleCardAccepted"
            @cardRejected="handleCardRejected"
            @cardSkipped="handleCardSkipped"
            @hideCard="removeCardFromDeck"
          /> -->
          <!-- <img src="/images/cards.png" alt="" /> -->
          <div class="card">
            <div class="top">
              <span> </span>
              <h6 class="headerrr">Expectation #1</h6>
            </div>

            <p>
              The results of key reforms in the last 7 years gaining
              international recognition should be brought to light and
              consolidated
            </p>
          </div>
        </div>
      </div>

      <div class="tap"></div>

      <div ref="speakers" class="meet">
        <header class="heading">
          <div class="abt">
            <h2 class="about">Meet the</h2>
            <h2 class="about">Speakers</h2>
          </div>

          <div class="line"></div>
        </header>
        <div class="speakers">
          <img class="q-pt-xl" src="/images/speakers.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";

export default {
  components: {
    Cards,
  },
  data() {
    return {
      visibleCards: ["Test", "Vue.js", "Webpack"],
    };
  },

  methods: {
    handleCardAccepted() {
      console.log("handleCardAccepted");
    },
    handleCardRejected() {
      console.log("handleCardRejected");
    },
    handleCardSkipped() {
      console.log("handleCardSkipped");
    },
    removeCardFromDeck() {
      this.visibleCards.shift();
    },
  },
  mounted() {
    this.$store.animate.refs.push(this.$refs);
  },
};
</script>

<style scoped lang="scss">
@mixin _position($position, $args) {
  @each $dir in top, left, bottom, right {
    $i: index($args, $dir);

    @if $i {
      #{$dir}: nth($args, $i + 1);
    }
  }

  position: $position;
}

@mixin absolute($args) {
  @include _position(absolute, $args);
}

@mixin card() {
  border-radius: 15px;
  box-shadow: 0 30px 30px 0 rgba(0, 0, 0, 0.05);
}

@mixin sizing($args, $prefix: "") {
  $width: if(length($args) == 2, nth($args, 1), $args);
  $height: if(length($args) == 2, nth($args, 2), $args);

  #{$prefix}width: $width;
  #{$prefix}height: $height;
}

@mixin flex-center() {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin after() {
  &::after {
    content: "";

    @content;
  }
}

.wrapper {
  background: linear-gradient(180deg, #150f70 0%, #463cdf 100%);
  position: relative;
  margin-bottom: 45%;
}
.about {
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 108.5%;
  text-transform: capitalize;
  color: #fff;
  margin: 0;
}

.line {
  height: 7px;
  background: #fff;
  width: 60%;
  margin-bottom: 1.5rem;
}

.heading {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  justify-content: space-between;
  padding: 4rem 0 2rem;
}

.paragraphs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  padding-bottom: 39rem;
}
.paragraphs p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 190%;
  text-align: left;
  text-transform: capitalize;
  color: #ffffff;
}
.hold {
  position: relative;
}

.meet {
  position: absolute;
  bottom: -45%;
}

.card span {
  width: 20px;
  height: 20px;
  background: #2d25a6;
}
</style>
