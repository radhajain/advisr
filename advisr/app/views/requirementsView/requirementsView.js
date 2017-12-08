var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var observable = require("data/observable");
var pageData = new observable.Observable();
var frameModule = require("ui/frame");
var StorageUtil = require("~/util/StorageUtil");
var gridLayout = require("ui/layouts/grid-layout");

var page;
var majors;
var minors;
var year;
var secondMajor = false;
var thirdMajor = false;
var firstMinor = false;
var secondMinor = false;
var thirdMinor = false;


exports.pageNavigating = function(args) {
    page = args.object;
    if (page.navigationContext) {
      var title = page.navigationContext.requirement;
      var major = page.navigationContext.major;
    }
    orientationModule.orientationCleanup();
    page.bindingContext = pageData;
	var date = "November 18, 2017"
	pageData.set("date", date);
	pageData.set("title", title);
    pageData.set("major", major);
    setGrid(StorageUtil.getClasses(major), "coreMajor1", true);
    setGrid(StorageUtil.getClasses(major), "electivesMajor1", false);
	init();
}




// exports.pageNavigating = function(args) {
//     page = args.object;
//     if (page.navigationContext) {
//       var title = page.navigationContext.requirement;
//       var major = page.navigationContext.major;
//     }
//     orientationModule.orientationCleanup();
//     page.bindingContext = pageData;
//     pageData.set("title", title);
//     pageData.set("major", major);
//     setGrid(StorageUtil.getClasses(major), "coreMajor1", true);
//     setGrid(StorageUtil.getClasses(major), "electivesMajor1", false);
// }

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");
	 
}


var setGrid = function(classes, id, core) {
  var classToPush = [];
  var temp;

  var classArr = [];
  if(core){
    classArr = classes[0].core;
  } else {
    classArr = classes[1].electives;
  }

  // if (core) {
    var remaining = classArr.length%3;
    for (var i = 0; i < classArr.length; i++) {
      if (i % 3 == 0) {
        temp = {one: classArr[i][0]};
      } else if (i % 3 == 1) {
        temp.two = classArr[i][0];
      } else {
        temp.three = classArr[i][0];
        classToPush.push(temp);
      }
    } 
    if (remaining == 1) {
      temp = {one: classArr[classArr.length - 1][0]};
      temp.two= "";
      temp.three = "";
      classToPush.push(temp);
    } else if (remaining == 2) {
      temp = {one: classArr[classArr.length - 2][0]};
      temp.two = classArr[classArr.length - 1][0];
      temp.three = "";
      classToPush.push(temp);
    }
    pageData.set(id, classToPush);
  // } 
 };







var init = function() {
	// var grid = page.getViewById("grid");
	// majors = StorageUtil.getMajors();
	// minors = StorageUtil.getMinors();
	// year = StorageUtil.getYear();
	// var numMajors = majors.length;
	// var numMinors = minors.length;
	// pageData.set("major1", majors[0]);
	// setGrid(StorageUtil.getClasses(majors[0]), "coreMajor1", true);
	// setGrid(StorageUtil.getClasses(majors[0]), "electivesMajor1", false);
	// setClassPicture("firstMajorCard", majors[0]);
	// if (numMajors >= 2) {
	// 	pageData.set("major2", majors[1]);
	// 	setGrid(StorageUtil.getClasses(majors[1]), "coreMajor2", true);
	// 	setGrid(StorageUtil.getClasses(majors[1]), "electivesMajor2", false);
	// 	secondMajor = true;
	// 	setClassPicture("secondMajorCard", majors[1]);
	// 	if (numMajors === 3) {
	// 		pageData.set("major3", majors[2]);
	// 		setGrid(StorageUtil.getClasses(majors[2]), "coreMajor3", true);
	// 		setGrid(StorageUtil.getClasses(majors[2]), "electivesMajor3", false);
	// 		thirdMajor = true;
	// 		setClassPicture("thirdMajorCard", majors[2]);
	// 	}
	// }
	// pageData.set("secondMajor", secondMajor);
	// pageData.set("thirdMajor", thirdMajor);
	// if (numMinors >= 1) {
	// 	pageData.set("minor1", minors[0]);
	// 	firstMinor = true;
	// 	setClassPicture("firstMinorCard", minors[0]);
	// 	if (numMinors >= 2) {
	// 		pageData.set("minor2", minors[1]);
	// 		secondMinor = true;
	// 		setClassPicture("secondMinorCard", minors[1]);
	// 		if (numMinors === 3) {
	// 			pageData.set("minor3", minors[2]);
	// 			thirdMinor = true;
	// 			setClassPicture("thirdMinorCard", minors[2]);
	// 		}
	// 	}
	// }
	// pageData.set("firstMinor", firstMinor);
	// pageData.set("secondMinor", secondMinor);
	// pageData.set("thirdMinor", thirdMinor);
	// exports.loadMajorData();
}

// var setClassPicture = function(id, major) {
// 	var div = page.getViewById(id);
// 	var pictureId;
// 	if (major === "Political Science") {
// 		pictureId = "political-science";
// 	} else if (major === "Computer Science") {
// 		pictureId = "computer-science";
// 	} else if (major === "Comparative Literature") {
// 		pictureId = "comparative-literature";
// 	} else {
// 		pictureId = major.toLowerCase()
// 	}
// 	console.log("card " + pictureId);
// 	div.class = "card " + pictureId;
// }



// var setGrid = function(classes, id, core) {
// 	var classToPush = [];
// 	var temp;
// 	if (core) {
// 		var remaining = classes[0].core.length%3;
// 		for (var i = 0; i < classes[0].core.length; i++) {
// 			if (i % 3 == 0) {
// 				temp = {one: classes[0].core[i][0]};
// 			} else if (i % 3 == 1) {
// 				temp.two = classes[0].core[i][0];
// 			} else {
// 				temp.three = classes[0].core[i][0];
// 				classToPush.push(temp);
// 			}
// 		} 
// 		if (remaining == 1) {
// 			temp = {one: classes[0].core[classes[0].core.length - 1][0]};
// 			temp.two= "";
// 			temp.three = "";
// 			classToPush.push(temp);
// 		} else if (remaining == 2) {
// 			temp = {one: classes[0].core[classes[0].core.length - 2][0]};
// 			temp.two = classes[0].core[classes[0].core.length - 1][0];
// 			temp.three = "";
// 			classToPush.push(temp);
// 		}
// 		pageData.set(id, classToPush);
// 	} else {
// 		var remaining = classes[1].electives.length%3;
// 		for (var i = 0; i < classes[1].electives.length; i++) {
// 			if (i % 3 == 0) {
// 				temp = {one: classes[1].electives[i][0]};
// 			} else if (i % 3 == 1) {
// 				temp.two = classes[1].electives[i][0];
// 			} else {
// 				temp.three = classes[1].electives[i][0];
// 				classToPush.push(temp);
// 			}
// 		} 
// 		if (remaining == 1) {
// 			temp = {one: classes[1].electives[classes[1].electives.length - 1][0]};
// 			temp.two= "";
// 			temp.three = "";
// 			classToPush.push(temp);
// 		} else if (remaining == 2) {
// 			temp = {one: classes[1].electives[classes[1].electives.length - 2][0]};
// 			temp.two = classes[1].electives[classes[1].electives.length - 1][0];
// 			temp.three = "";
// 			classToPush.push(temp);
// 		}
// 		pageData.set(id, classToPush);
// 	}
	
// };


exports.loadMajorData = function() {
	if (year === "Freshman" || year === "Sophomore"){
		loadPerMajor(StorageUtil.getClasses(majors[0]), "major1", 0.3);
		if (secondMajor) {
			loadPerMajor(StorageUtil.getClasses(majors[1]), "major2", 0.1);
		} 
		if (thirdMajor) {
			loadPerMajor(StorageUtil.getClasses(majors[2]), "major3", 0.1);
		}
		if (firstMinor) {
			loadPerMajor(StorageUtil.getClasses(minors[0]), "minor1", 0.3);
		}
		if (secondMinor) {
			loadPerMajor(StorageUtil.getClasses(minors[1]), "minor2", 0.1);
		}
		if (thirdMinor) {
			loadPerMajor(StorageUtil.getClasses(minors[2]), "minor2", 0.1);
		}
		
	} else {
		loadPerMajor(StorageUtil.getClasses(majors[0]), "major1", 0.7);
		if (secondMajor) {
			loadPerMajor(StorageUtil.getClasses(majors[1]), "major2", 0.5);
		} 
		if (thirdMajor) {
			loadPerMajor(StorageUtil.getClasses(majors[2]), "major3", 0.3);
		}
		if (firstMinor) {
			loadPerMajor(StorageUtil.getClasses(minors[0]), "minor1", 0.5);
		}
		if (secondMinor) {
			loadPerMajor(StorageUtil.getClasses(minors[1]), "minor2", 0.3);
		}
		if (thirdMinor) {
			loadPerMajor(StorageUtil.getClasses(minors[2]), "minor2", 0.1);
		}
		
	}
}

// var loadPerMajor = function(classes, id, perc) {
// 	var numCore = classes[0].core.length;
// 	var numElectives = classes[1].electives.length;
// 	var totalClasses = classes[0].core.length + classes[1].electives.length;
// 	var completedElectives = (Math.round(perc*(totalClasses)) - numCore);
// 	var completedCore;
// 	if (completedElectives < 0) {
// 		completedCore = Math.round(perc*(totalClasses));
// 		completedElectives = 0;
// 		pageData.set(id + "coreComplete", completedCore.toString() + "/" + numCore.toString());
// 		pageData.set(id + "electivesComplete", completedElectives.toString() + "/" + numElectives.toString());
// 	} else {
// 		pageData.set(id + "coreComplete", numCore.toString() + "/" + numCore.toString());
// 		pageData.set( id + "electivesComplete", completedElectives.toString() + "/" + numElectives.toString());
// 	}
// 	pageData.set( id + "Complete", (perc*100).toString() + "%");

// }





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
