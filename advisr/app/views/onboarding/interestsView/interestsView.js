var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var frameModule = require("ui/frame");

var page;
var container;

exports.pageNavigating = function(args) {
    page = args.object;
    orientationModule.orientationCleanup();
}

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");	
	container = page.getElementById("slides-container");
}

exports.changeSlide = function() {
	container.nextSlide();
}
