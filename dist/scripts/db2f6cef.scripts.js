"use strict";angular.module("ngApp",["ngCookies","ngResource","ngSanitize","ngRoute","firebase","slugifier","sticky","smoothScroll"]).config(["$routeProvider","$locationProvider",function(a,b){b.html5Mode(!0),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/details",{templateUrl:"views/details.html",controller:"DetailsCtrl"}).when("/colors",{templateUrl:"views/colors.html"}).when("/conversation",{templateUrl:"views/conversation.html"}).otherwise({redirectTo:"/"})}]),angular.module("ngApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("ngApp").controller("AboutCtrl",["$scope","$firebase","$anchorScroll",function(a,b,c){var d=new Firebase("https://craigandnic.firebaseio.com/timeline");a.timeline=b(d),a.scrollTo=function(){c()}}]),$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),$(function(){$(".page-scroll a").bind("click",function(a){var b=$(this);$("html, body").stop().animate({scrollTop:$(b.attr("href")).offset().top},1500,"easeInOutExpo"),a.preventDefault()})}),$(window).load(function(){$(".swatch").swatchify(),$("#countdown").countdown({since:new Date("March 8, 2014 20:00:00"),compact:!0,layout:'<p class="navbar-text">Engaged for: {o<} {on} months,{o>} {dn} days</p> {desc}',description:""})});