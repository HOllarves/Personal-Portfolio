<template>
    <div class="row">
        <div class="container-fluid">
            <div class="col-xs-12">
                <app-intro></app-intro>
            </div>
            <div class="col-xs-12">
                <hr class="neon-lights">
                <hr class="neon-lights">
                <app-portfolio></app-portfolio>
            </div>
        </div>
    </div>
</template>

<script>
    import Intro from './Intro'
    import Portfolio from './Portfolio'
    
    export default {
        name: "home",
        components: {
            Intro,
            Portfolio
        }
    }
</script>

<style>
    .neon-lights {
        height: 3px;
        border: none;
        background-color: #FF003E;
        box-shadow: 0 0 25px #FF0700;
    }
</style>
