(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[762],{687:function(e,t,n){"use strict";n.r(t),n.d(t,{getMovieCredits:function(){return p},getMovieReviews:function(){return f},getMovies:function(){return s},getMoviesDetails:function(){return u},getTrendingMovies:function(){return o}});var r=n(861),a=n(757),c=n.n(a),i=n(44);i.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/search/movie?api_key=".concat("b1c22453ab727ba241be47f111966580","&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("trending/movie/week?api_key=".concat("b1c22453ab727ba241be47f111966580"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(t,"?api_key=").concat("b1c22453ab727ba241be47f111966580"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(t,"/credits?api_key=").concat("b1c22453ab727ba241be47f111966580"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat("b1c22453ab727ba241be47f111966580"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},762:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r,a,c,i=n(885),s=n(168),o=n(731),u=n(444),p=u.ZP.div(r||(r=(0,s.Z)(["\n  /* display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n   */\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n"]))),f=u.ZP.li(a||(a=(0,s.Z)(["\nwidth: 300px;\noutline: 1px solid black;\nborder-radius: 4px;\n>a>h3{\ntext-align: center;\n}\n>a>p{\ntext-align: center;\n}\n"]))),d=(0,u.ZP)(o.OL)(c||(c=(0,s.Z)(["\nwidth: 300px;\n"]))),l=n(7),v=n.n(l),h=n(184),b=n(687).getTrendingMovies,g=n(791),x=g.useState,m=g.useEffect;p.propTypes={trendingMovies:v().arrayOf(v().shape({id:v().string.isRequired,title:v().string.isRequired,release_date:v().string,vote_average:v().string}))};var y=function(){var e=x([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],a="https://image.tmdb.org/t/p/",c="w300";return m((function(){b().then((function(e){r(e.results)}))}),[]),(0,h.jsx)("main",{children:(0,h.jsx)(p,{children:n.map((function(e){var t=e.id,n=e.title,r=e.poster_path,i=e.release_date,s=e.vote_average;return(0,h.jsx)(f,{children:(0,h.jsxs)(d,{to:"/movies/".concat(t),children:[(0,h.jsx)("img",{alt:n,src:"".concat(a).concat(c).concat(r)}),(0,h.jsx)("h3",{children:n}),(0,h.jsxs)("p",{children:["Release date: ",i]}),(0,h.jsxs)("p",{children:["Vote average: ",s]})]})},t)}))})})},w=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(y,{})})}},888:function(e,t,n){"use strict";var r=n(47);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,c,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=762.93c54b66.chunk.js.map