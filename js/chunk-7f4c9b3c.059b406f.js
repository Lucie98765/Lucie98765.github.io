(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f4c9b3c"],{"08bf":function(t,n,e){t.exports=e.p+"img/character.f37b90ff.png"},1850:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"moutain",on:{click:function(n){return t.letItSnow(n)}}},[e("h1",[t._v("Moutain page")]),e("div",{attrs:{id:"image_box"}}),e("div",{attrs:{id:"button_box"}},[e("div",{attrs:{id:"buttons"}},[e("RightButton",{staticClass:"buttons",attrs:{msg:"Continuer d'avancer",link:"/moutainHouse"}})],1),e("Character",{attrs:{id:"character"}})],1),e("Texts",{staticClass:"textComponent",attrs:{msg:"Brrrr... J'aurais dû prendre mon bonnet",id:"text1"}}),e("Texts",{staticClass:"textComponent",attrs:{msg:"On dirait qu'il va bientôt neiger",id:"text2"}})],1)},a=[],o=(e("99af"),e("24ea")),i=e("e5a5"),c=e("1ef0"),s={name:"Moutain",components:{RightButton:o["a"],Character:i["a"],Texts:c["a"]},mounted:function(){var t=1e3*(1+Math.floor(5*Math.random())),n=document.getElementById("text1");setTimeout((function(){n.style.display="block"}),t);var e=1e3*(1+Math.floor(5*Math.random())),r=document.getElementById("text2");setTimeout((function(){r.style.display="block"}),e)},methods:{letItSnow:function(t){for(var n=t.pageY,e=t.pageX,r=function(t){var r=document.createElement("div");r.className="snow",document.getElementById("image_box").appendChild(r);var a=Math.floor(10*Math.random()+5);r.style.width="".concat(a,"px"),r.style.height="".concat(a,"px"),r.style.background="rgba(255, 255, 255, 0.6)",r.style.borderRadius="50%";var o=e+2*(Math.random()-.5)*30,i=n+2*(Math.random()-.5)*30,c=r.animate([{transform:"translate(".concat(e-a/2,"px, ").concat(n-a/2,"px)"),opacity:1},{transform:"translate(".concat(o,"px, ").concat(i,"px)"),opacity:0}],{duration:2e3,easing:"cubic-bezier(0, .9, .57, 1)"});document.querySelector(".moutain").style.pointerEvents="none",c.onfinish=function(){r.remove(),document.querySelector(".moutain").style.pointerEvents="all"}},a=0;a<30;a+=1)r(a)}}},u=s,f=(e("7adc"),e("2877")),d=Object(f["a"])(u,r,a,!1,null,"48f51b2f",null);n["default"]=d.exports},"1bf4":function(t,n,e){},"1dde":function(t,n,e){var r=e("d039"),a=e("b622"),o=e("2d00"),i=a("species");t.exports=function(t){return o>=51||!r((function(){var n=[],e=n.constructor={};return e[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"1ef0":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"textBox"},[e("p",{style:t.style},[t._v(t._s(t.msg))])])},a=[],o=(e("99af"),{name:"Texts",props:{msg:String},data:function(){var t=Math.floor(Math.random()*(window.innerWidth-200)+200);t>window.innerWidth-200&&(t-=200);var n=Math.floor(Math.random()*(window.innerHeight-200)+200);return n>window.innerHeight-200&&(n-=200),{style:"top: ".concat(n,"px; left: ").concat(t,"px;")}}}),i=o,c=(e("3f8b"),e("2877")),s=Object(c["a"])(i,r,a,!1,null,"ef24b000",null);n["a"]=s.exports},"36da":function(t,n,e){},"3f8b":function(t,n,e){"use strict";e("a579")},"65f0":function(t,n,e){var r=e("861d"),a=e("e8b5"),o=e("b622"),i=o("species");t.exports=function(t,n){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?r(e)&&(e=e[i],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},"7adc":function(t,n,e){"use strict";e("1bf4")},8418:function(t,n,e){"use strict";var r=e("c04e"),a=e("9bf2"),o=e("5c6c");t.exports=function(t,n,e){var i=r(n);i in t?a.f(t,i,o(0,e)):t[i]=e}},"99af":function(t,n,e){"use strict";var r=e("23e7"),a=e("d039"),o=e("e8b5"),i=e("861d"),c=e("7b0b"),s=e("50c4"),u=e("8418"),f=e("65f0"),d=e("1dde"),l=e("b622"),m=e("2d00"),p=l("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",b=m>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),x=d("concat"),g=function(t){if(!i(t))return!1;var n=t[p];return void 0!==n?!!n:o(t)},y=!b||!x;r({target:"Array",proto:!0,forced:y},{concat:function(t){var n,e,r,a,o,i=c(this),d=f(i,0),l=0;for(n=-1,r=arguments.length;n<r;n++)if(o=-1===n?i:arguments[n],g(o)){if(a=s(o.length),l+a>h)throw TypeError(v);for(e=0;e<a;e++,l++)e in o&&u(d,l,o[e])}else{if(l>=h)throw TypeError(v);u(d,l++,o)}return d.length=l,d}})},a013:function(t,n,e){"use strict";e("36da")},a579:function(t,n,e){},e5a5:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"Character"},[r("img",{attrs:{src:e("08bf"),alt:"the character"}})])}],o={name:"Character"},i=o,c=(e("a013"),e("2877")),s=Object(c["a"])(i,r,a,!1,null,"35068f60",null);n["a"]=s.exports},e8b5:function(t,n,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-7f4c9b3c.059b406f.js.map