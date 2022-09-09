<template>
  <div class="wrapper">
    <div class="team">
      <h2>Meet The Team</h2>
      <p class="desc">Our tranined staff</p>
      <div class="grid container">
        <figure class="effect-sadie">
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg"
            alt="img02"
          />
          <figcaption>
            <h2>
              Holy Fortune Ahmed <br />
              <span>Sadie</span>
            </h2>
            <p>
              <i class="ri-facebook-fill"></i> <i class="ri-google-fill"></i>
              <i class="ri-linkedin-fill"></i>
            </p>
          </figcaption>
        </figure>
        <figure class="effect-sadie">
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/14.jpg"
            alt="img14"
          />
          <figcaption>
            <h2>
              Holy Fortune Ahmed <br />
              <span>Sadie</span>
            </h2>
            <p>
              <i class="ri-facebook-fill"></i> <i class="ri-google-fill"></i>
              <i class="ri-linkedin-fill"></i>
            </p>
          </figcaption>
        </figure>
        <figure class="effect-sadie">
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/14.jpg"
            alt="img14"
          />
          <figcaption>
            <h2>
              Holy Fortune Ahmed <br />
              <span>Sadie</span>
            </h2>
            <!-- <h2>Holy <span>Sadie</span></h2> -->
            <p>
              <i class="ri-facebook-fill"></i> <i class="ri-google-fill"></i>
              <i class="ri-linkedin-fill"></i>
            </p>
          </figcaption>
        </figure>
        <figure class="effect-sadie">
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/14.jpg"
            alt="img14"
          />
          <figcaption>
            <h2>
              Holy Fortune Ahmed <br />
              <span>Sadie</span>
            </h2>
            <p>
              <i class="ri-facebook-fill"></i> <i class="ri-google-fill"></i>
              <i class="ri-linkedin-fill"></i>
            </p>
          </figcaption>
        </figure>
        <figure class="effect-sadie">
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/14.jpg"
            alt="img14"
          />
          <figcaption>
            <h2>
              Holy Fortune Ahmed <br />
              <span>Sadie</span>
            </h2>
            <p>
              <i class="ri-facebook-fill"></i> <i class="ri-google-fill"></i>
              <i class="ri-linkedin-fill"></i>
            </p>
          </figcaption>
        </figure>
        <figure class="effect-sadie">
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/14.jpg"
            alt="img14"
          />
          <figcaption>
            <h2>
              Holy Fortune Ahmed <br />
              <span>Sadie</span>
            </h2>
            <p>
              <i class="ri-facebook-fill"></i> <i class="ri-google-fill"></i>
              <i class="ri-linkedin-fill"></i>
            </p>
          </figcaption>
        </figure>
        <figure class="effect-sadie">
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/14.jpg"
            alt="img14"
          />
          <figcaption>
            <h2>
              Holy Fortune Ahmed <br />
              <span>Sadie</span>
            </h2>
            <p>
              <i class="ri-facebook-fill"></i> <i class="ri-google-fill"></i>
              <i class="ri-linkedin-fill"></i>
            </p>
          </figcaption>
        </figure>
        <figure class="effect-sadie">
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/14.jpg"
            alt="img14"
          />
          <figcaption>
            <h2>
              Holy Fortune Ahmed <br />
              <span>Sadie</span>
            </h2>
            <p>
              <i class="ri-facebook-fill"></i> <i class="ri-google-fill"></i>
              <i class="ri-linkedin-fill"></i>
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.team {
  padding: 4rem 0 0;
}
.team h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 51.84%;
  color: #005be3;
  text-align: center;
}
p.desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 179.4%;
  color: rgba(51, 51, 51, 0.92);
  text-align: center;
  margin: 1rem 0;
}
.grid {
  position: relative;
  /* margin: 0 auto; */
  padding: 1em 0 4em;
  /* max-width: 1000px; */
  list-style: none;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  gap: 0.65rem;
}

/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 320px;
  max-width: 480px;
  max-height: 360px;
  width: 48%;
  background: #3085a3;
  text-align: center;
  cursor: pointer;
}

.grid figure img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
  height: 300px;
}

.grid figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

.grid figure h2 span {
  font-style: normal;
  font-weight: 400;
  font-size: 11.4185px;
  line-height: 13px;

  color: #ffffff;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}
.grid figure p i {
  font-size: 25px;
  margin: 0 1rem;
}

figure.effect-sadie figcaption::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: -webkit-linear-gradient(
    top,
    rgba(72, 76, 97, 0) 0%,
    rgba(72, 76, 97, 0.8) 75%
  );
  background: linear-gradient(
    to bottom,
    rgba(72, 76, 97, 0) 0%,
    rgba(72, 76, 97, 0.8) 75%
  ); */
  background: linear-gradient(
    to bottom,
    rgba(0, 91, 227, 0) 0%,
    rgba(0, 91, 227, 0.8) 75%
  );
  /* background: rgb(0, 91, 227); */

  content: "";
  opacity: 0;
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
}

figure.effect-sadie h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 19.5746px;
  line-height: 23px;
  /* identical to box height */
  background: linear-gradient(
    181.02deg,
    rgba(0, 91, 227, 0) -73.83%,
    #005be3 85.28%
  );
  color: #ffffff;
  position: absolute;
  bottom: -23%;
  padding: 2rem;
  left: 0;
  width: 100%;
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

figure.effect-sadie figcaption::before,
figure.effect-sadie p {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-sadie p {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
}

figure.effect-sadie:hover h2 {
  color: #fff;
  -webkit-transform: translate3d(0, -120%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, -120%, 0) translate3d(0, -40px, 0);
  background: none;
}

figure.effect-sadie:hover figcaption::before,
figure.effect-sadie:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 0, 0);
}

@media (max-width: 800px) {
  .grid figure {
    min-width: 300px;
    width: 100%;
  }
}
</style>
