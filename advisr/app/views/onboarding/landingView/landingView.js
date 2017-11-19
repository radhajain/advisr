var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var frameModule = require("ui/frame");

var page;

exports.pageNavigating = function(args) {
    page = args.object;
    orientationModule.orientationCleanup();
}

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");	
}

exports.goToInterestsView = function() {
	frameModule.topmost().navigate("views/onboarding/interestsView/interestsView");
}