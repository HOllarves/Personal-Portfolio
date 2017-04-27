<template>
    <div class="block">
        <div class="button-background">
            <div class="title">
                {{block.title}}
            </div>
        </div>
        <div class="button-background">
            <div class="description">
                <p>{{block.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BlockCard',
        props: ['block']
    }
</script>

<style scoped>
    .block {
        cursor: pointer;
        padding: 20px;
        margin-bottom: 20px;
    }
    
    .title {
        padding: 20px;
        min-height: 40px;
        color: #FFF;
        border: 3px solid #FFF;
        text-align: center;
        font-size: 20px;
        transition: 1s linear all;
    }
    
    .button-background {
        border: 0.5px solid #FFF;
    }
    
    .title:hover {
        background-color: #FFF;
        color: #000;
        border: 10px solid #000;
        padding: 30px;
    }
    
    .description {
        padding: 20px;
        color: #FFF;
        border: 3px solid #FFF;
        text-align: center;
        font-size: 15px;
        transition: 1s linear all;
        position: relative;
    }
    
    .description:hover {
        color: #000;
        background-color: #FFF;
    }
</style>