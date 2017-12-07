var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var observable = require("data/observable");
var pageData = new observable.Observable();
var FancyAlert = require("nativescript-fancyalert");
var calendarModule = require("nativescript-pro-ui/calendar");
var frameModule = require("ui/frame");



var page;

exports.pageNavigating = function(args) {
    page = args.object;
    orientationModule.orientationCleanup();
    page.bindingContext = pageData;
    pageData.set("showMonthCal", true);
	pageData.set("showWeekCal", false);
    pageData.set("showOneYearCal", false);
    pageData.set("showFourYearCal", false);
    pageData.set("title", "Quarter Plan");
    var button = page.getViewById("quarterButton");
    button.class="selectPlanSelected";
}

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");
    page = args.object;
    page.bindingContext = pageData;

    var eventTitles = ["Assignment 1 Due", "Assignment 2 Due", "Assignment 3 Due", "Midterm", "Final"];
    var events = [];

    var j = 1;
    for (var i = 0; i < eventTitles.length; i++) {
        var now = new Date();
        var startDate = new Date(now.getFullYear(), now.getMonth(), j * 2, 12);
        var endDate = new Date(now.getFullYear(), now.getMonth(), (j * 2) + (j % 3), 13);
        var event = new calendarModule.CalendarEvent(eventTitles[i], startDate, endDate);
        events.push(event);
        j++;
    }

    pageData.set("events", events);
	pageData.set("showWeekCal", false); 
}

exports.showCalendar = function () {
    pageData.set("showMonthCal", true);
    pageData.set("showWeekCal", false);
    pageData.set("showOneYearCal", false);
    pageData.set("showFourYearCal", false);
    pageData.set("title", "Quarter Plan");
    var button = page.getViewById("quarterButton");
    button.class="selectorButton";
    var otherButton1 = page.getViewById("yearButton");
    otherButton1.class="selectorButton";
    var otherButton2 = page.getViewById("fourButton");
    otherButton2.class="selectorButton";
    var otherButton3 = page.getViewById("calendarButton");
    otherButton3.class="selectPlanSelected";

}

exports.showWeek = function () {
    pageData.set("showMonthCal", false);
    pageData.set("showWeekCal", true);
    pageData.set("showOneYearCal", false);
    pageData.set("showFourYearCal", false);
    pageData.set("title", "Quarter Plan");
    var button = page.getViewById("quarterButton");
    button.class="selectPlanSelected";
    var otherButton1 = page.getViewById("yearButton");
    otherButton1.class="selectorButton";
    var otherButton2 = page.getViewById("fourButton");
    otherButton2.class="selectorButton";
    var otherButton3 = page.getViewById("calendarButton");
    otherButton3.class="selectorButton";

}

exports.showOneYear = function () {
    pageData.set("showMonthCal", false);
    pageData.set("showWeekCal", false);
    pageData.set("showOneYearCal", true);
    pageData.set("showFourYearCal", false);
    pageData.set("title", "1-Year Plan");
    var button = page.getViewById("yearButton");
    button.class="selectPlanSelected";
    var otherButton1 = page.getViewById("quarterButton");
    otherButton1.class="selectorButton";
    var otherButton2 = page.getViewById("fourButton");
    otherButton2.class="selectorButton";
    var otherButton3 = page.getViewById("calendarButton");
    otherButton3.class="selectorButton";
}

exports.showFourYear = function () {
    pageData.set("showMonthCal", false);
    pageData.set("showWeekCal", false);
    pageData.set("showOneYearCal", false);
    pageData.set("showFourYearCal", true);
    pageData.set("title", "4-Year Plan");
    var button = page.getViewById("fourButton");
    button.class="selectPlanSelected";
    var otherButton1 = page.getViewById("quarterButton");
    otherButton1.class="selectorButton";
    var otherButton2 = page.getViewById("yearButton");
    otherButton2.class="selectorButton";
    var otherButton3 = page.getViewById("calendarButton");
    otherButton3.class="selectorButton";
}

exports.sync = function() {
    FancyAlert.TNSFancyAlert.showWaiting("Syncing with your calendar...", "Doing magic and playing with grasshoppers", null, 3, 350);
}

// Navigation

exports.viewDashboard = function() {
    frameModule.topmost().navigate("views/dashboardView/dashboardView");
}

exports.viewSchedule = function() {
    frameModule.topmost().navigate("views/calendarView/calendarView");
}

exports.viewRequirements = function() {
    frameModule.topmost().navigate("views/requirementsView/requirementsView");
}

exports.viewLogout = function() {
    frameModule.topmost().navigate("views/onboarding/landingView/landingView");
}

