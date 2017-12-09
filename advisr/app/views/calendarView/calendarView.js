var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var observable = require("data/observable");
var pageData = new observable.Observable();
var FancyAlert = require("nativescript-fancyalert");
var calendarModule = require("nativescript-pro-ui/calendar");
var frameModule = require("ui/frame");
var StorageUtil = require("~/util/StorageUtil");


var majors = StorageUtil.getMajors();

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
    var button = page.getViewById("calendarButton");
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

    var majList = StorageUtil.getMajors();
    var minList = StorageUtil.getMinors();
    var mList = majList.concat(minList);

    for (var i = 0; i < mList.length; i++) {
        console.log(mList);
        var classes = StorageUtil.getClasses(mList[i]);
        console.log(classes);
        var currCore = classes[0].core;
        var currElec = classes[1].electives;
        var totalClasses = currCore.concat(currElec);
        
        for (var x = 0; x < totalClasses.length; x++){
            //i = major number, x = class number
            var makeString = "m" + i + "" + x;
            pageData.set(String(makeString), totalClasses[x][0]);
            page.getElementById(String(makeString)).visibility = "visible";
        }
    } 
    var fallSummary = "Total Units: 18" + '\n' + "PSets: 7" +  '\n' + "Papers: 2" +  '\n' +  "3 Midterms, 2 Finals";
    pageData.set("fallSummary", fallSummary);
    var winterSummary = "Total Units: 20" + '\n' + "PSets: 12" +  '\n' + "Papers: 1" +  '\n' +  "4 Midterms, 4 Finals";
    pageData.set("winterSummary", winterSummary);
    var springSummary = "Total Units: 13" + '\n' + "PSets: 5" +  '\n' + "Papers: 3" +  '\n' +  "1 Midterm, 1 Final";
    pageData.set("springSummary", springSummary);


}

exports.showClassChange = function(args) {
    console.log("chaing class");
    var button = args.object;
    button.visibility = "collapse";
    var boxId = args.object.id + "Box";
    page.getViewById(boxId).visibility = "collapse";
}



exports.showCalendar = function () {
    pageData.set("showMonthCal", true);
    pageData.set("showWeekCal", false);
    pageData.set("showOneYearCal", false);
    pageData.set("showFourYearCal", false);
    pageData.set("title", "Quarter Plan");
    // var button = page.getViewById("quarterButton");
    // button.class="selectorButton";
    var otherButton1 = page.getViewById("yearButton");
    otherButton1.class="selectorButton";
    var otherButton2 = page.getViewById("fourButton");
    otherButton2.class="selectorButton";
    var otherButton3 = page.getViewById("calendarButton");
    otherButton3.class="selectPlanSelected";

}

// exports.showWeek = function () {
//     pageData.set("showMonthCal", false);
//     pageData.set("showWeekCal", true);
//     pageData.set("showOneYearCal", false);
//     pageData.set("showFourYearCal", false);
//     pageData.set("title", "Quarter Plan");
//     // var button = page.getViewById("quarterButton");
//     // button.class="selectPlanSelected";
//     var otherButton1 = page.getViewById("yearButton");
//     otherButton1.class="selectorButton";
//     var otherButton2 = page.getViewById("fourButton");
//     otherButton2.class="selectorButton";
//     var otherButton3 = page.getViewById("calendarButton");
//     otherButton3.class="selectorButton";

// }

exports.showOneYear = function () {
    pageData.set("showMonthCal", false);
    pageData.set("showWeekCal", false);
    pageData.set("showOneYearCal", true);
    pageData.set("showFourYearCal", false);
    pageData.set("title", "1-Year Plan");
    var button = page.getViewById("yearButton");
    button.class="selectPlanSelected";

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

    var otherButton2 = page.getViewById("yearButton");
    otherButton2.class="selectorButton";
    var otherButton3 = page.getViewById("calendarButton");
    otherButton3.class="selectorButton";
}

exports.syncCalendar = function() {
    FancyAlert.TNSFancyAlert.showWaiting("Syncing with your calendar...", "hello ", null, 3, 350);
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

exports.viewMoreMajor1 = function() {
    var options = {
        moduleName: 'views/requirementsDetailView/requirementsDetailView',
        context: {
          requirement: "Major 1",
          major: majors[0]
        }
    } 
    frameModule.topmost().navigate(options);
}

