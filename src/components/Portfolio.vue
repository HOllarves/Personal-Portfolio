<template>
    <section id="portfolio">
        <div class="portfolio-bg">
            <div class="p5-background col-xs-12">
                <iframe class="p5js-embedd" src="/static/p5/index.html" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="p5-content col-xs-8">
                <div v-if="!showPortfolio" class="title" @click="togglePortfolio">
                    <h1>Portfolio</h1>
                    <span class="disclaimer">Whatch out... Seekers will be lurking around</span>
                </div>
                <div v-if="showPortfolio" class="job-container">
                    <h1>Portfolio</h1>
                    <div v-for="job in jobs">
                        <div class="col-xs-4">
                            <app-job-card :job="job"></app-job-card>
                        </div>
                    </div>
                    <span class="its-ok">It's ok... they can't see you here. Click outside the box to confuse them :)</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Vue from 'vue'
    import JobCard from './JobCard.vue'
    
    Vue.component('app-job-card', JobCard)
    
    export default {
        name: "Portfolio",
        data() {
            return {
                jobs: [{
                    title: "EAD",
                    image: "static/images/eq-logo.jpg",
                    //image: "http://placehold.it/300x300",
                    description: "Where it all started... My first steps into programming and also a place where I made great friends",
                    image_description: "Equilibrio Agencia Digital's logo"
                }, {
                    title: "ActiveMill",
                    image: "static/images/active-mill-logo.png",
                    //image: "http://placehold.it/300x300",
                    description: "Miami based software development",
                    image_description: "Activemill's logo"
                }, {
                    title: "Social Doors",
                    image: "static/images/social-doors-logo.png",
                    //image: "http://placehold.it/300x300",
                    description: "One of the best startups in Buenos Aires, Argentina",
                    image_description: "Social Doors' logo"
                }, {
                    title: "Binary Mango",
                    image: "static/images/binary-logo.png",
                    //image: "http://placehold.it/300x300",
                    description: "Pushing my limits as a programmer, every challenge is new",
                    image_description: "Binary Mango's logo"
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
    
    .job-container {
        -webkit-animation: fadein 5s;
        -moz-animation: fadein 5s;
        -ms-animation: fadein 5s;
        -o-animation: fadein 5s;
        animation: fadein 5s;
    }
    
    .job-container h1 {
        color: #FFF;
        text-align: center;
        font-family: Streamster;
        font-size: 55px;
    }
    
    .disclaimer {
        color: #FFF;
        text-align: right;
    }

    /** Canvas */

    canvas {
        width: 100vw;
    }
    
    
    /** Animations */
    
    
    /* Fade in */
    
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