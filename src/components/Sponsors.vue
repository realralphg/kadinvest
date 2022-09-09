<template>
  <div class="wrapper section">
    <div class="hold small_container">
      <header class="heading">
        <div class="abt">
          <h2 class="about">Partners &</h2>
          <h2 class="about">Sponsors</h2>
        </div>

        <div class="line"></div>
      </header>

      <div class="sponsors">
        <div class="sponsors_wrap">
          <img src="/images/sponsor1.png" alt="" />
          <img src="/images/sponsor2.png" alt="" />
          <img src="/images/sponsor6.png" alt="" />
          <img src="/images/sponsor4.png" alt="" />
          <img src="/images/sponsor5.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  margin-top: 7rem;
}
.about {
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 108.5%;
  text-transform: capitalize;
  color: #2d25a6;
  margin: 0;
}

.line {
  height: 7px;
  background: #2d25a6;
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

.sponsors_wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  align-items: center;
  gap: 1rem;
}

.sponsors_wrap img {
  width: 100px;
  opacity: 0.7;
  transition: all 0.5s ease-in-out;
}
.sponsors_wrap img:hover {
  opacity: 1;
  transform: scale(1.1);
}
@media (max-width: 800px) {
  .heading {
    flex-wrap: wrap;
  }
  .wrapper {
    margin-top: 3rem;
  }
}
</style>
