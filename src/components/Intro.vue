<template>
    <section id="intro">
        <div class="intro-container">
            <h1 id="intro-shuffle"> {{intro}}</h1>
            <h1 class="welcome fade-in"> {{ welcome }}</h1>
            <div class="intro-footer fade-in-20">
                <h2>Come!<span class="arrow-down" @click="goPortfolio">&darr; </span></h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Intro",
        data() {
            return {
                intro: "Hi... My name is Henry Ollarves... I'm a web developer",
                welcome: "Welcome..."
            }
        },
        methods: {
            goPortfolio(){
                this.$scrollTo(document.getElementById("portfolio"), 1000)
            }
        }
    }
</script>

<style scoped>
    .intro-container {
        position: relative;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .intro-footer {
        position: absolute;
        bottom: 0;
    }

    .intro-footer h2 {
        color: #fff;
        font-size: 35px;
    }

    .arrow-down {
        margin-left: 20px;
        cursor: pointer;
    }

    .fade-in {
        -webkit-animation: fadein 10s;
        -moz-animation: fadein 10s;
        -ms-animation: fadein 10s;
        -o-animation: fadein 10s;
        animation: fadein 10s;
    }

    .fade-in-20 {
        -webkit-animation: fadein 20s;
        -moz-animation: fadein 20s;
        -ms-animation: fadein 20s;
        -o-animation: fadein 20s;
        animation: fadein 20s;
    }
    
    #intro-shuffle {
        width: 100%;
        color: #FFF;
        font-size: 35px;
        text-align: center;
        margin: 0 auto;
        font-size: 35px;
    }
    
    .welcome {
        text-align: center;
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