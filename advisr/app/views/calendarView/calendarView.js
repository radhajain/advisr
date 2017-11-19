var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var observable = require("data/observable");
var pageData = new observable.Observable();

var page;

exports.pageNavigating = function(args) {
    page = args.object;
    orientationModule.orientationCleanup();
    page.bindingContext = pageData;
    console.log("on calendar view");
    var title = "Radha Jain's Progress Report"
	pageData.set("title", title);
}

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");
	
	 
}