(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37318e88"],{"00f7":function(t,e,i){"use strict";i("d72e")},"08d1":function(t,e,i){t.exports=i.p+"static/img/华盛顿医学院.be392ab3.png"},"0919":function(t,e,i){t.exports=i.p+"static/img/穿越雪线@2x.daef5c86.png"},"6be1":function(t,e,i){},7075:function(t,e,i){"use strict";i("6be1")},"98a0":function(t,e,i){t.exports=i.p+"static/img/迪拜会议海报.a6852c75.png"},b99d:function(t,e,i){t.exports=i.p+"static/img/zhagenmeiguo.79aa011e.png"},d0b5:function(t,e,i){t.exports=i.p+"static/img/gengduo_list.28a7b988.svg"},d72e:function(t,e,i){},de5d:function(t,e,i){"use strict";i.r(e);var r,n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-two flex-col"},[r("div",{ref:"newContainer",staticClass:"new-container"},[r("CommonHeaderTitle",{scopedSlots:t._u([{key:"BigTitle",fn:function(){return[t._v("新闻")]},proxy:!0},{key:"right",fn:function(){return[r("div",{staticClass:"flex-row mode-message"},[t._v(" 更多资讯"),r("img",{attrs:{src:i("d0b5"),alt:""}})])]},proxy:!0}])}),r("div",{ref:"stripOuter",staticClass:"content-apart strip-outer flex-row",attrs:{"data-hover":""}},[r("div",{staticClass:"strip-inner"},[r("div",{staticClass:"draggable"}),r("div",{staticClass:"strip flex-row"},t._l(t.itemArr,(function(e){return r("div",{key:e.id,staticClass:"item strip__item"},[r("div",{staticClass:"img-container img-inner"},[r("img",{attrs:{src:e.url,draggable:"false"}})]),r("div",{staticClass:"first-title flex-row"},[r("div",{staticClass:"left"},[t._v("/ "+t._s(e.index))]),r("div",{staticClass:"right"},[t._v(t._s(e.title_one))])]),r("div",{staticClass:"second-title"},[t._v(t._s(e.title_two))])])})),0)])])],1),r("div",{ref:"cursor",staticClass:"cursor"},[r("div",{staticClass:"cursor__inner cursor__inner--dot"},[t._v("Drag")])])])},s=[],o=(i("4160"),i("159b"),i("fcd6")),a=(i("99af"),i("d4ec")),d=i("bee2"),l=document.body,c=function(t,e,i){return(1-i)*t+i*e},u=function(t){var e=0,i=0;return t||(t=window.event),t.pageX||t.pageY?(e=t.pageX,i=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+l.scrollLeft+document.documentElement.scrollLeft,i=t.clientY+l.scrollTop+document.documentElement.scrollTop),{x:e,y:i}},g=function(t){return{width:window.innerWidth,height:window.innerHeight}};g(r),window.addEventListener("resize",g);var h,f=function(){function t(e){var i=this;Object(a["a"])(this,t),this.DOM={el:e},this.DOM.dot=this.DOM.el.querySelector(".cursor__inner--dot"),this.bounds={dot:this.DOM.dot.getBoundingClientRect()},this.mousePos={x:0,y:0},this.lastMousePos={dot:{x:0,y:0}},this.initEvents(),requestAnimationFrame((function(){return i.render()}))}return Object(d["a"])(t,[{key:"initEvents",value:function(){var t=this;window.addEventListener("mousemove",(function(e){return t.mousePos=u(e)}))}},{key:"render",value:function(){var t=this;this.lastMousePos.dot.x=c(this.lastMousePos.dot.x,this.mousePos.x-this.bounds.dot.width/2,1),this.lastMousePos.dot.y=c(this.lastMousePos.dot.y,this.mousePos.y-this.bounds.dot.height/2,1),this.DOM.dot.style.transform="translateX(".concat(this.lastMousePos.dot.x-260,"px) translateY(").concat(this.lastMousePos.dot.y-270,"px)"),requestAnimationFrame((function(){return t.render()}))}},{key:"enter",value:function(){this.DOM.dot.style.visibility="visible",this.DOM.dot.style.transition="all .1s"}},{key:"leave",value:function(){this.DOM.dot.style.visibility="hidden",this.DOM.dot.style.transition="all .1s"}}]),t}(),v=f,p=(i("b680"),i("b85c")),m=i("cffa"),y=i("ce88"),w=function(){return h={width:window.innerWidth-260,height:window.innerHeight}};w();var b={lineEq:function(t,e,i,r,n){var s=(t-e)/(i-r),o=e-s*r;return s*n+o},lerp:function(t,e,i){return(1-i)*t+i*e},getRandomFloat:function(t,e){return(Math.random()*(e-t)+t).toFixed(2)}};window.addEventListener("resize",w);var x=function t(e){Object(a["a"])(this,t),this.DOM={el:e},this.DOM.image=this.DOM.el.querySelector(".img-inner")},M=function(){function t(e){var i=this;Object(a["a"])(this,t),this.DOM={el:e},this.DOM.strip=this.DOM.el.querySelector(".strip"),this.items=[],this.DOM.strip.querySelectorAll(".strip__item").forEach((function(t){return i.items.push(new x(t))})),this.contentItem=this.DOM.el.querySelectorAll(".strip__item"),this.contentItem.forEach((function(t){return i.items.push(new x(t))})),this.DOM.draggable=this.DOM.el.querySelector(".draggable"),this.draggableWidth=this.DOM.draggable.offsetWidth,this.maxDrag=this.draggableWidth<h.width?0:this.draggableWidth-h.width,this.dragPosition=0,this.draggie=new y(this.DOM.draggable,{axis:"x"}),this.init(),this.initEvents()}return Object(d["a"])(t,[{key:"init",value:function(){var t=this;this.renderedStyles={position:{previous:0,current:this.dragPosition},scale:{previous:1,current:1},imgScale:{previous:1,current:1},opacity:{previous:1,current:1},coverScale:{previous:.75,current:.75},coverOpacity:{previous:0,current:0}},this.render=function(){for(var e in t.renderId=void 0,t.renderedStyles)t.renderedStyles[e].previous=b.lerp(t.renderedStyles[e].previous,t.renderedStyles[e].current,.1);m["a"].set(t.DOM.strip,{x:t.renderedStyles.position.previous});var i,r=Object(p["a"])(t.items);try{for(r.s();!(i=r.n()).done;){var n=i.value;m["a"].set(n.DOM.el,{scale:t.renderedStyles.scale.previous,opacity:t.renderedStyles.opacity.previous}),m["a"].set(n.DOM.image,{scale:t.renderedStyles.imgScale.previous})}}catch(s){r.e(s)}finally{r.f()}t.renderId||(t.renderId=requestAnimationFrame((function(){return t.render()})))},this.renderId=requestAnimationFrame((function(){return t.render()}))}},{key:"initEvents",value:function(){var t=this;this.onDragStart=function(){t.renderedStyles.scale.current=.9,t.renderedStyles.imgScale.current=.999,t.renderedStyles.opacity.current=1,t.renderedStyles.coverScale.current=1,t.renderedStyles.coverOpacity.current=1},this.onDragMove=function(e,i,r){t.draggie.position.x>=0?t.dragPosition=b.lineEq(.5*h.width,0,h.width,0,t.draggie.position.x):t.draggie.position.x<-1*t.maxDrag?t.dragPosition=b.lineEq(.5*h.width,0,t.maxDrag+h.width,t.maxDrag,t.draggie.position.x):t.dragPosition=t.draggie.position.x,t.renderedStyles.position.current=t.dragPosition},this.onDragEnd=function(){t.draggie.position.x>0?(t.dragPosition=0,t.draggie.setPosition(t.dragPosition,t.draggie.position.y)):t.draggie.position.x<-1*t.maxDrag&&(t.dragPosition=-1*t.maxDrag,t.draggie.setPosition(t.dragPosition,t.draggie.position.y)),t.renderedStyles.position.current=t.dragPosition,t.renderedStyles.scale.current=1,t.renderedStyles.imgScale.current=1,t.renderedStyles.opacity.current=1,t.renderedStyles.coverScale.current=.75,t.renderedStyles.coverOpacity.current=0},this.draggie.on("pointerDown",this.onDragStart),this.draggie.on("dragMove",this.onDragMove),this.draggie.on("pointerUp",this.onDragEnd),window.addEventListener("resize",(function(){if(t.maxDrag=t.draggableWidth<h.width?0:t.draggableWidth-h.width,Math.abs(t.dragPosition)+h.width>t.draggableWidth){var e=Math.abs(t.dragPosition)+h.width-t.draggableWidth;t.dragPosition=t.dragPosition+e,t.draggie.setPosition(t.dragPosition,t.draggie.position.y)}}))}}]),t}(),D=M,_={components:{CommonHeaderTitle:o["a"]},data:function(){return{itemArr:[{id:1,url:i("98a0"),title_one:"联影首秀Arab Health",title_two:"1月27-30日，全球u医疗器械行业顶级盛会之一Arab Health在迪拜拉开帷幕，来自60多个国家和地区的4000多家企业参与其中。联影首次携PET-CT、PET/MR、MR、CT、DR等全线产品参展。",index:"01"},{id:2,url:i("b99d"),title_one:"中国“智”造扎根美国",title_two:"2019年12月1-6日，联影医疗技术集团有限公司（以下简称“联影”）携全线产品及最新创新成果，亮相全球放射学界规模最大、最能代表未来技术趋势和行业发展方向的医学盛会——第8届RSNA展。",index:"02"},{id:3,url:i("08d1"),title_one:"联影首秀Arab Health",title_two:"1月27-30日，全球u医疗器械行业顶级盛会之一Arab Health在迪拜拉开帷幕，来自60多个国家和地区的4000多家企业参与其中。联影首次携PET-CT、PET/MR、MR、CT、DR等全线产品参展。",index:"03"},{id:4,url:i("0919"),title_one:"联影首秀Arab Health",title_two:"1月27-30日，全球u医疗器械行业顶级盛会之一Arab Health在迪拜拉开帷幕，来自60多个国家和地区的4000多家企业参与其中。联影首次携PET-CT、PET/MR、MR、CT、DR等全线产品参展。",index:"04"}]}},mounted:function(){this.release(),this.drag()},methods:{drag:function(){var t=new D(this.$refs.stripOuter);console.log(t)},release:function(){var t=new v(this.$refs.cursor),e=document.querySelectorAll("[data-hover]");e.forEach((function(e){e.addEventListener("mouseenter",(function(e){return t.enter()})),e.addEventListener("mouseover",(function(e){return t.enter()})),e.addEventListener("mouseleave",(function(){return t.leave()}))}))}}},S=_,O=(i("7075"),i("2877")),P=Object(O["a"])(S,n,s,!1,null,"b68c902e",null);e["default"]=P.exports},fcd6:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-container flex-row",style:{background:t.background,color:t.color}},[i("div",{staticClass:"left flex-row fill-flex"},[i("div",{staticClass:"BigTitle"},[t._t("BigTitle",[t._v("关于我们")])],2)]),i("div",{staticClass:"right flex-row",on:{click:function(e){return t.handleClick()}}},[t._t("right")],2)])},n=[],s={props:{background:{default:"transparent"},color:{default:"#000000"}},methods:{handleClick:function(){this.$emit("eventHandle")}}},o=s,a=(i("00f7"),i("2877")),d=Object(a["a"])(o,r,n,!1,null,"62d4fa40",null);e["a"]=d.exports}}]);