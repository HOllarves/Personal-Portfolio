<template>
    <div class="job-card">
        <div class="button-background">
            <div class="title">
                {{job.title}}
            </div>
        </div>
        <div class="button-background">
            <div class="description">
                <p>{{job.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JobCard',
        props: ['job']
    }
</script>

<style scoped>
    .job-card {
        cursor: pointer;
        padding: 20px;
        border: 1px dashed #FFF;
        margin-bottom: 20px;
    }
    
    .title {
        padding: 20px;
        margin-bottom: 20px;
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
        font-size: 22px;
        border-top: 10px solid #000;
        border-right: 10px solid #000;
    }
    
    .description {
        padding: 20px;
        color: #FFF;
        border: 3px solid #FFF;
        text-align: justify;
        font-size: 15px;
        transition: 1s linear all;
        position: relative;
    }
    
    .description:hover {
        color: #000;
        background-color: #FFF;
        font-size: 17px;
        text-align: center;
        border-top: 10px solid #000;
        border-right: 10px solid #000;
    }
</style>