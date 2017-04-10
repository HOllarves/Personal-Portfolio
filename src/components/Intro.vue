<template>
    <div class="intro-container">
        <h1 id="Intro">
            {{intro}}</h1>
        <h1 class="welcome fadein"> {{ welcome }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                intro: "Hi... My name is Henry Ollarves... I'm a web developer",
                welcome: "Welcome..."
            }
        }
    }
</script>

<style>
    .intro-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    #Intro {
        width: 100%;
        color: #FFF;
        font-size: 35px;
        text-align: center;
        margin: 0 auto;
        font-size: 35px;
    }
    
    .welcome {
        text-align: center;
        -webkit-animation: fadein 10s;
        -moz-animation: fadein 10s;
        -ms-animation: fadein 10s;
        -o-animation: fadein 10s;
        animation: fadein 10s;
        color: #FFF;
    }
    
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
</style>