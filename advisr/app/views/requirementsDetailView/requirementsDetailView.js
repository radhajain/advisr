var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var observable = require("data/observable");
var pageData = new observable.Observable();
var StorageUtil = require("~/util/StorageUtil");

var page;



var CS = [
	{core: ["Do all of: ", "CS106A", "CS106B", "CS107", "CS103", "CS109", "CS147", "CS247"]},
	{hci: ["Pick 3 of: ", "CS193", "CS108", "CS148", "CS142", "CS210A"]}];





exports.pageNavigating = function(args) {
    page = args.object;
    if (page.navigationContext) {
      var title = page.navigationContext.requirement;
      var major = page.navigationContext.major;
    }
    orientationModule.orientationCleanup();
    page.bindingContext = pageData;
    pageData.set("title", title);
    pageData.set("major", major);
}

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");
	
	 
}