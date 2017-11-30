var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var observable = require("data/observable");
var pageData = new observable.Observable();
var frameModule = require("ui/frame");
var StorageUtil = require("~/util/StorageUtil");

var page;
var majors;
var minors;
var secondMajor = false;
var thirdMajor = false;
var firstMinor = false;
var secondMinor = false;
var thirdMinor = false;

exports.pageNavigating = function(args) {
    page = args.object;
    orientationModule.orientationCleanup();
    page.bindingContext = pageData;
	var date = "November 18, 2017"
	pageData.set("date", date);
	init();
}

var init = function() {
	majors = StorageUtil.getMajors();
	minors = StorageUtil.getMinors();
	var numMajors = majors.length;
	var numMinors = minors.length;
	pageData.set("major1", majors[0]);
	setGrid(StorageUtil.getClasses(majors[0]), "coreMajor1", true);
	setGrid(StorageUtil.getClasses(majors[0]), "electivesMajor1", false);
	if (numMajors >= 2) {
		pageData.set("major2", majors[1]);
		setGrid(StorageUtil.getClasses(majors[1]), "coreMajor2", true);
		setGrid(StorageUtil.getClasses(majors[1]), "electivesMajor2", false);
		secondMajor = true;
		if (numMajors === 3) {
			pageData.set("major3", majors[2]);
			setGrid(StorageUtil.getClasses(majors[2]), "coreMajor3", true);
			setGrid(StorageUtil.getClasses(majors[2]), "electivesMajor3", false);
			thirdMajor = true;
		}
	}
	pageData.set("secondMajor", secondMajor);
	pageData.set("thirdMajor", thirdMajor);
	if (numMinors >= 1) {
		pageData.set("minor1", minors[0]);
		firtMinor = true;
		if (numMinors >= 2) {
			pageData.set("minor2", minors[1]);
			secondMinor = true;
			if (numMinors === 3) {
				pageData.set("minor3", minors[2]);
				thirdMinor = true;
			}
		}
	}
	pageData.set("firstMinor", firstMinor);
	pageData.set("secondMinor", secondMinor);
	pageData.set("thirdMinor", thirdMinor);
}


var setGrid = function(classes, id, core) {
	var classToPush = [];
	var temp;
	if (core) {
		var remaining = classes[0].core.length%3;
		for (var i = 0; i < classes[0].core.length; i++) {
			if (i % 3 == 0) {
				temp = {one: classes[0].core[i][0]};
			} else if (i % 3 == 1) {
				temp.two = classes[0].core[i][0];
			} else {
				temp.three = classes[0].core[i][0];
				classToPush.push(temp);
			}
		} 
		if (remaining == 1) {
			temp = {one: classes[0].core[classes[0].core.length - 1][0]};
			temp.two= "";
			temp.three = "";
			classToPush.push(temp);
		} else if (remaining == 2) {
			temp = {one: classes[0].core[classes[0].core.length - 2][0]};
			temp.two = classes[0].core[classes[0].core.length - 1][0];
			temp.three = "";
			classToPush.push(temp);
		}
		pageData.set(id, classToPush);
	} else {
		var remaining = classes[1].electives.length%3;
		for (var i = 0; i < classes[1].electives.length; i++) {
			if (i % 3 == 0) {
				temp = {one: classes[1].electives[i][0]};
			} else if (i % 3 == 1) {
				temp.two = classes[1].electives[i][0];
			} else {
				temp.three = classes[1].electives[i][0];
				classToPush.push(temp);
			}
		} 
		if (remaining == 1) {
			temp = {one: classes[1].electives[classes[1].electives.length - 1][0]};
			temp.two= "";
			temp.three = "";
			classToPush.push(temp);
		} else if (remaining == 2) {
			temp = {one: classes[1].electives[classes[1].electives.length - 2][0]};
			temp.two = classes[1].electives[classes[1].electives.length - 1][0];
			temp.three = "";
			classToPush.push(temp);
		}
		pageData.set(id, classToPush);
	}
	
};

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");
}

exports.viewMoreGER = function() {
	var options = {
	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
	    context: {
	      requirement: "GER"
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


exports.viewMoreMinor1 = function() {
	var options = {
	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
	    context: {
	      requirement: "Minor 1",
	      major: minors[0]
	    }
	} 
	frameModule.topmost().navigate(options);
}




exports.viewMoreMinor2 = function() {
	var options = {
	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
	    context: {
	      requirement: "Minor 2",
	      major: minors[1]
	    }
	} 
	frameModule.topmost().navigate(options);
}


exports.viewMoreMinor3 = function() {
	var options = {
	    moduleName: 'views/requirementsDetailView/requirementsDetailView',
	    context: {
	      requirement: "Minor 3",
	      major: minors[2]
	    }
	} 
	frameModule.topmost().navigate(options);

}
