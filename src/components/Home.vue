<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 intro-container">
                <app-intro></app-intro>
            </div>
            <div class="col-xs-12 portfolio-container">
                <hr class="neon-lights">
                <hr class="neon-lights">
                <app-portfolio></app-portfolio>
            </div>
            <div class="col-xs-12 about-container">
                <hr class="neon-lights">
                <hr class="neon-lights">
                <app-about></app-about>
            </div>
        </div>
    </div>
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
