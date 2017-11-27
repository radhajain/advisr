var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var frameModule = require("ui/frame");
var StorageUtil = require('~/util/StorageUtil');

var page;

exports.pageNavigating = function(args) {
    page = args.object;
    StorageUtil.setUpDB();
    orientationModule.orientationCleanup();
}

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");	
}

exports.goToInterestsView = function() {
	frameModule.topmost().navigate("views/onboarding/interestsView/interestsView");
}