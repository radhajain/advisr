var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var observable = require("data/observable");
var pageData = new observable.Observable();
var StorageUtil = require("~/util/StorageUtil");
var frameModule = require("ui/frame");


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
    if (page.navigationContext) {
      var title = page.navigationContext.requirement;
      var major = page.navigationContext.major;
    }
    orientationModule.orientationCleanup();
    page.bindingContext = pageData;
    pageData.set("title", title);
    pageData.set("major", major);
    majors = StorageUtil.getMajors();
    minors = StorageUtil.getMinors();
    year = StorageUtil.getYear();
    var numMajors = majors.length;
    var numMinors = minors.length;

    pageData.set("major1", majors[0]);
    if (numMajors >= 2) {
      pageData.set("major2", majors[1]);
      secondMajor = true;
    }

    if (numMinors >= 1) {
        pageData.set("minor1", minors[0]);
       firstMinor = true;
       if (numMinors == 2) {
         pageData.set("minor2", minors[1]);
         secondMinor = true;
       }
    }
    pageData.set("secondMajor", secondMajor);
    pageData.set("firstMinor", firstMinor);
    pageData.set("secondMinor", secondMinor);
    setGrid(StorageUtil.getClasses(major, "coreMajor1", true), "coreMajor1");
    setGrid(StorageUtil.getClasses(major, "electivesMajor1", false), "electivesMajor1");   

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

var loadPerMajor = function(classes, id, perc) {
 var numCore = classes[0].core.length;
 var numElectives = classes[1].electives.length;
 var totalClasses = classes[0].core.length + classes[1].electives.length;
 var completedElectives = (Math.round(perc*(totalClasses)) - numCore);
 var completedCore;
 if (completedElectives < 0) {
   completedCore = Math.round(perc*(totalClasses));
   completedElectives = 0;
   pageData.set(id + "coreComplete", completedCore.toString() + "/" + numCore.toString());
   pageData.set(id + "electivesComplete", completedElectives.toString() + "/" + numElectives.toString());
 } else {
   pageData.set(id + "coreComplete", numCore.toString() + "/" + numCore.toString());
   pageData.set( id + "electivesComplete", completedElectives.toString() + "/" + numElectives.toString());
 }
 pageData.set( id + "Complete", (perc*100).toString() + "%");

}


exports.loadMajorData = function() {
  if (year === "Freshman" || year === "Sophomore"){
    loadPerMajor(StorageUtil.getClasses(majors[0]), "major1", 0.3);
    if (secondMajor) {
      loadPerMajor(StorageUtil.getClasses(majors[1]), "major2", 0.1);
    } 
    if (firstMinor) {
      loadPerMajor(StorageUtil.getClasses(minors[0]), "minor1", 0.3);
    }
    if (secondMinor) {
      loadPerMajor(StorageUtil.getClasses(minors[1]), "minor2", 0.1);
    }
    
  } else {
    loadPerMajor(StorageUtil.getClasses(majors[0]), "major1", 0.7);
    if (secondMajor) {
      loadPerMajor(StorageUtil.getClasses(majors[1]), "major2", 0.5);
    } 
    if (firstMinor) {
      loadPerMajor(StorageUtil.getClasses(minors[0]), "minor1", 0.5);
    }
    if (secondMinor) {
      loadPerMajor(StorageUtil.getClasses(minors[1]), "minor2", 0.3);
    }
    
  }
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



exports.viewMoreMajor1 = function() {
  var options = {
      moduleName: 'views/requirementsDetailView/requirementsDetailView',
      context: {
        requirement: "Major 1",
        major: majors[0]
      },
      animated: true,
      transition: {
          name: "fade",
          duration: 50,
          curve: "easeIn"
      }
  } 
  frameModule.topmost().navigate(options);
};

exports.viewMoreMajor2 = function() {
  var options = {
      moduleName: 'views/requirementsDetailView/requirementsDetailView',
      context: {
        requirement: "Major 2",
        major: majors[1]
      },
      animated: true,
      transition: {
          name: "fade",
          duration: 50,
          curve: "easeIn"
      }
  } 
  frameModule.topmost().navigate(options);
};

// exports.viewMoreMajor3 = function() {
//   var options = {
//       moduleName: 'views/requirementsDetailView/requirementsDetailView',
//       context: {
//         requirement: "Major 3",
//         major: majors[2]
//       },
//       animated: true,
//       transition: {
//           name: "fade",
//           duration: 50,
//           curve: "easeIn"
//       }
//   } 
//   frameModule.topmost().navigate(options);
// }

exports.viewMoreMinor1 = function() {
  var options = {
      moduleName: 'views/requirementsDetailView/requirementsDetailView',
      context: {
        requirement: "Minor 1",
        major: minors[0]
      },
      animated: true,
      transition: {
          name: "fade",
          duration: 50,
          curve: "easeIn"
      }
  } 
  frameModule.topmost().navigate(options);
};

exports.viewMoreMinor2 = function() {
  var options = {
      moduleName: 'views/requirementsDetailView/requirementsDetailView',
      context: {
        requirement: "Minor 2",
        major: minors[1]
      },
      animated: true,
      transition: {
          name: "fade",
          duration: 50,
          curve: "easeIn"
      }
  } 
  frameModule.topmost().navigate(options);
};

// exports.viewMoreMinor3 = function() {
//   var options = {
//       moduleName: 'views/requirementsDetailView/requirementsDetailView',
//       context: {
//         requirement: "Minor 3",
//         major: minors[2]
//       },
//       animated: true,
//       transition: {
//           name: "fade",
//           duration: 50,
//           curve: "easeIn"
//       }
//   } 
//   frameModule.topmost().navigate(options);
// }



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
  
