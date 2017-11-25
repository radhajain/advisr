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
	pageData.set("showWeekCal", true);
    pageData.set("showOneYearCal", false);
    pageData.set("showFourYearCal", false);
    pageData.set("title", "Quarter Plan");
    var button = page.getViewById("quarterButton");
    button.class="selectPlanSelected";
}

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");
	// pageData.set("showWeekCal", false);
	
	 
}

exports.showWeek = function () {
    pageData.set("showWeekCal", true);
    pageData.set("showOneYearCal", false);
    pageData.set("showFourYearCal", false);
    pageData.set("title", "Quarter Plan");
    var button = page.getViewById("quarterButton");
    button.class="selectPlanSelected";
    var otherButton1 = page.getViewById("yearButton");
    otherButton1.class="selectPlan";
    var otherButton2 = page.getViewById("fourButton");
    otherButton2.class="selectPlan";

}

exports.showOneYear = function () {
    pageData.set("showWeekCal", false);
    pageData.set("showOneYearCal", true);
    pageData.set("showFourYearCal", false);
    pageData.set("title", "1-Year Plan");
    var button = page.getViewById("yearButton");
    button.class="selectPlanSelected";
    var otherButton1 = page.getViewById("quarterButton");
    otherButton1.class="selectPlan";
    var otherButton2 = page.getViewById("fourButton");
    otherButton2.class="selectPlan";
}

exports.showFourYear = function () {
    pageData.set("showWeekCal", false);
    pageData.set("showOneYearCal", false);
    pageData.set("showFourYearCal", true);
    pageData.set("title", "4-Year Plan");
     var button = page.getViewById("fourButton");
    button.class="selectPlanSelected";
    var otherButton1 = page.getViewById("quarterButton");
    otherButton1.class="selectPlan";
    var otherButton2 = page.getViewById("yearButton");
    otherButton2.class="selectPlan";
}