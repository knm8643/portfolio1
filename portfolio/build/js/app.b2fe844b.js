(function(){"use strict";var n={734:function(n,e,t){var o=t(9242),r=t(3396);function i(n,e,t,o,i,a){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(s)}var a={name:"App"},s=t(89);const c=(0,s.Z)(a,[["render",i]]);var l=c,u=t(2483);function p(n,e,t,o,i,a){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(s)}t(7658);var d={name:"MoComponents",mounted(){this.$router.push({name:"moMain"})}},m=d;const f=(0,s.Z)(m,[["render",p]]);var h=f;const v={class:"pc-wrapper"},_={class:"swiper-container"},b={class:"swiper-wrapper"},w=(0,r._)("div",{class:"swiper-slide"},[(0,r._)("div",{class:"pc-intro"},[(0,r._)("span",null,"iPhone사용 설명서")]),(0,r._)("div",null,[(0,r._)("h1",null,"iPhone 잠금 화면 해제하기"),(0,r._)("p",null,"iPhone을 클릭하거나 터치하면 잠금화면이 해제됩니다. 이충재님만의 iPhone을 확인해보세요. "),(0,r._)("p",{style:{"font-weight":"bold"}},"다음")])],-1),g={class:"swiper-slide"},k=(0,r._)("div",{class:"pc-intro"},[(0,r._)("span",null,"iPhone사용 문의하기")],-1),y={class:"pc_mainIntro"},M=(0,r._)("h1",null,"이충재의 iPhone 접근하기",-1),C=(0,r._)("p",null,[(0,r._)("a",{href:"https://iodized-barberry-382.notion.site/7f151766ec8842da96553fbfa838fba8"},"노션 접속하기")],-1),P=(0,r._)("p",null,[(0,r._)("a",{href:"https://github.com/knm8643"},"깃 접속하기")],-1),O=(0,r._)("div",{class:"swiper-pagination"},null,-1),Z={class:"box-container"},D=(0,r._)("span",null,"도움이 되었습니까?",-1);function j(n,e,t,o,i,a){return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",_,[(0,r._)("div",b,[w,(0,r._)("div",g,[k,(0,r._)("div",y,[M,C,P,(0,r._)("p",{onClick:e[0]||(e[0]=e=>n.helpBtn("info"))},"지구최강의 사나이 제가 궁금하신가요?")])])]),O]),(0,r._)("div",Z,[D,(0,r._)("button",{class:"box-btn_1",onClick:e[1]||(e[1]=e=>n.helpBtn("Y"))},"예"),(0,r._)("button",{class:"box-btn_2",onClick:e[2]||(e[2]=e=>n.helpBtn("N"))},"아니요")])])}var B=t(9785),x={name:"PcComponents",data(){return{}},mounted(){const n=new B.ZP(".swiper-container",{initialSlide:0,loopAdditionalSlides:1,spaceBetween:30,pagination:{el:".swiper-pagination"},autoplay:{delay:2e3,disableOnInteraction:!1}}),e=document.querySelector(".swiper-slide:first-child");e.addEventListener("click",(()=>{n.slideNext()}))},methods:{helpBtn(n){switch(n){case"info":alert("010-5696-1909\nknm8643@nate.com");break;case"Y":alert("도움이 되었다니 다행입니다^^ 연락주세요.");break;case"N":alert("아쉽지만 다음에 만나요.");break}}}},T=x;const $=(0,s.Z)(T,[["render",j]]);var S=$;const z={class:"main-wrapper"},E={class:"main-item-left"},I={class:"main-item-right"},N={class:"phone-wrapper"},A={class:"phone-body"},L=(0,r._)("div",{class:"notch"},null,-1),U={class:"screen"};function W(n,e,t,o,i,a){const s=(0,r.up)("PcComponents"),c=(0,r.up)("MoComponents");return(0,r.wg)(),(0,r.iD)("div",z,[(0,r._)("div",E,[(0,r.Wm)(s)]),(0,r._)("div",I,[(0,r._)("div",N,[(0,r._)("div",A,[L,(0,r._)("div",U,[(0,r.Wm)(c)])])])])])}var Y={name:"MainCompo",components:{PcComponents:S,MoComponents:h},component:[h,S]},q=Y;const F=(0,s.Z)(q,[["render",W]]);var H=F,G=t(7139);const J={class:"mobile-wrapper"},K=(0,r._)("div",{class:"mobile-head"},null,-1),Q={class:"mobile-body"},R={class:"body-Time"},V={class:"mobile-footer"},X=(0,r._)("p",null,"여기를 터치해주세요",-1),nn=[X];function en(n,e,t,o,i,a){return(0,r.wg)(),(0,r.iD)("div",J,[K,(0,r._)("div",Q,[(0,r._)("div",R,[(0,r._)("p",null,(0,G.zw)(n.currentDate),1),(0,r._)("h1",null,(0,G.zw)(n.currentTime),1)])]),(0,r._)("div",V,[(0,r._)("div",{class:"footer_line",onClick:e[0]||(e[0]=e=>n.lineClick())},nn)])])}var tn={name:"moMainCompo",data(){return{currentTime:"",currentDate:""}},mounted(){setInterval((()=>{const n=new Date,e=`${this.padZero(n.getHours())}:${this.padZero(n.getMinutes())}`,t=this.padZero(n.getMonth()+1),o=this.padZero(n.getDate()),r=["일","월","화","수","목","금","토"][n.getDay()],i=`${t}월 ${o}일 ${r}요일`;this.currentTime=e,this.currentDate=i}),1e3)},methods:{padZero(n){return n.toString().padStart(2,"0")},lineClick(){this.$router.push({name:"moBack"})}}},on=tn;const rn=(0,s.Z)(on,[["render",en]]);var an=rn,sn=t.p+"img/ME.1e461800.jpeg";const cn={class:"mobile-wrapper"},ln=(0,r._)("div",{class:"mobile-nhead"},[(0,r._)("h1",null,"해더 위치 확인")],-1),un=(0,r._)("div",{class:"mobile-nbody"},[(0,r._)("img",{src:sn})],-1),pn=(0,r._)("div",{class:"mobile-nfooter"},[(0,r._)("h1",null,[(0,r.Uk)("모바일영역 개발중"),(0,r._)("br"),(0,r.Uk)("피씨버전으로도 봐주세요")])],-1),dn=[ln,un,pn];function mn(n,e,t,o,i,a){return(0,r.wg)(),(0,r.iD)("div",cn,dn)}var fn={name:"MoBackCompo"},hn=fn;const vn=(0,s.Z)(hn,[["render",mn]]);var _n=vn;const bn=[{path:"/",name:"main",component:H,children:[{path:"Mo",component:h,children:[{path:"moMain",name:"moMain",component:an},{path:"moBack",name:"moBack",component:_n}]},{path:"Pc",component:S}]}],wn=(0,u.p7)({history:(0,u.PO)("/portfolio1/"),base:"/portfolio1/",routes:bn});var gn=wn,kn=t(65),yn={},Mn={addMessage(n,e){n.inputMessage.push(e)}},Cn={},Pn=(0,kn.MT)({state:{inputMessage:[],today:(new Date).toLocaleTimeString()},mutations:Mn,getters:yn,actions:Cn});(0,o.ri)(l).use(gn).use(Pn).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,i){if(!o){var a=1/0;for(u=0;u<n.length;u++){o=n[u][0],r=n[u][1],i=n[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){n.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[o,r,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/portfolio1/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,i,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==n[e]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var u=c(t)}for(e&&e(o);l<a.length;l++)i=a[l],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(u)},o=self["webpackChunkprotfolio"]=self["webpackChunkprotfolio"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(734)}));o=t.O(o)})();
//# sourceMappingURL=app.b2fe844b.js.map