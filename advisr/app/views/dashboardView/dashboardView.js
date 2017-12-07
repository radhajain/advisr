var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var observable = require("data/observable");
var pageData = new observable.Observable();
var frameModule = require("ui/frame");
var StorageUtil = require("~/util/StorageUtil");

var page;
var year;
var secondMajor = false;
var thirdMajor = false;

//GER card tile positioning
var GERrow = 1;
var GERcol = 0;
var GERspan = 3;

var majors;
var minors;
var tile_sum;

exports.pageNavigating = function(args) {
    page = args.object;
    orientationModule.orientationCleanup();
    page.bindingContext = pageData;
    
	var name = StorageUtil.getName();
	if (!name) {
		var title = "Progress Report";
	} else{
		var title = name + "'s Progress Report";		
	}
	pageData.set("title", title);
	year = StorageUtil.getYear();
	pageData.set("year", year);
	var majors = StorageUtil.getMajors();
	if (majors[1]) {
		var info = year + ": " + majors[0] + ", " + majors[1];
		if (majors[2]) {
			var info = year + ": " + majors[0] + ", " + majors[1] + ", " + majors[2];
		}
	} else {
		var info = year + ": " + majors[0];
	}
	pageData.set("userInfo", info);
	var minors = StorageUtil.getMinors();
	if (minors[0]) {
		pageData.set("showMinors", true);
		if (minors[1]) {
			var userMinors = "Minors: " + minors[0] + ", " + minors[1];
			if (minors[2]) {
				var userMinors = "Minors: " + minors[0] + ", " + minors[1] + ", " + minors[2];
			}
		} else {
			var userMinors = "Minors: " + minors[0];
		}
	} else {
		pageData.set("showMinors", false);
	}
	pageData.set("userMinors", userMinors);
	
	init();
}


var init = function() {
	majors = StorageUtil.getMajors();
	minors = StorageUtil.getMinors();

	tile_sum = majors.length + minors.length;

	// if (tile_sum === 1) {
	// 	GERcol = 2;
	// } else {
	// 	GERrow = 1;
	// 	if (tile_sum === 2) {
	// 		GERcol = 0;
	// 	} else if (tile_sum >== 3) {
	// 		GERcol = tile_sum - 3;
	// 	}
	// }

	if(tile_sum === 1){
		GERrow = 0;
		GERcol = 2;
	} else if (tile_sum > 3){
		GERcol = tile_sum - 3;
	}

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
	pageData.set("GERcol", GERcol);
	pageData.set("GERrow", GERrow);

	//pageData.set("GERcol", 4-GERspan);
	if (year === "Freshman" || year ==="Sophomore") {
		pageData.set("freshSoph", true);
		pageData.set("progress1", "30%");
		pageData.set("progress2", "10%");
		pageData.set("progress3", "10%");
	} else {
		pageData.set("freshSoph", false);
		pageData.set("progress1", "70%");
		pageData.set("progress2", "50%");
		pageData.set("progress3", "30%");
	}
}




exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");
	 
}

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
	StorageUtil.logOut();

	frameModule.topmost().navigate("views/onboarding/landingView/landingView");
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