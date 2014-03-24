angular.module("smoothScroll",[]).directive("smoothScroll",["$timeout","smoothScroll",function(t,e){return{restrict:"A",link:function(n,o,r){t(function(){(void 0===r.scrollIf||"true"===r.scrollIf)&&e(o[0],{duration:r.duration,offset:r.offset,easing:r.easing})})}}}]).directive("scrollTo",["smoothScroll",function(t){return{restrict:"A",link:function(e,n,o){var r;n.on("click",function(e){return r=document.getElementById(o.scrollTo),r?(e.preventDefault(),t(r,{duration:o.duration,offset:o.offset,easing:o.easing}),!1):void 0})}}}]).factory("smoothScroll",["$timeout",function(t){var e=function(e,n){t(function(){var t,o,r=window.pageYOffset,u=0;n=n||{};var i=n.duration||800,a=n.offset||0,s=n.easing||"easeInOutQuart",f=function(t,e){return"easeInQuad"==t?e*e:"easeOutQuad"==t?e*(2-e):"easeInOutQuad"==t?.5>e?2*e*e:-1+(4-2*e)*e:"easeInCubic"==t?e*e*e:"easeOutCubic"==t?--e*e*e+1:"easeInOutCubic"==t?.5>e?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1:"easeInQuart"==t?e*e*e*e:"easeOutQuart"==t?1- --e*e*e*e:"easeInOutQuart"==t?.5>e?8*e*e*e*e:1-8*--e*e*e*e:"easeInQuint"==t?e*e*e*e*e:"easeOutQuint"==t?1+--e*e*e*e*e:"easeInOutQuint"==t?.5>e?16*e*e*e*e*e:1+16*--e*e*e*e*e:e},c=function(t){var e=0;if(t.offsetParent)do e+=t.offsetTop,t=t.offsetParent;while(t);return e=Math.max(e-a,0)},l=c(e),d=l-r,I=function(){var t=window.pageYOffset;o!=l&&t!=l&&window.innerHeight+t<document.body.scrollHeight||clearInterval(m)},v=function(){u+=16,t=u/i,t=t>1?1:t,o=r+d*f(s,t),window.scrollTo(0,o),I()},m=setInterval(v,16)})};return e}]);