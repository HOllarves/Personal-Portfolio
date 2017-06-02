<template>
  <div class="portfolio-bg">
    <div class="p5-background col-xs-12">
      <iframe class="p5js-embedd" src="/static/p5/index.html" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="p5-content col-xs-8">
      <div v-if="!showPortfolio" class="title" @click="togglePortfolio">
        <h1>Portfolio</h1><span class="disclaimer">Whatch out... Seekers will be lurking around</span>
      </div>
      <div v-if="showPortfolio" class="block-container">
        <h1>Portfolio</h1>
        <div class="row">
          <div v-for="block in blocks">
            <div class="col-xs-4">
              <app-block-card :block="block"></app-block-card>
            </div>
          </div><span class="its-ok">It's ok... they can't see you here. Click outside the box to confuse them :)</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BlockCard from './BlockCard.vue'

  Vue.component('app-block-card', BlockCard)

  export default {
    name: "PortfolioSelect",
    data() {
      return {
        blocks: [{
            title: "Work History",
            description: "Wanna check all the amazing people I've worked with?",
            path: "work-history"
          },
          {
            title: "Projects",
            description: "My own creations... my babies...",
          },
          {
            title: "Certs",
            description: "I just can't have enough of these...",
          },
          {
            title: "My Stuff",
            description: "Just my random stuff. :)",
          }
        ],
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
  .portfolio-bg,
  .p5-background,
  iframe {
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 0;
  }

  .p5-content {
    padding: 20px;
    border: 1px solid #FFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: VCR;
    cursor: pointer;
    transition: 5s linear all;
  }

  .p5-content:active {
    background: -webkit-linear-gradient(#FB4D00, #FF003E, #000);
    background: -o-linear-gradient(#FB4D00, #FF003E, #000);
    background: -moz-linear-gradient(#FB4D00, #FF003E, #000);
    background: linear-gradient(#FB4D00, #FF003E, #000);
  }
  /** Canvas */

  canvas {
    width: 100vw;
  }

  .title {
    color: #FFF;
    text-align: center;
    -webkit-animation: fadein 2s;
    -moz-animation: fadein 2s;
    -ms-animation: fadein 2s;
    -o-animation: fadein 2s;
    animation: fadein 2s;
  }

  .its-ok {
    color: #FFF;
    font-size: 14px;
    position: absolute;
    bottom: 5px;
    right: 5px;
    text-align: right;
  }

  .block-container {
    -webkit-animation: fadein 5s;
    -moz-animation: fadein 5s;
    -ms-animation: fadein 5s;
    -o-animation: fadein 5s;
    animation: fadein 5s;
  }

  .block-container h1 {
    color: #FFF;
    text-align: center;
    font-family: Streamster;
    font-size: 55px;
  }

  .disclaimer {
    color: #FFF;
    text-align: right;
  }
  /* Animations */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  /* Fade out */

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @-moz-keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @-ms-keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @-o-keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

</style>
