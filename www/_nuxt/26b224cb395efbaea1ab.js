(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{257:function(t,n,e){var content=e(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(21).default)("65a8be43",content,!0,{sourceMap:!1})},258:function(t,n,e){var content=e(265);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(21).default)("7bd5a122",content,!0,{sourceMap:!1})},260:function(t,n,e){"use strict";var o=e(257),l=e.n(o);n.default=l.a},261:function(t,n,e){(n=t.exports=e(20)(!1)).push([t.i,"#container_1fFt5{display:flex;padding:5pt}#container_1fFt5>a{color:#5dbd37;text-decoration:none;font-size:1.3em;font-weight:400;transition:opacity .2s}#container_1fFt5>a:hover{opacity:.3}",""]),n.locals={container:"container_1fFt5"}},262:function(t,n,e){"use strict";var o={props:{onClick:Function,to:String,label:{type:String,default:"Next"}}},l=e(260),c=e(5);var component=Object(c.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:t.$style.container}},[t.to?e("nuxt-link",{attrs:{to:t.to}},[t._v(t._s(t.label)+" >")]):t.onClick?e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(n){return t.onClick()}}},[t._v(t._s(t.label)+" >")]):e("span",[t._v(t._s(t.label)+" >")])],1)},[],!1,function(t){this.$style=l.default.locals||l.default},null,null);n.a=component.exports},264:function(t,n,e){"use strict";var o=e(258),l=e.n(o);n.default=l.a},265:function(t,n,e){(n=t.exports=e(20)(!1)).push([t.i,"#container_3huRF{display:flex;padding:5pt}#container_3huRF>a>img{text-decoration:none;transition:opacity .2s}#container_3huRF>a:hover>img{opacity:.3}",""]),n.locals={container:"container_3huRF"}},266:function(t,n,e){"use strict";var o={},l=e(264),c=e(5);var component=Object(c.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("section",{attrs:{id:this.$style.container}},[n("nuxt-link",{attrs:{to:"/"}},[n("img",{attrs:{src:e(124)}})])],1)},[],!1,function(t){this.$style=l.default.locals||l.default},null,null);n.a=component.exports},269:function(t,n,e){var content=e(305);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(21).default)("48f76301",content,!0,{sourceMap:!1})},304:function(t,n,e){"use strict";var o=e(269),l=e.n(o);n.default=l.a},305:function(t,n,e){(n=t.exports=e(20)(!1)).push([t.i,"#container_l9vwW{display:flex;flex-direction:column;min-height:100vh}#top_3b8jQ{justify-content:flex-end}#body_2vIIF,#top_3b8jQ{display:flex}#body_2vIIF{flex-direction:column;flex:1;justify-content:center;align-items:center;text-align:center}#body_2vIIF img{max-height:100pt}#nav_3-d4E{display:flex;align-items:flex-end;flex-direction:column}",""]),n.locals={container:"container_l9vwW",top:"top_3b8jQ",body:"body_2vIIF",nav:"nav_3-d4E"}},391:function(t,n,e){"use strict";e.r(n);var o=e(117),l=e(266),c=e(262),r={components:{Logo:o.a,CloseButton:l.a,NextButton:c.a},layout:"fullscreen",methods:{onNext:function(t){this.$store.commit("app/first_start"),this.$store.commit("controllers/configure_search_new_controller",{url:"192.168.4.1",is_sta:!1})}}},f=e(304),d=e(5);var component=Object(d.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:t.$style.container}},[e("section",{attrs:{id:t.$style.body}},[t._m(0),t._v(" "),e("Logo",{attrs:{color:"black",size:"3em"}})],1),t._v(" "),e("section",{attrs:{id:t.$style.nav}},[e("NextButton",{attrs:{to:"/new/plug"},nativeOn:{click:function(n){return t.onNext(n)}}}),t._v(" "),e("small",[t._v('* clicking this "Next >" button confirms that you are major in your state and are not violating any laws.')])],1)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("b",[this._v("Welcome to")])])}],!1,function(t){this.$style=f.default.locals||f.default},null,null);n.default=component.exports}}]);