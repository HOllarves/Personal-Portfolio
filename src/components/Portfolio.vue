<template>
  <section id="portfolio">
    <router-view></router-view>
  </section>
</template>

<script>
  import Vue from 'vue'
  import BlockCard from './BlockCard.vue'

  Vue.component('app-block-card', BlockCard)

  export default {
    name: "Portfolio",
    data() {
      return {
        blocks: [{
          title: "Work History",
          description: "Wanna check all the amazing people I've worked with?",
          path: "/work-history"
        }, {
          title: "Projects",
          description: "My own creations... my babies...",
          path: "/projects"
        }, {
          title: "Certs",
          description: "I just can't have enough of these...",
          path: "/certifications"
        }, {
          title: "My Stuff",
          description: "Just my random stuff. :)",
          path: "/stuff"
        }],
        showPortfolio: false
      }
    },
    methods: {
      togglePortfolio() {
        this.showPortfolio = true;
      }
    }
  }

</script>

<style scoped>


</style>
