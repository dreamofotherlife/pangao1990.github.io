// build time:Wed Sep 25 2019 23:16:15 GMT+0800 (GMT+08:00)
$(document).ready(function(){function t(){var t=$("#footer").attr("position")?$(".container").height()+$("#footer").outerHeight(true):$(".container").height();if(t<window.innerHeight)$("#footer").css({position:"fixed",bottom:0,left:0,right:0}).attr("position","fixed");else $("#footer").removeAttr("style position")}t();$(window).on("resize scroll",t)});
//rebuild by neat 