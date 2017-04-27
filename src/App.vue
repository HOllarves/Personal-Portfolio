<template>
  <div id="app">
    <div class="container-fluid">
      <app-sidenav></app-sidenav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }

</script>

<style>

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
    background-size: cover;
    font-family: Streamster;
  }

</style>
