<template>
  <div class="sidebar-nav">
    <div class="navbar navbar-default idle" role="navigation">
      <div id="ninja" class="ninja"></div>
      <div class="menu-content">
        <ul class="nav navbar-nav">
          <div class="menu-container">
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
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* make sidebar nav vertical */
  
  @media (min-width: 768px) {
    .sidebar-nav .navbar .navbar-collapse {
      padding: 0;
      max-height: none;
    }
    .sidebar-nav .navbar ul {
      float: none;
    }
    .sidebar-nav .navbar ul:not {
      display: block;
    }
    .sidebar-nav .navbar li {
      float: none;
      display: block;
    }
    .sidebar-nav .navbar li i {
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
    height: 100vh;
  }
  
  .menu-content li {
    cursor: pointer;
    width: 100vw;
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
  
  .navbar.navbar-default {
    height: 100vh;
    background-color: transparent;
    opacity: 0.9;
    border: none;
    position: fixed;
    width: 5vw;
    overflow: hidden;
    transition: 5s linear width;
    z-index: 99999;
  }
  
  .navbar.navbar-default:hover {
    width: 100vw;
    overflow: visible;
  }
  
  .navbar.navbar-default:hover span {
    display: block;
  }
  
  .portfolio-logo {
    margin-top: 10px;
  }
  
  
  /* Icons */
  
  .menu-container {
    width: 100%;
  }
  
  .menu-container span {
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
  
  .navbar.navbar-default:hover .ninja {
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
