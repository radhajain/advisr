var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");

exports.pageNavigating = function(args) {
    page = args.object;
     orientationModule.orientationCleanup();
}

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape",function(){
	    console.log("landscape orientation set");
	});
}