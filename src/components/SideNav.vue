<template>
  <section id="navigation">
    <div class="row">
      <div class="sidebar-nav">
        <div @mouseover="openSideBar" @mouseleave="closeSideBar" :class="{ 'side-menu': !opened, 'side-menu side-menu-opened': opened }"
			role="navigation">
          <!-- <div id="ninja" class="ninja"></div> -->
          <div class="menu-content">
            <div class="col-xs-12 logo-container" @click="goIntro">
              <img src="http://placehold.it/500x200" alt="Logo Placeholder">
            </div>
            <ul class="nav navbar-nav">
              <li>
                <div class="menu-item first-logo" @click="goIntro">
                  <span class="first-item"> Home </span>
                </div>
              </li>
              <li>
                <div class="menu-item" @click="goPortfolio">
                  <span class="second-item">Portfolio</span>
                </div>
              </li>
              <li>
                <div class="menu-item" @click="goAbout">
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
    </div>
  </section>
</template>

<script>
  export default {
    name: "SideBar",
    data() {
      return {
        opened: false,
        options: {
          onDone: this.closeSideBar,
          onCancel: this.closeSideBar
        }
      }
    },
    methods: {
      openSideBar() {
        this.opened = true
      },
      closeSideBar() {
        this.opened = false
      },
      goIntro() {
        this.$scrollTo(document.getElementById("intro"), 800, this.options, document.documentElement)
      },
      goPortfolio() {
        this.$scrollTo(document.getElementById("portfolio"), 800, this.options, document.documentElement)
      },
      goAbout() {
        this.$scrollTo(document.getElementById("about"), 800, this.options, document.documentElement)
      }
    }
  }

</script>

<style scoped>
  /* make sidebar nav vertical */

  @media (min-width: 768px) {

    .sidebar-nav .side-menu ul {
      float: none;
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

  .sidebar-nav {
    height: 100vh;
    position: absolute;
    left: 0;
  }

  .side-menu {
    height: 100vh;
    background-color: transparent;
    border: none;
    position: fixed;
    width: 5vw;
    opacity: 0;
    overflow: hidden;
    transition: 1s linear all;
    -webkit-transition: 1s linear all;
    z-index: 99999;
  }

  .side-menu.side-menu-opened {
    width: 100vw;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.9);
    transition: 1s linear all;
    -webkit-transition: 1s linear all;
  }

  .side-menu:hover span {
    display: block;
  }
  /* MENU */

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
  /* LOGOS */

  .portfolio-logo {
    margin-top: 10px;
  }

  .logo-container {
    display: flex;
    justify-content: center;
	margin-top:15px;
	z-index:1;
  }

  .logo-container img {
	  cursor:pointer;
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
    -webkit-animation-iteration-count: 10;
    animation-iteration-count: 10;
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

