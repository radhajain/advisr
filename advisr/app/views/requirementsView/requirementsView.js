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
	var date = "November 18, 2017"
	pageData.set("date", date);
}

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");
	
	 
}