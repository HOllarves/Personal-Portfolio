webpackJsonp([1],[,,,,,,,,,function(e,t,i){i(64);var s=i(0)(i(23),i(80),null,null);e.exports=s.exports},function(e,t,i){i(61);var s=i(0)(i(26),i(77),"data-v-4e350285",null);e.exports=s.exports},,,,function(e,t,i){"use strict";var s=i(1),n=i(83),o=i(72),a=i.n(o);s.a.use(n.a),t.a=new n.a({routes:[{path:"/",component:a.a}]})},function(e,t,i){i(60);var s=i(0)(i(20),i(76),null,null);e.exports=s.exports},function(e,t,i){i(65);var s=i(0)(i(21),i(81),null,null);e.exports=s.exports},function(e,t,i){i(62);var s=i(0)(i(25),i(78),"data-v-5316cb7c",null);e.exports=s.exports},function(e,t,i){i(63);var s=i(0)(i(27),i(79),"data-v-7d5a00c9",null);e.exports=s.exports},,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{sources:{type:Array,required:!0},img:{type:String}},data:function(){return{videoRatio:null}},ready:function(){var e=this;this.setImageUrl(),this.setContainerHeight(),this.videoCanPlay()&&(this.$els.video.oncanplay=function(){e.videoRatio=e.$els.video.videoWidth/e.$els.video.videoHeight,console.log(e.videoRatio),e.setVideoSize(),e.$els.video.style.visibility="visible"}),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.setContainerHeight(),this.videoCanPlay()&&this.setVideoSize()},videoCanPlay:function(){return!!this.$els.video.canPlayType},setImageUrl:function(){this.img&&(this.$el.style.backgroundImage="url("+this.img+")")},setContainerHeight:function(){this.$el.style.height=window.innerHeight+"px"},setVideoSize:function(){var e,t;this.$el.offsetWidth/this.$el.offsetHeight>this.videoRatio?e=this.$el.offsetWidth:t=this.$el.offsetHeight,this.$els.video.style.width=e?e+"px":"auto",this.$els.video.style.height=t?t+"px":"auto"},getMediaType:function(e){return"video/"+e.split(".").pop()}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(9),n=i.n(s),o=i(10),a=i.n(o);t.default={name:"home",components:{Intro:n.a,Portfolio:a.a}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{intro:"Hi... My name is Henry Ollarves... I'm a web developer",welcome:"Welcome..."}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"JobCard",props:["job"]}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1),n=i(82);s.a.use(n.a),t.default={name:"Masonry",props:["portfolioData"]}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1),n=i(73),o=i.n(n);s.a.component("app-job-card",o.a),t.default={name:"Portfolio",data:function(){return{jobs:[{title:"EAD",image:"static/images/eq-logo.jpg",description:"Where it all started... My first steps into programming and also a place where I made great friends",image_description:"Equilibrio Agencia Digital's logo"},{title:"ActiveMill",image:"static/images/active-mill-logo.png",description:"Miami based software development",image_description:"Activemill's logo"},{title:"Social Doors",image:"static/images/social-doors-logo.png",description:"One of the best startups in Buenos Aires, Argentina",image_description:"Social Doors' logo"},{title:"Binary Mango",image:"static/images/binary-logo.png",description:"Pushing my limits as a programmer, every challenge is new",image_description:"Binary Mango's logo"}],showPortfolio:!1}},methods:{mouseOver:function(){console.log("mouseenter"),this.showPortfolio=!0}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"SideBar",data:function(){return{opened:!1}},methods:{openSideBar:function(){this.opened=!0},closeSideBar:function(){this.opened=!1}}}},,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1),n=i(16),o=i.n(n),a=i(14),r=i(9),l=i.n(r),c=i(18),u=i.n(c),d=i(10),v=i.n(d),p=i(17),f=i.n(p),m=i(19),_=i.n(m),h=i(15),g=i.n(h);s.a.config.productionTip=!1,s.a.component("app-sidenav",u.a),s.a.component("app-masonry",f.a),s.a.component("app-portfolio",v.a),s.a.component("app-intro",l.a),s.a.component("video-bg",g.a),s.a.use(_.a),new s.a({el:"#app",router:a.a,template:"<App/>",components:{App:o.a,SideNav:u.a,Masonry:f.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,function(e,t,i){var s=i(0)(i(28),null,null,null);e.exports=s.exports},function(e,t,i){i(59);var s=i(0)(i(22),i(75),null,null);e.exports=s.exports},function(e,t,i){i(58);var s=i(0)(i(24),i(74),"data-v-0fb2ac6a",null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"job-card"},[i("div",{staticClass:"button-background"},[i("div",{staticClass:"title"},[e._v("\n            "+e._s(e.job.title)+"\n        ")])]),e._v(" "),i("div",{staticClass:"button-background"},[i("div",{staticClass:"description"},[i("p",[e._v(e._s(e.job.description))])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12"},[i("app-intro")],1),e._v(" "),i("div",{staticClass:"col-xs-12"},[i("hr",{staticClass:"neon-lights"}),e._v(" "),i("hr",{staticClass:"neon-lights"}),e._v(" "),i("app-portfolio")],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"VideoBg"},[i("video",{directives:[{name:"el",rawName:"v-el:video",arg:"video"}],attrs:{autoplay:"",loop:"",muted:""}},e._l(e.sources,function(t){return i("source",{attrs:{src:t,type:e.getMediaType(t)}})})),e._v(" "),i("div",{staticClass:"VideoBg__content"},[e._t("default")],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"portfolio-bg"},[i("div",{staticClass:"p5-background col-xs-12"},[i("iframe",{staticClass:"p5js-embedd",attrs:{src:"/static/p5/index.html",frameborder:"0",allowfullscreen:""}})],1),e._v(" "),i("div",{staticClass:"p5-content col-xs-8"},[e.showPortfolio?e._e():i("div",{staticClass:"title",on:{click:function(t){e.mouseOver()}}},[i("h1",[e._v("Portfolio")]),e._v(" "),i("span",{staticClass:"disclaimer"},[e._v("Whatch out... Seekers will be lurking around")])]),e._v(" "),e.showPortfolio?i("div",{staticClass:"job-container"},[i("h1",[e._v("Portfolio")]),e._v(" "),e._l(e.jobs,function(e){return i("div",[i("div",{staticClass:"col-xs-4"},[i("app-job-card",{attrs:{job:e}})],1)])}),e._v(" "),i("span",{staticClass:"its-ok"},[e._v("It's ok... they can't see you here. Click outside the box to confuse them :)")])],2):e._e()])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"masonry",rawName:"v-masonry"}],attrs:{"transition-duration":"0.3s","item-selector":".item"}},e._l(e.portfolioData,function(t,s){return i("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],staticClass:"item"},[i("div",{staticClass:"well",style:{backgroundImage:"url("+t.image+")"}},[e._v("\n            "+e._s(t.title)+"\n        ")])])}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sidebar-nav"},[i("div",{class:{"side-menu":!e.opened,"side-menu side-menu-opened":e.opened},attrs:{role:"navigation"},on:{mouseover:function(t){e.openSideBar()},mouseleave:function(t){e.closeSideBar()}}},[i("div",{staticClass:"ninja",attrs:{id:"ninja"}}),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menu-content"},[i("ul",{staticClass:"nav navbar-nav"},[i("li",[i("div",{staticClass:"menu-item first-logo"},[i("span",{staticClass:"first-item"},[e._v(" Home ")])])]),e._v(" "),i("li",[i("div",{staticClass:"menu-item"},[i("span",{staticClass:"second-item"},[e._v("Portfolio")])])]),e._v(" "),i("li",[i("div",{staticClass:"menu-item"},[i("span",{staticClass:"third-item"},[e._v(" About ")])])]),e._v(" "),i("li",[i("div",{staticClass:"menu-item"},[i("span",{staticClass:"fourth-item"},[e._v(" Contact me ")])])]),e._v(" "),i("li",[i("div",{staticClass:"menu-item"},[i("span",{staticClass:"fifth-item"},[e._v("Blog")])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"intro-container"},[i("h1",{attrs:{id:"Intro"}},[e._v("\n        "+e._s(e.intro))]),e._v(" "),i("h1",{staticClass:"welcome fadein"},[e._v(" "+e._s(e.welcome))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("app-sidenav"),e._v(" "),i("router-view")],1)},staticRenderFns:[]}}],[29]);
//# sourceMappingURL=app.dd3335f29cb82022104a.js.map