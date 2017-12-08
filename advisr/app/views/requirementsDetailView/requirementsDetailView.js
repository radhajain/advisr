var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var observable = require("data/observable");
var pageData = new observable.Observable();
var StorageUtil = require("~/util/StorageUtil");
var frameModule = require("ui/frame");


var page;
var majors = StorageUtil.getMajors();
var majors = StorageUtil.getMinors();



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
    setGrid(StorageUtil.getClasses(major), "coreMajor1", true);
    setGrid(StorageUtil.getClasses(major), "electivesMajor1", false);

}

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");
	 
}


var setGrid = function(classes, id, core) {
  var classToPush = [];
  var temp;


  if(!classes){
    console.log("CLASSES IS NULL!");
    return;
  }

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



  // else {
  //   var remaining = classes[1].electives.length%3;
  //   for (var i = 0; i < classes[1].electives.length; i++) {
  //     if (i % 3 == 0) {
  //       temp = {one: classes[1].electives[i][0]};
  //     } else if (i % 3 == 1) {
  //       temp.two = classes[1].electives[i][0];
  //     } else {
  //       temp.three = classes[1].electives[i][0];
  //       classToPush.push(temp);
  //     }
  //   } 
  //   if (remaining == 1) {
  //     temp = {one: classes[1].electives[classes[1].electives.length - 1][0]};
  //     temp.two= "";
  //     temp.three = "";
  //     classToPush.push(temp);
  //   } else if (remaining == 2) {
  //     temp = {one: classes[1].electives[classes[1].electives.length - 2][0]};
  //     temp.two = classes[1].electives[classes[1].electives.length - 1][0];
  //     temp.three = "";
  //     classToPush.push(temp);
  //   }
  //   pageData.set(id, classToPush);
  // }
  
