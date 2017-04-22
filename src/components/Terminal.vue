<template>
<div class="terminal-container">
    <div class="col-xs-12 terminal-line" v-if="startTerminal">
        <div class="col-xs-1 terminal-start">
        <span>H.0 ></span>
        </div>
        <div class="col-xs-11">
            <vue-typer style="color:#fff" text='.....Starting console....' :type-delay='70' :repeat='0' @completed="terminalHandler"></vue-typer>
        </div>
    </div>
    <div class="col-xs-12 terminal-line" v-if="secondLine">
        <div class="col-xs-1 terminal-start">
        <span>H.0 ></span>
        </div>
        <div class="col-xs-11">
            <vue-typer style="color:#fff" text="ache = new Programmer('Henry Ollarves')" :type-delay='70' :repeat='0' @completed="terminalHandler"></vue-typer>
        </div>
    </div>
    <div class="col-xs-12 terminal-line" v-if="thirdLine">
        <div class="col-xs-1 terminal-start">
        <span>---></span>
        </div>
        <div class="col-xs-11">
            <vue-typer style="color:#fff" text="new Programmer instanciated ---> ache" :type-delay='70' :repeat='0' @completed="terminalHandler"></vue-typer>
        </div>
    </div>
    <div class="col-xs-12 terminal-line" v-if="fourthLine">
        <div class="col-xs-1 terminal-start">
        <span>H.0 ></span>
        </div>
        <div class="col-xs-11">
            <vue-typer style="color:#fff" text="ache.about()" :type-delay='70' :repeat='0' @completed="terminalHandler"></vue-typer>
        </div>
    </div>
    <div class="col-xs-12 terminal-line" v-if="fifthLine">
        <div class="col-xs-1 terminal-start">
        <span>---></span>
        </div>
        <div class="col-xs-11">
            <vue-typer style="color:#fff" :text="description" :type-delay='70' :repeat='0' @completed="terminalHandler"></vue-typer>
        </div>
    </div>
</div>
</template>

<script>

import {VueTyper} from 'vue-typer'

    export default {
        name: "Terminal",
        data(){
            return {
                terminalCount: 0,
                startTerminal: true,
                secondLine: false,
                thirdLine: false,
                fourthLine: false,
                fifthLine: false,
                description: `Hi! My name is Henry Ollarves. I'm a 25 year old venezuelan currently living in the amazing city of Barcelona, Spain. I dived into programming about 5 years ago. Since then, I haven't been able to stop for a second. I'm a creative person, as a programmer and as a musician. Liberal Studies graduated, I pretty much can't stop studying and finding new things that motivate me to be better everyday. Always up for the next challenge, I can't quite say no to a proposal, specially if it's tough and even more if we're the  first to try it. Team worker, collaborator, and most importantly a friend. Hope you like my website :)`
            }
        },
        methods: {
            terminalHandler(){
                if (this.terminalCount == 0) {
                    this.secondLine = true
                }
                if(this.terminalCount == 1) {
                    this.thirdLine = true
                }
                if(this.terminalCount == 2 ){
                    this.fourthLine = true
                }
                if(this.terminalCount == 3) {
                    this.fifthLine = true
                }
                this.terminalCount += 1
            }
        },
        components: {
            VueTyper
        }
    }
</script>

<style>

    .typed {
        color: #fff !important;
    }
    .terminal-line {
        display: flex;
        flex-align: center;
    }
    .terminal-line p {
        font-size: 14px;
        color: #fff;
        margin-bottom: 0;
    }
    .terminal-start {
        color:#fff;
        display: flex;
    }

</style>