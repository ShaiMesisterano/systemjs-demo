System.register(["react","react-redux","../store/index","../store/slices/counter/index"],(function(e,t){"use strict";var n,r,u,c,l,o;return t&&t.id,{setters:[function(e){n=e},function(e){r=e,c=e},function(e){u=e},function(e){l=e}],execute:function(){o=function(){var e=c.useDispatch(),t=n.useCallback((function(){console.log("*** handleClick"),e(l.increment())}),[]);return n.default.createElement(r.Provider,{store:u.default},n.default.createElement("button",{style:{background:"blue"},onClick:t},"I'm not BLUE"))},e("default",(function(){return n.default.createElement(r.Provider,{store:u.default},n.default.createElement(o,null))}))}}}));