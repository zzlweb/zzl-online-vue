(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36c6f84a"],{"23cb6":function(e,t,a){},6939:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart-container",attrs:{id:"chartConainer"}},[a("div",{staticClass:"item-container flex-row"},[a("div",{staticClass:"left-container fill-flex felx-row"},[a("ChartsOne",{staticClass:"fill-flex"})],1),a("div",{staticClass:"right-container"},[a("div",{staticClass:"right-pie-chart"},[e._m(0),a("charts-two")],1)])]),a("div",{staticClass:"flex-row chart-box-two"},[a("div",{staticClass:"item fill-flex"},[a("charts-three")],1),a("div",{staticClass:"item fill-flex"},[a("china-map")],1)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"center-info-container flex-col"},[a("div",{staticClass:"common-info-item"},[a("div",{staticClass:"top-label"},[e._v("当前使用量")]),a("div",{staticClass:"bototm-value"},[e._v("123,234")])]),a("div",{staticClass:"common-info-item"},[a("div",{staticClass:"top-label"},[e._v("总存储量")]),a("div",{staticClass:"bototm-value"},[e._v("263,780")])])])}],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{height:e.height},attrs:{id:"chart-three"}})},l=[],n=a("3eba"),s=a.n(n),c=a("2ef0"),m={data:function(){return{$_resizeHandler:null}},mounted:function(){var e=this;this.$_resizeHandler=Object(c["debounce"])((function(){e.myChart&&e.myChart.resize()}),100),this.$_initResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent()},activated:function(){this.$_initResizeEvent()},deactivated:function(){this.$_destroyResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)}}},d={axisData:["2020-09-14","2020-09-18","2020-09-22","2020-09-26","2020-09-30","2020-10-04","2020-10-08"],dataArr:[[6.7,6,10.3,7.9,7.3,7,5],[4,5.2,5.8,4.5,5.9,3.8,4]]},h={mixins:[m],props:{width:{type:String,default:"100%"},height:{type:String,default:"370px"}},data:function(){return{myChart:null,option:{tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#4586FF"}}},legend:{itemWidth:14,itemHeight:4,itemGap:48,borderRadius:1,top:10,textStyle:{fontSize:12,color:"#B9B9BA",fontWeight:"bold",padding:[3,0,0,5],lineHeight:14}},grid:{left:15,top:50,right:20,bottom:30,containLabel:!0},xAxis:[{type:"category",boundaryGap:!0,nameGap:10,axisLine:{lineStyle:{color:"rgba(255,255,255,0.2)"}},axisTick:{show:!1},axisLabel:{margin:10,fontSize:12,color:"rgba(255,255,255,0.3)",lineHeight:14},data:d.axisData}],yAxis:[{nameLocation:"middle",axisLine:{lineStyle:{color:"rgba(255,255,255,0.2)"}},axisTick:{show:!1},axisLabel:{margin:10,fontSize:12,color:"rgba(255,255,255,0.3)"},splitLine:{type:"dashed",lineStyle:{color:"rgba(255,255,255,0.1)"}}}],series:[{name:"远程门诊",type:"line",smooth:!0,areaStyle:{color:new s.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#D0BF60"},{offset:1,color:"rgba(41,52,85,0)"}],!1)},data:[6.7,6,10.3,7.9,7.3,7,5],sampling:"average",lineStyle:{width:1},itemStyle:{color:"#D0BF60",borderColor:"#D0BF60",borderWidth:1}},{name:"远程影像",type:"line",smooth:!0,areaStyle:{color:new s.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#81E4FF"},{offset:1,color:"rgba(41,52,85,0)"}],!1)},data:[4,5.2,5.8,4.5,5.9,3.8,4],sampling:"average",lineStyle:{width:1},itemStyle:{color:"#81E4FF",borderColor:"#81E4FF",borderWidth:1}}]}}},mounted:function(){var e=this;this.$nextTick((function(){e.drawChart()}))},methods:{drawChart:function(){this.myChart=s.a.init(this.$el),this.myChart.setOption(this.option)}}},u=h,f=(a("94b6"),a("2877")),v=Object(f["a"])(u,r,l,!1,null,"6968f386",null),p=v.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{height:e.height,width:e.width},attrs:{id:"chart-box"}})},g=[],y=(a("99af"),a("d81d"),a("b0c0"),a("313e"));function x(e){var t={legend:{icon:"roundRect",show:!1,itemWidth:14,itemHeight:2,itemGap:10,borderRadius:1,top:0,right:0,textStyle:{fontSize:12,color:"#B9B9BA",fontWeight:"bold",padding:[3,0,0,5],lineHeight:14}},tooltip:{trigger:"axis",backgroundColor:"transparent",padding:0,confine:!0,axisPointer:{lineStyle:{color:"#FFD500",type:"dashed"}},formatter:function(e){var t="";e&&e.length>0&&e.map((function(e){var a='<div class="top-dot qualified-dot" style="background-color: '.concat(e.color,'"></div>');t=t+'<div class="common-item flex-col">'+a+'<div class="bottom-value flex-row fill-flex"><div class="series-name">'+e.seriesName+'</div><div class="series-value fill-flex">'+e.data+" w</div></div></div>"}));var a="<div class='custom-tooltip flex-col'>\n          <div class='time-title'>2020-09-25 ".concat(e[0].axisValue,"</div>\n          <div class='fill-flex bottom-img-container flex-col'>").concat(t,"</div>\n        </div>");return a}},grid:{left:40,top:40,right:40,bottom:30,containLabel:!0},xAxis:[{type:"category",boundaryGap:!0,axisTick:{show:!1},axisLine:{lineStyle:{color:"rgba(255,255,255,0.2)"}},axisLabel:{margin:10,fontSize:12,color:"rgba(255,255,255,0.3)",lineHeight:14},data:e.axisData}],yAxis:[{type:"value",nameLocation:"middle",splitNumber:4,nameTextStyle:{color:"#rgba(255,255,255,0.3)",padding:[0,0,20,0]},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{margin:10,fontSize:12,color:"rgba(255,255,255,0.3)"},splitLine:{type:"dashed",lineStyle:{color:"rgba(255,255,255,0.1)"}}}],series:[{name:"报告数量",type:"line",symbolSize:.01,sampling:"average",lineStyle:{width:2},areaStyle:{color:new y.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0,170,255,0.50)"},{offset:1,color:"rgba(0,170,255,0.00) "}],!1)},itemStyle:{color:"#ffffff",borderColor:"#ffffff",borderWidth:2},data:e.reportData},{name:"影像数量",type:"line",symbolSize:.01,sampling:"average",lineStyle:{width:2},areaStyle:{color:new y.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(2,247,236,0.5)"},{offset:1,color:"rgba(2,247,236,0.15)"}],!1)},itemStyle:{color:"#01ECD5",borderColor:"#01ECD5",borderWidth:2},data:e.imageData}]};return t}function C(e){var t={legend:{show:!1},grid:{left:"5%",top:"5%",right:"5%",bottom:"5%",containLabel:!0},tooltip:{trigger:"item",show:!1,backgroundColor:"rgba(14,48,45,0.9)",padding:[7,10],textStyle:{fontSize:12},formatter:"{b} : {c} ({d}%)"},series:[{type:"pie",radius:[85,150],center:["50%","50%"],roseType:"area",label:{show:!1},labelLine:{show:!1},data:[{value:e[0].value,name:e[0].name,itemStyle:{color:"rgba(111,236,113,0.13)",borderColor:"rgba(111,236,113,0.9)",borderWidth:2}},{value:e[1].value,name:e[1].name,itemStyle:{color:"rgba(83,67,255,0.22)",borderColor:"rgba(83,67,255,0.9)",borderWidth:2}},{value:e[2].value,name:e[2].name,itemStyle:{color:"rgba(255,255,255,0.14)",borderColor:"rgba(255,255,255,0.8)",borderWidth:2}},{value:e[3].value,name:e[3].name,itemStyle:{color:"rgba(69,134,255,0.25)",borderColor:"rgba(69,134,255,0.8)",borderWidth:2}},{value:e[4].value,name:e[4].name,itemStyle:{color:"rgba(1,236,213,0.2)",borderColor:"rgba(1,236,213,0.8)",borderWidth:2}}]}]};return t}var w={getlineChartOption:x,getpieChartOption:C},S={axisData:["10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"],reportData:[36,42,32,22,42,41,52,37,42,37,28,31,41,36,56],imageData:[34,17,21,18,16,19,7,12,14,15,7,6,12,8,38]},z={mixins:[m],props:{id:{type:String,default:"chart-box"},width:{type:String,default:"100%"},height:{type:String,default:"350px"}},data:function(){return{myChart:null}},mounted:function(){var e=this;this.$nextTick((function(){e.drawLine()}))},beforeDestroy:function(){this.myChart&&(this.myChart.dispose(),this.myChart=null)},methods:{drawLine:function(){this.myChart=s.a.init(this.$el);var e=w.getlineChartOption(S);this.myChart.setOption(e)}}},_=z,L=Object(f["a"])(_,b,g,!1,null,null,null),$=L.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{height:e.height,width:e.width},attrs:{id:"chart-box"}})},T=[],D=[{name:"CT",value:78},{name:"MR",value:36},{name:"PET-CT",value:22},{name:"DR",value:95},{name:"RT",value:33}],O={mixins:[m],props:{id:{type:String,default:"chart-box"},width:{type:String,default:"100%"},height:{type:String,default:"350px"}},data:function(){return{myChart:null}},mounted:function(){var e=this;this.$nextTick((function(){e.drawPieChart()}))},beforeDestroy:function(){this.myChart&&(this.myChart.dispose(),this.myChart=null)},methods:{drawPieChart:function(){this.myChart=s.a.init(this.$el);var e=w.getpieChartOption(D);this.myChart.setOption(e)}}},k=O,B=Object(f["a"])(k,E,T,!1,null,null,null),F=B.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className,style:{height:e.height,width:e.width}})},W=[],H=(a("4160"),a("313e")),G=a.n(H),A=(a("3139"),{"黑龙江":[127.9688,45.368],"内蒙古":[110.3467,41.4899],"吉林":[125.8154,44.2584],"北京市":[116.4551,40.2539],"辽宁":[123.1238,42.1216],"河北":[114.4995,38.1006],"天津":[117.4219,39.4189],"山西":[112.3352,37.9413],"陕西":[109.1162,34.2004],"甘肃":[103.5901,36.3043],"宁夏":[106.3586,38.1775],"青海":[101.4038,36.8207],"新疆":[87.9236,43.5883],"西藏":[91.11,29.97],"四川":[103.9526,30.7617],"重庆":[108.384366,30.439702],"山东":[117.1582,36.8701],"河南":[113.4668,34.6234],"江苏":[118.8062,31.9208],"安徽":[117.29,32.0581],"湖北":[114.3896,30.6628],"浙江":[119.5313,29.8773],"福建":[119.4543,25.9222],"江西":[116.0046,28.6633],"湖南":[113.0823,28.2568],"贵州":[106.6992,26.7682],"云南":[102.9199,25.4663],"广东":[113.12244,23.009505],"广西":[108.479,23.1152],"海南":[110.3893,19.8516],"上海":[121.4648,31.2891]}),N=[[{name:"黑龙江",value:1}],[{name:"内蒙古",value:1}],[{name:"吉林",value:1}],[{name:"辽宁",value:1}],[{name:"河北",value:1}],[{name:"天津",value:1}],[{name:"山西",value:1}],[{name:"陕西",value:1}],[{name:"甘肃",value:1}],[{name:"宁夏",value:1}],[{name:"青海",value:1}],[{name:"新疆",value:1}],[{name:"西藏",value:1}],[{name:"四川",value:1}],[{name:"上海",value:1}]],M=[{name:"北京",value:177},{name:"天津",value:42},{name:"河北",value:102},{name:"山西",value:81},{name:"内蒙古",value:47},{name:"辽宁",value:67},{name:"吉林",value:82},{name:"黑龙江",value:66},{name:"上海",value:24},{name:"江苏",value:92},{name:"浙江",value:114},{name:"安徽",value:109},{name:"福建",value:116},{name:"江西",value:91},{name:"山东",value:119},{name:"河南",value:137},{name:"湖北",value:116},{name:"湖南",value:114},{name:"重庆",value:91},{name:"四川",value:125},{name:"贵州",value:62},{name:"云南",value:83},{name:"西藏",value:9},{name:"陕西",value:80},{name:"甘肃",value:56},{name:"青海",value:10},{name:"宁夏",value:18},{name:"新疆",value:67},{name:"广东",value:123},{name:"广西",value:59},{name:"海南",value:14},{name:"台湾",value:14}],j=function(e){for(var t=[],a=0;a<e.length;a++){var i=e[a],o=A[i[0].name],r=[121.4648,31.2891];o&&r&&t.push({fromName:i[0].name,toName:"上海",coords:[o,r],value:i[0].value,visualMap:!1,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#f00"},{offset:1,color:"#fff"}],global:!1}})}return t},P={mixins:[m],props:{className:{type:String,default:"map-container"},width:{type:String,default:"100%"},height:{type:String,default:"500px"}},data:function(){return{myChart:null}},mounted:function(){var e=this;this.$nextTick((function(){e.drawMap()}))},beforeDestroy:function(){this.myChart&&(this.myChart.dispose(),this.myChart=null)},methods:{drawMap:function(){var e=[],t=[["上海",N]];t.forEach((function(t,a){e.push({type:"lines",zlevel:2,effect:{show:!0,period:6,trailLength:0,symbol:"arrow",color:"red",symbolSize:6},lineStyle:{normal:{width:1,opacity:1,curveness:.3,type:"dashed",color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#f00"},{offset:1,color:"#fff"}],global:!1}}},label:{normal:{show:!1,position:"middle",formatter:"{b}"}},data:j(t[1])},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{color:"#ffdede",period:6,brushType:"fill",scale:4},label:{normal:{show:!0,position:"bottom",formatter:"{b}",textStyle:{color:"rgb(197,197,197)",fontSize:"12px"}}},symbol:"circle",symbolSize:5,itemStyle:{normal:{show:!0,color:"#f00"}},data:t[1].map((function(e){return{name:e[0].name,value:void 0===A[e[0].name]?"":A[e[0].name].concat([e[0].value]),visualMap:!1}}))},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{color:"#ffdede",period:6,brushType:"fill",scale:4},label:{normal:{show:!0,position:"right",formatter:"{b}",textStyle:{color:"#fff"}},emphasis:{show:!0}},symbol:"circle",symbolSize:6,itemStyle:{normal:{show:!0,color:"#fff"}},data:[{name:t[0],value:A[t[0]].concat([10])}]},{type:"map",map:"china",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:M})}));var a={tooltip:{trigger:"item",formatter:function(e,t,a){return"effectScatter"===e.seriesType?e.marker+e.data.name+""+e.data.value[2]:"lines"===e.seriesType?e.data.fromName+" -> "+e.data.toName+"<br />"+e.data.value:e.name}},visualMap:{show:!1,min:0,max:200,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[3],inRange:{color:["#00467F","#A5CC82"]}},geo:{map:"china",roam:!1,zoom:1.14,label:{emphasis:{show:!1}},itemStyle:{normal:{show:!1,color:"rgba(48,97,186，0)",borderColor:"rgba(0, 0, 0,0)"},emphasis:{show:!1,color:"#2B91B7"}}},series:e};this.myChart=G.a.init(this.$el),this.myChart.setOption(a)}}},I=P,J=Object(f["a"])(I,R,W,!1,null,null,null),q=J.exports,V={components:{ChartsThree:p,ChinaMap:q,ChartsOne:$,ChartsTwo:F}},K=V,Q=(a("ad7b"),Object(f["a"])(K,i,o,!1,null,"47666ef0",null));t["default"]=Q.exports},"94b6":function(e,t,a){"use strict";a("23cb6")},ad7b:function(e,t,a){"use strict";a("de01")},de01:function(e,t,a){}}]);