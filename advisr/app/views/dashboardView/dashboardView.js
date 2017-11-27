var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var observable = require("data/observable");
var pageData = new observable.Observable();
var frameModule = require("ui/frame");
var StorageUtil = require("~/util/StorageUtil");

var page;
var secondMajor = false;
var thirdMajor = false;
var GERspan = 3;
var majors;

exports.pageNavigating = function(args) {
    page = args.object;
    orientationModule.orientationCleanup();
    page.bindingContext = pageData;
    var title = "Radha Jain's Progress Report";
	pageData.set("title", title);
	init();
	
}


var init = function() {
	majors = StorageUtil.getMajors();
	pageData.set("major1", majors[0]);
	if (majors.length >= 2) {
		pageData.set("major2", majors[1]);
		secondMajor = true;
		GERspan = 2;
		if (majors.length === 3) {
			pageData.set("major3", majors[2]);
			thirdMajor = true;
			GERspan = 1;
		}
	}
	pageData.set("showSecond", secondMajor);
	pageData.set("showThird", thirdMajor);
	pageData.set("GERspan", GERspan);
	pageData.set("GERcol", 4-GERspan);
}




exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");
	 
}

exports.viewSchedule = function() {
	frameModule.topmost().navigate("views/calendarView/calendarView");
}


exports.viewMoreGER = function() {
	var options = {
	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
	    context: {
	      requirement: "GER",
	      major: "General Education Requirements"
	    }
	} 
	frameModule.topmost().navigate(options);
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

exports.viewMoreMajor2 = function() {
	var options = {
	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
	    context: {
	      requirement: "Major 2",
	      major: majors[1]
	    }
	} 
	frameModule.topmost().navigate(options);
}

exports.viewMoreMajor3 = function() {
	var options = {
	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
	    context: {
	      requirement: "Major 3",
	      major: majors[2]
	    }
	} 
	frameModule.topmost().navigate(options);
}