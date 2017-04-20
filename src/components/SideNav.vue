<template>
  <div class="sidebar-nav">
    <div @mouseover="openSideBar()" @mouseleave="closeSideBar()" :class="{ 'side-menu': !opened, 'side-menu side-menu-opened': opened }" role="navigation">
      <div id="ninja" class="ninja"></div>
      <div class="menu-content">
        <ul class="nav navbar-nav">
            <li>
              <div class="menu-item first-logo">
                <span class="first-item"> Home </span>
              </div>
            </li>
            <li>
              <div class="menu-item">
                <span class="second-item">Portfolio</span>
              </div>
            </li>
            <li>
              <div class="menu-item">
                <span class="third-item"> About </span>
              </div>
            </li>
            <li>
              <div class="menu-item">
                <span class="fourth-item"> Contact me </span>
              </div>
            </li>
            <li>
              <div class="menu-item">
                <span class="fifth-item">Blog</span>
              </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SideBar",
    data() {
      return {
        opened: false
      }
    },
    methods: {
      openSideBar(){
        this.opened = true
      },
      closeSideBar() {
        this.opened = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* make sidebar nav vertical */
  
  @media (min-width: 768px) {
    .sidebar-nav .side-menu ul {
      float: none;
      margin-top:40px;
    }
    .sidebar-nav .side-menu ul:not {
      display: block;
    }
    .sidebar-nav .side-menu li {
      float: none;
      display: block;
    }
    .sidebar-nav .side-menu li i {
      padding-top: 12px;
      padding-bottom: 12px;
      margin: 0 auto;
      font-size: 45px;
      transition: 2s linear all;
    }
  }
   
  /* Making sidenav height 100% */
  
  .sidebar-nav {
    height: 100vh;
    position: absolute;
    left: 0;
  }
  
  .menu-content {
    height: 100%;
  }
  
  .menu-content li {
    cursor: pointer;
    width: 100%;
    transition: 3s linear all;
  }
  
  .menu-content li span.first-item:hover {
    background-color: #FB4D00;
  }
  
  .menu-content li span.second-item:hover {
    background-color: #FF003E;
  }
  
  .menu-content li span.third-item:hover {
    background-color: #FF008B;
  }
  
  .menu-content li span.fourth-item:hover {
    background-color: #AA07EB;
  }
  
  .menu-content li span.fifth-item:hover {
    background-color: #6C0BFF;
  }
  
  .side-menu {
    height: 100vh;
    background-color: transparent;
    border: none;
    position: fixed;
    width: 5vw;
    overflow: hidden;
    transition: 3s linear all;
    -webkit-transition: 3s linear all;
    z-index: 99999;
  }
  
  .side-menu.side-menu-opened {
    width: 100vw;
    background-color:rgba(0,0,0,0.9);
    transition: 3s linear all;
    -webkit-transition: 3s linear all;
  }
  
  .side-menu:hover span {
    display: block;
  }
  
  .portfolio-logo {
    margin-top: 10px;
  }
  
  
  /* Icons */
  
  .menu-item span {
    text-align: center;
    -webkit-animation: fadein 5s;
    -moz-animation: fadein 5s;
    -ms-animation: fadein 5s;
    -o-animation: fadein 5s;
    animation: fadein 5s;
    line-height: 88px;
    font-size: 30px;
    margin: 0 auto;
    display: none;
    color: #FFF;
  }
  
  
  /* Animations */
  
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
  
  
  /** Ninja */
  
  .ninja {
    width: 70px;
    height: 55px;
    background: url('../assets/images/standing-ninja_70x55.png');
    transition: 20s linear left;
    float: right;
    margin-top: 50vh;
    opacity:0;
  }

  .idle .ninja {
    opacity: 1 !important;
  }
  
  .side-menu:hover .ninja {
    background: url('../assets/images/ninja-running-red-1.png');
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-animation: play .8s steps(6) infinite;
    -moz-animation: play .8s steps(6) infinite;
    -ms-animation: play .8s steps(6) infinite;
    -o-animation: play .8s steps(6) infinite;
    animation: play .8s steps(6) infinite;
  }
  
  @-webkit-keyframes play {
    from {
      background-position: 0px;
    }
    to {
      background-position: -420px;
    }
  }
  
  @-moz-keyframes play {
    from {
      background-position: 0px;
    }
    to {
      background-position: -420px;
    }
  }
  
  @-ms-keyframes play {
    from {
      background-position: 0px;
    }
    to {
      background-position: -420px;
    }
  }
  
  @-o-keyframes play {
    from {
      background-position: 0px;
    }
    to {
      background-position: -420px;
    }
  }
  
  @keyframes play {
    from {
      background-position: 0px;
    }
    to {
      background-position: -420px;
    }
  }
  
</style>
