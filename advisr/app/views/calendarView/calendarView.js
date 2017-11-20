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
    var title = "Radha Jain's Progress Report"
	pageData.set("title", title);
}

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");
	// pageData.set("showWeekCal", false);
	
	 
}

// exports.toggle = function () {
//     pageData.set("showWeekCal", !pageData.get("showWeekCal"));
// }