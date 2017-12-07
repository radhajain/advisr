var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var observable = require("data/observable");
var pageData = new observable.Observable();
var StorageUtil = require("~/util/StorageUtil");

var page;




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
  
};