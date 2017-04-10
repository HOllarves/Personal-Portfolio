<template>
    <div v-masonry transition-duration="0.3s" item-selector=".item">
        <div v-masonry-tile class="item" v-for="(item, index) in portfolioData">
            <div class="well" :style="{ backgroundImage: 'url(' + item.image + ')' }">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueMasonryPlugin from 'vue-masonry'
    
    Vue.use(VueMasonryPlugin)
    
    export default {
        name: 'Masonry',
        props: ['portfolioData']
    }
</script>

<style scoped>
    .well {
        color: #FFF;
        border-radius: 0;
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: cover;
        border: 1px solid #FF0700;
        font-size: 45px;
        margin-bottom: 0;
        font-family: VCR;
        text-shadow: 0 0 15px #000;
    }
</style>