<template>
  <div class="q-px-lg timeline q-pb-md">
    <q-timeline
      class="q-pb-xl small_container"
      :layout="layout"
      color="secondary"
    >
      <q-timeline-entry side="left">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <img src="/images/goal1.png" alt="" />
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="left_div">
              <h6>Showcase</h6>
              <p>
                Showcasing Kaduna State as Nigeria's leading investment
                destination in at least four priority sectors: agro-processing,
                ICT, mining and manufacturing.
              </p>
            </div>
          </div>
        </div>
      </q-timeline-entry>
      <q-timeline-entry side="right" subtitle="next" class="give_height">
      </q-timeline-entry>

      <q-timeline-entry
        side="right"
        class="healthy"
        avatar="/images/kha.png"
        icon="fiber_dvr"
      >
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="right_div">
              <h6>Healthy Competition</h6>
              <p>
                Articulating the investment advantages across the Local
                Governments in the State to stimulate healthy competition and
                jumpstart local economies.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <img src="/images/healthy.png" alt="" />
          </div>
        </div>
      </q-timeline-entry>
      <q-timeline-entry side="right" subtitle="next" class="give_height">
      </q-timeline-entry>

      <!-- <q-timeline-entry heading>November, 2017</q-timeline-entry> -->

      <q-timeline-entry side="left">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <img src="/images/job.png" alt="" />
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="left_div">
              <h6>Investment Ideas</h6>
              <p>
                Highlighting the State's commitment towards prioritizing
                innovative investment ideas
              </p>
            </div>
          </div>
        </div>
      </q-timeline-entry>
      <q-timeline-entry side="right" subtitle="next" class="give_height">
      </q-timeline-entry>

      <q-timeline-entry side="right">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="right_div">
              <h6>Engaging Partners</h6>
              <p>
                Engaging partners for basic infrastructure towards full
                automation of processes.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <img src="/images/job.png" alt="" />
          </div>
        </div>
      </q-timeline-entry>
      <q-timeline-entry side="right" subtitle="next" class="give_height">
      </q-timeline-entry>

      <q-timeline-entry side="left" color="orange" icon="done_all">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <img src="/images/job.png" alt="" />
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="left_div">
              <h6>Discussions</h6>
              <p>
                Facilitating more robust discussions between investors and the
                government with a view to building linkages for investments and
                job creation
              </p>
            </div>
          </div>
        </div>
      </q-timeline-entry>
      <q-timeline-entry side="right" subtitle="next" class="give_height">
      </q-timeline-entry>

      <q-timeline-entry side="right">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="right_div">
              <h6>Industrialization</h6>
              <p>
                Paving the way for industrialization and tech-related
                investments in the State.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <img src="/images/industry.png" alt="" />
          </div>
        </div>
      </q-timeline-entry>
      <q-timeline-entry side="right" subtitle="next" class="give_height">
      </q-timeline-entry>

      <q-timeline-entry side="right">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <img src="/images/job.png" alt="" />
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="left_div">
              <h6>Job Creation</h6>
              <p>
                Continuous improvement of the business environment for economic
                viability and creation of jobs.
              </p>
            </div>
          </div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry class="give_height" side="right"> </q-timeline-entry>
      <!-- <q-timeline-entry class="give_height" side="right"> </q-timeline-entry> -->
    </q-timeline>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    return {
      layout: computed(() => {
        return $q.screen.lt.sm
          ? "dense"
          : $q.screen.lt.md
          ? "comfortable"
          : "loose";
      }),
    };
  },
};
</script>

<style scoped>
.timeline {
  position: relative;
  overflow: hidden;
  padding-bottom: 5rem;
}
img {
  height: 300px;
}

.timeline h6 {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 117%;
  text-align: left;
  color: #00a250;
  margin-bottom: 1rem;
}
.timeline p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 148%;
  color: #000000;
  text-align: left;
}

.left_div {
  padding-left: 7.5rem;
  padding-top: 5rem;
}

.right_div {
  padding-right: 7.5rem;
  padding-top: 5rem;
}

.timeline::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 70%;
  left: 0;
  top: 10%;
  background: url("/images/backdrop.png") no-repeat;
}
.timeline::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 30%;
  right: 0;
  top: 70%;
  background: url("/images/drop.png") no-repeat;
}
.give_height {
  height: 100px;
}
@media (max-width: 1024px) {
  .left_div {
    padding-left: 5.5rem;
  }

  .right_div {
    padding-right: 5.5rem;
  }
}
</style>
