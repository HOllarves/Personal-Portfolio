<template>
    <section id="about">
        <div class="about-container col-xs-12">
            <div class="profile-container col-xs-12">
                <div class="col-xs-2 profile-image-container">
                    <img class="img-responsive" src="../assets/images/about-profile-placeholder.jpg" alt="Profile placeholder">
                </div>
                <div class="col-xs-4 col-xs-offset-6">
                    <h1 class="profile-title">Henry Ollarves</h1>
                </div>
            </div>
            <div class="about-text-container col-xs-12">
                <app-terminal></app-terminal>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style>
    #about {
        font-family: VCR;
        height: calc(100vh - 20px);
    }
    .about-container {
        display: block;
    }
    .about-text-container {
        padding: 15px;
        border: 4px solid #fff;
        background-color: #000;
    }
    .profile-container {
        margin-bottom:20px;
    }
    .profile-container .profile-title {
        color:#fff;
        font-family: Streamster;
        font-size: 46px;
    }
    .profile-container img {
        border-radius: 50%;
        border: 2px solid #fff;
    }

    /* @group Blink */
    .blink {
        -webkit-animation: blink .75s linear infinite;
        -moz-animation: blink .75s linear infinite;
        -ms-animation: blink .75s linear infinite;
        -o-animation: blink .75s linear infinite;
        animation: blink .75s linear infinite;
    }
    @-webkit-keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 1; }
        50.01% { opacity: 0; }
        100% { opacity: 0; }
    }
    @-moz-keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 1; }
        50.01% { opacity: 0; }
        100% { opacity: 0; }
    }
    @-ms-keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 1; }
        50.01% { opacity: 0; }
        100% { opacity: 0; }
    }
    @-o-keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 1; }
        50.01% { opacity: 0; }
        100% { opacity: 0; }
    }
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 1; }
        50.01% { opacity: 0; }
        100% { opacity: 0; }
    }
    /* @end */
</style>