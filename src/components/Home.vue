<template>
    <section id="home">
        <div class="row">
            <div class="intro-container col-xs-12">
                <app-intro></app-intro>
            </div>
            <div class="portfolio-container col-xs-12">
                <hr class="neon-lights">
                <hr class="neon-lights">
                <app-portfolio></app-portfolio>
            </div>
            <div class="about-container col-xs-12">
                <hr class="neon-lights">
                <hr class="neon-lights">
                <app-about></app-about>
            </div>
        </div>
    </section>
</template>

<script>
    import Intro from './Intro'
    import Portfolio from './Portfolio'
    import About from './About'
    
    export default {
        name: "home",
        components: {
            Intro,
            Portfolio,
            About
        }
    }
</script>

<style scoped>
    .neon-lights {
        height: 3px;
        border: none;
        background-color: #FF003E;
        box-shadow: 0 0 25px #FF0700;
    }
    .portfolio-container {
        background-color: #000;
    }
    .about-container {
        background: url('../assets/images/about-bg.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
