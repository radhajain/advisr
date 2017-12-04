/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

require("./bundle-config");
var application = require("application");
var StorageUtil = require('~/util/StorageUtil');


if (StorageUtil.isOnboardingComplete() && StorageUtil.getMajors().length !== 0 && StorageUtil.getName()) {
	application.start({ moduleName: "views/dashboardView/dashboardView" });
} else {
	application.start({ moduleName: "views/onboarding/landingView/landingView" });

}

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/



// exports.pageLoaded = function(args) {
// 	orientationModule.setCurrentOrientation("landscape");
	 
// }

// exports.viewSchedule = function() {
// 	frameModule.topmost().navigate("views/calendarView/calendarView");
// }

// exports.viewMoreGER = function() {
// 	var options = {
// 	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
// 	    context: {
// 	      requirement: "GER",
// 	      major: "General Education Requirements"
// 	    }
// 	} 
// 	frameModule.topmost().navigate(options);
// }

// exports.viewMoreMajor1 = function() {
// 	var options = {
// 	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
// 	    context: {
// 	      requirement: "Major 1",
// 	      major: majors[0]
// 	    }
// 	} 
// 	frameModule.topmost().navigate(options);
// }

// exports.viewMoreMajor2 = function() {
// 	var options = {
// 	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
// 	    context: {
// 	      requirement: "Major 2",
// 	      major: majors[1]
// 	    }
// 	} 
// 	frameModule.topmost().navigate(options);
// }

// exports.viewMoreMajor3 = function() {
// 	var options = {
// 	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
// 	    context: {
// 	      requirement: "Major 3",
// 	      major: majors[2]
// 	    }
// 	} 
// 	frameModule.topmost().navigate(options);
// }


// exports.viewMoreMinor1 = function() {
// 	var options = {
// 	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
// 	    context: {
// 	      requirement: "Minor 1",
// 	      major: minors[0]
// 	    }
// 	} 
// 	frameModule.topmost().navigate(options);
// }




// exports.viewMoreMinor2 = function() {
// 	var options = {
// 	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
// 	    context: {
// 	      requirement: "Minor 2",
// 	      major: minors[1]
// 	    }
// 	} 
// 	frameModule.topmost().navigate(options);
// }


// exports.viewMoreMinor3 = function() {
// 	var options = {
// 	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
// 	    context: {
// 	      requirement: "Minor 3",
// 	      major: minors[2]
// 	    }
// 	} 
// 	frameModule.topmost().navigate(options);

// }
