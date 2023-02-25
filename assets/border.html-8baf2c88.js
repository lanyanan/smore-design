import{_ as b,M as n,p as u,q as _,N as d,V as o,Q as s,v as r,x as l,a1 as x,t as p}from"./framework-e921cdd2.js";const i={"$--box-shadow-light":"boxShadowLight","$--box-shadow-base":"boxShadowBase","$--border-radius-base":"borderRadiusBase","$--border-radius-small":"borderRadiusSmall"},m={boxShadowLight:"0 2px 12px 0 rgba(0, 0, 0, 0.1)",boxShadowBase:"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)",borderRadiusBase:"4px",borderRadiusSmall:"2px"},w={created(){},mounted(){this.setGlobal()},methods:{setGlobal(){window.userThemeConfig&&(this.global=window.userThemeConfig.global)}},data(){return{global:{},boxShadowLight:"",boxShadowBase:"",borderRadiusBase:"",borderRadiusSmall:""}},watch:{global:{immediate:!0,handler(h){Object.keys(i).forEach(a=>{h[a]?this[i[a]]=h[a]:this[i[a]]=m[i[a]]})}}}},v=x('<h2 id="border-边框" tabindex="-1"><a class="header-anchor" href="#border-边框" aria-hidden="true">#</a> Border 边框</h2><p>我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。</p><h3 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h3><p>我们提供了以下几种边框样式，以供选择。</p><table class="demo-border"><tbody><tr><td class="text">名称</td><td class="text">粗细</td><td class="line">举例</td></tr><tr><td class="text">\b实线</td><td class="text">1px</td><td class="line"><div></div></td></tr><tr><td class="text">\b虚线</td><td class="text">2px</td><td class="line"><div class="dashed"></div></td></tr></tbody></table><h3 id="圆角" tabindex="-1"><a class="header-anchor" href="#圆角" aria-hidden="true">#</a> 圆角</h3><p>我们提供了以下几种圆角样式，以供选择。</p>',7),f=s("div",{class:"title"},"无圆角",-1),S=s("div",{class:"value"},"border-radius: 0px",-1),g=s("div",{class:"radius"},null,-1),B=s("div",{class:"title"},"小圆角",-1),R={class:"value"},y=s("div",{class:"title"},"大圆角",-1),L={class:"value"},N=s("div",{class:"title"},"圆形圆角",-1),V=s("div",{class:"value"},"border-radius: 30px",-1),C=s("div",{class:"radius radius-30"},null,-1),k=s("h3",{id:"投影",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#投影","aria-hidden":"true"},"#"),p(" 投影")],-1),T=s("p",null,"我们提供了以下几种投影样式，以供选择。",-1),E={class:"demo-shadow-text"},G={class:"demo-shadow-text"};function M(h,a,j,q,e,z){const t=n("el-col"),c=n("el-row");return u(),_("div",null,[v,d(c,{gutter:12,class:"demo-radius"},{default:o(()=>[d(t,{span:6,xs:{span:12}},{default:o(()=>[f,S,g]),_:1}),d(t,{span:6,xs:{span:12}},{default:o(()=>[B,s("div",R,"border-radius: "+r(e.borderRadiusSmall),1),s("div",{class:"radius",style:l({borderRadius:e.borderRadiusSmall})},null,4)]),_:1}),d(t,{span:6,xs:{span:12}},{default:o(()=>[y,s("div",L,"border-radius: "+r(e.borderRadiusBase),1),s("div",{class:"radius",style:l({borderRadius:e.borderRadiusBase})},null,4)]),_:1}),d(t,{span:6,xs:{span:12}},{default:o(()=>[N,V,C]),_:1})]),_:1}),k,T,s("div",{class:"demo-shadow",style:l({boxShadow:e.boxShadowBase})},null,4),s("span",E,"基础投影 box-shadow: "+r(e.boxShadowBase),1),s("div",{class:"demo-shadow",style:l({boxShadow:e.boxShadowLight})},null,4),s("span",G,"浅色投影 box-shadow: "+r(e.boxShadowLight),1)])}const O=b(w,[["render",M],["__file","border.html.vue"]]);export{O as default};