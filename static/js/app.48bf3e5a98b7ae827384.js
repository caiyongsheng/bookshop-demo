webpackJsonp([1],{0:function(t,e){},"2SVh":function(t,e){},"2stm":function(t,e){},"3/9G":function(t,e){},"3TWb":function(t,e,a){"use strict";var i=a("Au9i");a.n(i);a("7+uW").default.component(i.Cell.name,i.Cell),e.a={data:function(){return{title:"请登录",isLoginShow:!1,isIconShow:"more",account:"",isShowWarning1:"",pwd:""}},methods:{showDialog:function(t){-1!==t.target.className.indexOf("loginBg")&&(this.isLoginShow=!this.isLoginShow),-1!==t.target.className.indexOf("mint")&&(this.isLoginShow=!this.isLoginShow)},checkAccount:function(){this.changeNav(),""!==this.account&&(/^1[3|4|5|7|8][0-9]{9}$/.test(this.account)||(this.isShowWarning1="请输入正确的手机号码"))},clearWarning:function(){this.changeNav(),this.isShowWarning1=""},changeNav:function(){this.$store.commit("changeNavShow")},goToLogin:function(){if(""===this.isShowWarning1){if(""===this.account||""===this.pwd)return void(this.isShowWarning1="用户名或密码不能为空");this.isLoginShow=!this.isLoginShow,this.title="欢迎 "+this.account,this.isIconShow=!1,a.i(i.Toast)({message:"登录成功",position:"bottom",duration:3e3})}},goToRegister:function(){if(""===this.isShowWarning1){if(""===this.account||""===this.pwd)return void(this.isShowWarning1="用户名或密码不能为空");this.isLoginShow=!this.isLoginShow,this.title="欢迎 "+this.account,this.isIconShow=!1,a.i(i.Toast)({message:"注册成功",position:"bottom",duration:3e3})}}}}},"6xpQ":function(t,e,a){"use strict";function i(t){a("2SVh")}var o=a("tgK5"),s=a("wl8n"),n=a("VU/8"),c=i,r=n(o.a,s.a,c,"data-v-555065f6",null);e.a=r.exports},"7xGO":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bookDetails"},[a("div",{staticClass:"bookImg"},[a("img",{attrs:{src:t.bookDetails.img,alt:"cover"}})]),t._v(" "),a("div",{staticClass:"bookName",domProps:{textContent:t._s(t.bookDetails.title)}}),t._v(" "),a("div",{staticClass:"subTitle",domProps:{textContent:t._s(t.bookDetails.sub1)}}),t._v(" "),a("div",{staticClass:"catalog"},[a("span",{staticClass:"catalogTitle"},[t._v("图书分类：")]),a("div",{staticClass:"catalogContent"},t._l(t.bookDetails.catalog.split(" "),function(e,i){return a("span",{key:i,domProps:{textContent:t._s(e)}})}))]),t._v(" "),a("div",{staticClass:"buyLink"},[a("span",{staticClass:"buyLinkTitle"},[t._v("购买链接：")]),t._v(" "),a("div",{staticClass:"buyLinkContent"},t._l(t.bookDetails.online.split(" "),function(e,i){return a("a",{key:i,attrs:{href:e.slice(e.indexOf(":")+1),target:"_blank"}},[t._v(t._s(e.split(":")[0]))])}))]),t._v(" "),a("div",{staticClass:"introduction"},[a("p",[t._v("图书简介：")]),t._v(t._s(t.bookDetails.sub2))]),t._v(" "),t._m(0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom"},[a("p",[t._v("----到底了哦----")])])}],s={render:i,staticRenderFns:o};e.a=s},"9sPg":function(t,e,a){"use strict";var i=a("mvHQ"),o=a.n(i),s=a("7+uW"),n=a("Au9i");a.n(n);s.default.use(n.InfiniteScroll),s.default.component(n.Spinner.name,n.Spinner),e.a={created:function(){if("[]"===o()(this.$store.state.bookList)){this.$store.dispatch("getDatas",{url:"https://apis.juhe.cn/goodbook/catalog",options:{},method:"jsonp",callBack:function(t,e){t.commit("getBookList",e)}});for(var t=0;t<17;t++){var e=242+t;this.$store.dispatch("getDetails",{id:e,method:"jsonp",index:t})}}},data:function(){return{active:"0",isShowMenu:!1,navTimer:function(){},pageScrollTop:0,navScrollLeft:0,loading:!1,loadingTimer:function(){}}},deactivated:function(){this.pageScrollTop=document.documentElement.scrollTop||document.body.scrollTop,this.navScrollLeft=document.querySelector(".nav-wrap").scrollLeft,this.loading=!0},activated:function(){this.dataLoaded&&(window.scrollTo(0,this.pageScrollTop),document.querySelector(".nav-wrap").scrollLeft=this.navScrollLeft,this.loading=!1)},methods:{activeChange:function(t){this.$store.commit("activeChange",t)},toTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},select:function(t){this.active=t.toString()},scrollAnimate:function(t){var e=this;t=+t;var a=document.querySelector(".nav-wrap"),i=document.querySelectorAll(".nav-wrap ul li"),o=a.scrollLeft,s=i[0].offsetWidth,n=i.length,c=t-2<0?0:s*(t+2>=n?n-5:t-2),r=o>c?-5:5;this.toTop(),clearInterval(this.navTimer),this.navTimer=setInterval(function(){console.log(1),console.log("left"+a.scrollLeft),console.log("new"+c),Math.abs(a.scrollLeft-c)<=Math.abs(r)?(a.scrollLeft=c,clearInterval(e.navTimer)):a.scrollLeft+=r},5)},toggleMenu:function(){this.isShowMenu=!this.isShowMenu},loadMore:function(){var t=this;this.loading=!0;var e=this.activePage,a=+this.$store.state.bookDetails[this.active].pn;setTimeout(function(){t.$store.dispatch("updateDetails",{id:e,method:"jsonp",pn:a+10}),setTimeout(function(){t.loading=!1},2500)},100)},forDetails:function(t,e){this.$store.commit("showBookDetails",{outterIndex:t,innerIndex:e}),this.$router.push({path:"/details"})}},computed:{bookList:function(){return this.$store.state.bookList},bookDetails:function(){return this.$store.state.bookDetails},activePage:function(){return this.$store.getters.activePageNum+242},dataLoaded:function(){return 17===this.bookDetails.length&&17===this.bookList.length}},components:{TabContainer:n.TabContainer,TabContainerItem:n.TabContainerItem},watch:{active:function(){this.scrollAnimate(this.active),this.activeChange(this.active)}}}},CVJt:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.dataLoaded?t._e():a("div",[a("p",{staticClass:"loadingPage"},[a("span",{staticClass:"loadingText"},[t._v("加载中")]),t._v(" "),a("mt-spinner",{attrs:{type:"double-bounce",color:"rgb(38, 162, 255)",size:20}})],1)]),t._v(" "),t.dataLoaded?a("div",[a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"bookListPage",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"50"}},[a("div",{staticClass:"nav-wrap"},[a("ul",[t._l(t.bookList,function(e,i){return a("li",{key:i,class:{selected:t.active===i.toString()},attrs:{"data-id":e.id},domProps:{textContent:t._s(e.catalog)},on:{click:function(e){t.select(i)}}})}),t._v(" "),a("li")],2)]),t._v(" "),a("div",{staticClass:"navMenu"},[a("a",{on:{click:t.toggleMenu}},[a("span",{domProps:{textContent:t._s(t.isShowMenu?"折叠":"展开")}})])]),t._v(" "),a("transition",{attrs:{name:"menu",mode:"out-in"}},[t.isShowMenu?a("div",{staticClass:"bookMenu",on:{click:t.toggleMenu}},[a("div",{staticClass:"menuList"},[a("p",[t._v("为你精选以下标签")]),t._v(" "),a("div",{staticClass:"menuBox"},t._l(t.bookList,function(e,i){return a("a",{key:i,class:{selectedMenu:t.active===i.toString()},domProps:{textContent:t._s(e.catalog)},on:{click:function(e){t.select(i)}}})}))])]):t._e()]),t._v(" "),a("mt-tab-container",{staticClass:"bookslist-wrap",model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.bookList,function(e,i){return a("mt-tab-container-item",{key:i,attrs:{id:i.toString()}},[t._l(t.bookDetails[i].data,function(e,o){return a("a",{key:o,staticClass:"content-main",on:{click:function(e){t.forDetails(i,o)}}},[a("div",{staticClass:"content-left"},[a("img",{attrs:{src:e.img,alt:"cover"}})]),t._v(" "),a("div",{staticClass:"content-right"},[a("h3",{domProps:{textContent:t._s(e.title)}}),t._v(" "),a("div",{staticClass:"content-rightBottom"},[a("span",{staticClass:"reading",domProps:{textContent:t._s(e.reading)}}),t._v(" "),a("span",{staticClass:"goToBuy"},[t._v("点击查看")])])])])}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loadingPage"},[a("span",{staticClass:"loadingText"},[t._v("加载中")]),t._v(" "),a("mt-spinner",{attrs:{type:"triple-bounce",color:"rgb(38, 162, 255)",size:15}})],1)],2)}))],1)]):t._e()])},o=[],s={render:i,staticRenderFns:o};e.a=s},"DbT+":function(t,e,a){"use strict";function i(t){a("2stm")}var o=a("m+ok"),s=a("sGyw"),n=a("VU/8"),c=i,r=n(o.a,s.a,c,"data-v-22b846e1",null);e.a=r.exports},IcnI:function(t,e,a){"use strict";var i=a("Dd8w"),o=a.n(i),s=a("Gu7T"),n=a.n(s),c=a("7+uW"),r=a("NYxO");c.default.use(r.a),e.a=new r.a.Store({state:{bookList:[],bookDetails:[],activePage:"0",isNavShow:!0,showDetails:{outterIndex:0,innerIndex:0}},mutations:{changeNavShow:function(t){t.isNavShow=!t.isNavShow},activeChange:function(t,e){t.activePage=e},getBookList:function(t,e){t.bookList=e.body.result.sort(function(t){return function(e,a){var i=e[t],o=a[t];return isNaN(Number(i))||isNaN(Number(o))||(i=Number(i),o=Number(o)),i<o?-1:i>o?1:0}}("id"))},getBookDetails:function(t,e){t.bookDetails.splice(e.index,0,e.data.body.result)},updateBookDetails:function(t,e){var a;(a=t.bookDetails[this.getters.activePageNum].data).push.apply(a,n()(e.body.result.data)),t.bookDetails[this.getters.activePageNum].pn=e.body.result.pn},showBookDetails:function(t,e){t.showDetails.outterIndex=e.outterIndex,t.showDetails.innerIndex=e.innerIndex}},actions:{getDatas:function(t,e){c.default.http({url:e.url,params:o()({key:"d89ed133151c0011a104f4082fd2ad40"},e.options),method:e.method}).then(function(a){null===a.body.result?c.default.http({url:e.url,params:o()({key:"d89ed133151c0011a104f4082fd2ad40"},e.options),method:"get"}).then(function(a){e.callBack(t,a)},function(t){console.log(t)}):e.callBack(t,a)},function(a){console.log(a),c.default.http({url:e.url,params:o()({key:"d89ed133151c0011a104f4082fd2ad40"},e.options),method:"get"}).then(function(a){e.callBack(t,a)},function(t){console.log(t)})})},getDetails:function(t,e){t.dispatch("getDatas",{url:"https://apis.juhe.cn/goodbook/query",options:{catalog_id:e.id,pn:0,rn:10},method:"jsonp",callBack:function(a,i){t.commit("getBookDetails",{index:e.index,data:i})}})},updateDetails:function(t,e){t.dispatch("getDatas",{url:"https://apis.juhe.cn/goodbook/query",options:{catalog_id:e.id,pn:e.pn,rn:10},method:"jsonp",callBack:function(e,a){t.commit("updateBookDetails",a)}})}},getters:{selectedPart:function(t){switch(t.route.fullPath){case"/home":return"首页";case"/books":return"发现";case"/myCenter":return"个人中心";case"/details":return"图书详情";case"/about":return"关于"}},activePageNum:function(t){return+t.activePage}}})},M93x:function(t,e,a){"use strict";function i(t){a("PF6T")}var o=a("xJD8"),s=a("z9M4"),n=a("VU/8"),c=i,r=n(o.a,s.a,c,"data-v-55119dfc",null);e.a=r.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),o=a("Au9i"),s=a.n(o),n=a("d8/S"),c=(a.n(n),a("M93x")),r=a("YaEn"),l=a("QKTF"),u=(a.n(l),a("IcnI")),d=a("9JMe"),m=(a.n(d),a("ORbq"));a("qs/E");i.default.use(s.a),i.default.use(m.a),a.i(d.sync)(u.a,r.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:r.a,store:u.a,template:"<App/>",components:{App:c.a}})},PF6T:function(t,e){},Shfp:function(t,e,a){"use strict";e.a={data:function(){return{bookDetails:this.$store.state.bookDetails[this.$store.state.showDetails.outterIndex].data[this.$store.state.showDetails.innerIndex]}},activated:function(){window.scrollTo(0,0),this.bookDetails=this.$store.state.bookDetails[this.$store.state.showDetails.outterIndex].data[this.$store.state.showDetails.innerIndex]}}},VGhd:function(t,e,a){"use strict";function i(t){a("3/9G")}var o=a("Shfp"),s=a("7xGO"),n=a("VU/8"),c=i,r=n(o.a,s.a,c,"data-v-e970d70e",null);e.a=r.exports},VxRx:function(t,e){},YaEn:function(t,e,a){"use strict";var i=a("7+uW"),o=a("/ocq"),s=a("6xpQ"),n=a("p4rq"),c=a("hedB"),r=a("VGhd"),l=a("DbT+");i.default.use(o.a),e.a=new o.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"HomePage",component:s.a},{path:"/books",name:"books",component:n.a},{path:"/myCenter",name:"myCenter",component:c.a},{path:"/details",name:"details",component:r.a},{path:"/about",name:"about",component:l.a}]})},"d8/S":function(t,e){},gHUY:function(t,e){},hedB:function(t,e,a){"use strict";function i(t){a("gHUY")}var o=a("3TWb"),s=a("qaK/"),n=a("VU/8"),c=i,r=n(o.a,s.a,c,"data-v-869b8f36",null);e.a=r.exports},"m+ok":function(t,e,a){"use strict";e.a={}},p4rq:function(t,e,a){"use strict";function i(t){a("VxRx")}var o=a("9sPg"),s=a("CVJt"),n=a("VU/8"),c=i,r=n(o.a,s.a,c,"data-v-2a5c5b85",null);e.a=r.exports},"qaK/":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"PersonalCenter"},[a("div",{on:{click:t.showDialog}},[a("mt-cell",{staticClass:"login",attrs:{title:t.title,"is-link":"",icon:t.isIconShow}})],1),t._v(" "),a("mt-cell",{staticClass:"cell",attrs:{title:"会员俱乐部","is-link":""}}),t._v(" "),a("mt-cell",{directives:[{name:"show",rawName:"v-show",value:!t.isIconShow,expression:"!isIconShow"}],staticClass:"cell",attrs:{title:"我的订单","is-link":""}}),t._v(" "),a("mt-cell",{directives:[{name:"show",rawName:"v-show",value:!t.isIconShow,expression:"!isIconShow"}],staticClass:"cell",attrs:{title:"我的收藏","is-link":""}}),t._v(" "),a("mt-cell",{staticClass:"cell",attrs:{title:"社区论坛","is-link":""}}),t._v(" "),a("mt-cell",{staticClass:"cell",attrs:{title:"联系客服","is-link":""}}),t._v(" "),a("mt-cell",{staticClass:"about",attrs:{title:"关于本项目","is-link":"",to:"/about"}}),t._v(" "),a("transition",{attrs:{name:"dialog",mode:"out-in"}},[t.isLoginShow?a("div",{staticClass:"loginBg",on:{click:t.showDialog}},[a("div",{staticClass:"loginDialog"},[a("div",[a("label",{attrs:{for:"username"}},[t._v("账号:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{id:"username",type:"text",placeholder:"请输入手机号码",name:"username"},domProps:{value:t.account},on:{blur:t.checkAccount,focus:t.clearWarning,input:function(e){e.target.composing||(t.account=e.target.value)}}})]),t._v(" "),a("p",{staticClass:"warning",domProps:{textContent:t._s(t.isShowWarning1)}}),t._v(" "),a("div",[a("label",{attrs:{for:"pwd"}},[t._v("密码：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"password",placeholder:"请输入密码",id:"pwd",name:"pwd"},domProps:{value:t.pwd},on:{focus:t.changeNav,blur:t.changeNav,input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"registerButton",on:{click:t.goToRegister}},[t._v("注册")]),t._v(" "),a("button",{staticClass:"loginButton",on:{click:t.goToLogin}},[t._v("登录")])])]):t._e()])],1)},o=[],s={render:i,staticRenderFns:o};e.a=s},"qs/E":function(t,e,a){"use strict";var i=a("zNUS"),o=a.n(i),s={url:"https://apis.juhe.cn/goodbook/catalog?key=d89ed133151c0011a104f4082fd2ad40",data:{"result|17":[{"id|+1":242,catalog:"@ctitle(2, 4)"}]}},n={url:"https://apis.juhe.cn/goodbook/query?key=d89ed133151c0011a104f4082fd2ad40",data:{result:{"data|10":[{title:"@ctitle(5, 15)","catalog|2-6":"@region ","tags|5-10":"@cword(3-8) ",sub1:"@ctitle(5, 15)",sub2:"@cparagraph()",img:"http://apis.juhe.cn/goodbook/img/379cdafe13f92d62e99388182a6d08ec.jpg",reading:"@natural(1, 10000)人阅读",online:"京东商城:http://book.jd.com/10483893.html 当当网:http://product.dangdang.com/product.aspx?product_id=21020821 苏宁易购:http://www.suning.com/emall/prd_10052_22001_-7_1006212_.html 苏宁易购:http://www.suning.com/emall/prd_10052_22001_-7_1006212_.html",bytime:"2013年4月28日"}],pn:0,"rn|1-30":10}}};!function(t){o.a.mock(t.url,t.data)}(s),function(t){for(var e=t.url,a=242,i=0,s=e+"&catalog_id="+a+"&pn="+i+"&rn=10",n=0;n<17;n++){o.a.mock(s,t.data);for(var c=0;c<30;c++)o.a.mock(s,t.data),i+=10,s=e+"&catalog_id="+a+"&pn="+i+"&rn=10";a++,i=0,s=e+"&catalog_id="+a+"&pn="+i+"&rn=10"}}(n)},sGyw:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("使用Vue-cli构建项目")]),t._v(" "),a("li",[t._v("使用Vue.js 2.0")]),t._v(" "),a("li",[t._v("使用Vuex进行状态管理")]),t._v(" "),a("li",[t._v("Vue-resource异步请求数据")]),t._v(" "),a("li",[t._v("使用mint-ui")]),t._v(" "),a("li",[t._v("使用手淘flexible2.0方案实现可伸缩布局")]),t._v(" "),a("li",[t._v("Vue-router实现路由处理")]),t._v(" "),a("li",[t._v("mockjs实现前后端分离开发")]),t._v(" "),a("li",[t._v("实现数据懒加载")])])}],s={render:i,staticRenderFns:o};e.a=s},tgK5:function(t,e,a){"use strict";var i=a("mvHQ"),o=a.n(i),s=a("Au9i");a.n(s);a("7+uW").default.component(s.Spinner.name,s.Spinner),e.a={created:function(){if("[]"===o()(this.$store.state.bookList)){this.$store.dispatch("getDatas",{url:"https://apis.juhe.cn/goodbook/catalog",options:{},method:"jsonp",callBack:function(t,e){t.commit("getBookList",e)}});for(var t=0;t<17;t++){var e=242+t;this.$store.dispatch("getDetails",{id:e,method:"jsonp",index:t})}}},activated:function(){window.scrollTo(0,0)},data:function(){return{bannerImages:[{link:"https://pro.m.jd.com/mall/active/Zen6RsFGjG8kCYRXsXcAxbFKXfu/index.html",img:"static/1.jpg"},{link:"https://pro.m.jd.com/mall/active/3GxG1uWbootpZdHcWE2Wv7qMH2ac/index.html",img:"static/2.jpg"},{link:"https://sale.jd.com/act/S2udRrNCGVnptb.html?cpdad=1DLSUE",img:"static/3.jpg"}],randomNum:Math.floor(13*Math.random()),specificNum:15}},methods:{forDetails:function(t,e){this.$store.commit("showBookDetails",{outterIndex:t,innerIndex:e}),this.$router.push({path:"/details"})}},components:{Swipe:s.Swipe,SwipeItem:s.SwipeItem},computed:{bookDetails:function(){return this.$store.state.bookDetails},dataLoaded:function(){return 17===this.bookDetails.length}}}},wl8n:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.dataLoaded?t._e():a("div",[a("p",{staticClass:"loadingPage"},[a("span",{staticClass:"loadingText"},[t._v("加载中")]),t._v(" "),a("mt-spinner",{attrs:{type:"double-bounce",color:"rgb(38, 162, 255)",size:20}})],1)]),t._v(" "),t.dataLoaded?a("div",{staticClass:"HomePage"},[a("mt-swipe",{staticClass:"slideshow-wrap",attrs:{auto:4e3}},t._l(t.bannerImages,function(t,e){return a("mt-swipe-item",{key:e},[a("a",{attrs:{href:t.link}},[a("div",{staticClass:"banner",style:{background:"url("+t.img+") center no-repeat"}})])])})),t._v(" "),a("div",{staticClass:"recommended"},[a("div",{staticClass:"recommendedTitle"},[t._v("强烈推荐")]),t._v(" "),a("div",{staticClass:"recommendedContent"},[a("div",{staticClass:"recLeft",on:{click:function(e){t.forDetails(t.randomNum,1)}}},[a("img",{attrs:{src:t.bookDetails[t.randomNum].data[1].img,alt:"cover"}})]),t._v(" "),a("div",{staticClass:"recRight"},[a("div",{on:{click:function(e){t.forDetails(t.randomNum,4)}}},[a("img",{attrs:{src:t.bookDetails[t.randomNum].data[4].img,alt:"cover"}})]),t._v(" "),a("div",{on:{click:function(e){t.forDetails(t.randomNum,3)}}},[a("img",{attrs:{src:t.bookDetails[t.randomNum].data[3].img,alt:"cover"}})]),t._v(" "),a("div",{on:{click:function(e){t.forDetails(t.randomNum,5)}}},[a("img",{attrs:{src:t.bookDetails[t.randomNum].data[5].img,alt:"cover"}})]),t._v(" "),a("div",{on:{click:function(e){t.forDetails(t.randomNum,6)}}},[a("img",{attrs:{src:t.bookDetails[t.randomNum].data[6].img,alt:"cover"}})])])])]),t._v(" "),a("div",{staticClass:"recommended"},[a("div",{staticClass:"recommendedTitle"},[t._v("热销图书")]),t._v(" "),a("div",{staticClass:"recommendedContent"},[a("div",{staticClass:"recLeft",on:{click:function(e){t.forDetails(t.randomNum,9)}}},[a("img",{attrs:{src:t.bookDetails[t.randomNum].data[9].img,alt:"cover"}})]),t._v(" "),a("div",{staticClass:"recRight"},[a("div",{on:{click:function(e){t.forDetails(t.randomNum,2)}}},[a("img",{attrs:{src:t.bookDetails[t.randomNum].data[2].img,alt:"cover"}})]),t._v(" "),a("div",{on:{click:function(e){t.forDetails(t.randomNum,7)}}},[a("img",{attrs:{src:t.bookDetails[t.randomNum].data[7].img,alt:"cover"}})]),t._v(" "),a("div",{on:{click:function(e){t.forDetails(t.randomNum,8)}}},[a("img",{attrs:{src:t.bookDetails[t.randomNum].data[8].img,alt:"cover"}})]),t._v(" "),a("div",{on:{click:function(e){t.forDetails(t.randomNum,0)}}},[a("img",{attrs:{src:t.bookDetails[t.randomNum].data[0].img,alt:"cover"}})])])])]),t._v(" "),a("div",{staticClass:"recommended"},[a("div",{staticClass:"recommendedTitle"},[t._v("经典好书")]),t._v(" "),a("div",{staticClass:"recommendedContent"},[a("div",{staticClass:"recLeft",on:{click:function(e){t.forDetails(t.specificNum,1)}}},[a("img",{attrs:{src:t.bookDetails[t.specificNum].data[1].img,alt:"cover"}})]),t._v(" "),a("div",{staticClass:"recRight"},[a("div",{on:{click:function(e){t.forDetails(t.specificNum,8)}}},[a("img",{attrs:{src:t.bookDetails[t.specificNum].data[8].img,alt:"cover"}})]),t._v(" "),a("div",{on:{click:function(e){t.forDetails(t.specificNum,3)}}},[a("img",{attrs:{src:t.bookDetails[t.specificNum].data[3].img,alt:"cover"}})]),t._v(" "),a("div",{on:{click:function(e){t.forDetails(t.specificNum,5)}}},[a("img",{attrs:{src:t.bookDetails[t.specificNum].data[5].img,alt:"cover"}})]),t._v(" "),a("div",{on:{click:function(e){t.forDetails(t.specificNum,6)}}},[a("img",{attrs:{src:t.bookDetails[t.specificNum].data[6].img,alt:"cover"}})])])])]),t._v(" "),t._m(0)],1):t._e()])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom"},[a("p",[t._v("----到底了哦----")])])}],s={render:i,staticRenderFns:o};e.a=s},xJD8:function(t,e,a){"use strict";var i=a("Au9i");a.n(i);e.a={name:"app",created:function(){this.selected=this.$store.state.route.fullPath},data:function(){return{selected:"/home"}},methods:{goBack:function(){this.$router.go(-1)}},computed:{selectedPart:function(){return this.$store.getters.selectedPart},routePath:function(){return this.$store.state.route.fullPath},isNavShow:function(){return this.$store.state.isNavShow}},components:{MyHeader:i.Header,Tabbar:i.Tabbar,TabItem:i.TabItem},watch:{selected:function(){this.$router.push({path:this.selected})},routePath:function(){this.selected=this.$store.state.route.fullPath}}}},z9M4:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("mt-header",{staticClass:"appHeader",attrs:{fixed:"",title:t.selectedPart}},["图书详情"===t.selectedPart||"关于"===t.selectedPart?a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("返回")]):t._e()],1),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("keep-alive",[a("router-view")],1)],1),t._v(" "),"图书详情"!==t.selectedPart&&"关于"!==t.selectedPart?a("mt-tabbar",{directives:[{name:"show",rawName:"v-show",value:t.isNavShow,expression:"isNavShow"}],staticClass:"nav-tabBar",attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("mt-tab-item",{staticClass:"nav-tabItem",attrs:{id:"/home"}},[t._v("\n    首页\n  ")]),t._v(" "),a("mt-tab-item",{staticClass:"nav-tabItem",attrs:{id:"/books"}},[t._v("\n    发现\n  ")]),t._v(" "),a("mt-tab-item",{staticClass:"nav-tabItem",attrs:{id:"/myCenter"}},[t._v("\n    我的\n  ")])],1):t._e()],1)},o=[],s={render:i,staticRenderFns:o};e.a=s}},["NHnr"]);
//# sourceMappingURL=app.48bf3e5a98b7ae827384.js.map