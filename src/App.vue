<template>
  <div id="app">
    <app-sidenav></app-sidenav>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }

</script>

<style>

  html {
    overflow: hidden;
  }

  @font-face {
    font-family: Streamster;
    src: url('/static/fonts/Streamster.ttf');
  }

  @font-face {
    font-family: VCR;
    src: url('/static/fonts/Vcr_OSD.ttf');
  }
  
  #app {
    height: 100vh;
    background: url('./assets/images/synth-bg.jpg') no-repeat center center;
    overflow-x: hidden;
    background-size: cover;
    font-family: Streamster;
  }

</style>
