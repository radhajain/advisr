var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var frameModule = require("ui/frame");
var observable = require("data/observable");
var layout = require("ui/layouts/grid-layout");

var page;
var listView;
var pageData;
var selectedInterests;
var container;
var interests = ["Building with my hands", "Mathematical Proofs", "Current Affairs", "Coding Projects", 
				"The economy", "Evaluating human perspectives", "Discussing Art" ,"Psychology", "Critiquing Society",
				"Law & Justice", "Literature", "Complex Electrical Systems", "Filmmaking", "Creating Art",
				"Clean energy", "Theatre", "Foreign Languages"];

exports.pageNavigating = function(args) {
    page = args.object;
    orientationModule.orientationCleanup();
    pageData = new observable.Observable();
  	page.bindingContext = pageData;
};

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");	
	container = page.getElementById("slides-container");
	listView = page.getViewById('interest-list-view');
	selectedInterests = [];
	for (var i = 0; i < interests.length; i++) {
		selectedInterests.push(false);
	}
	setGrid();
};

exports.changeSlide = function() {
	container.nextSlide();
};

exports.goToDashboard = function(args) {
	if (args.direction == 1) {
		//If user swipes backwards
		container.previousSlide();
	} 
};

var setGrid = function() {
	var ints = [];
	var temp;
	for (var i = 0; i < interests.length; i++) {
		if (i % 3 == 0) {
			temp = {one: interests[i]};
		} else if (i % 3 == 1) {
			temp.two = interests[i];
		} else {
			temp.three = interests[i];
			ints.push(temp);
		}
	} 
	pageData.set('interests', ints);
};

exports.itemTap = function(args) {
	 var div = args.object;
	 var interest = args.object.id;
	 var index = interests.indexOf(interest);
	 if (selectedInterests[index]) {
	 	div.className = "interestButtons";
	 	selectedInterests[index] = false;
	 } else {
	 	div.className = "selectedInterestButtons";
	 	selectedInterests[index] = true;
	 }
	
  	 listView.refresh();
};

exports.buttonTap = function(args) {
	var div = args.object.parent;
	var interest = args.object.parent.id;
	 var index = interests.indexOf(interest);
	 if (selectedInterests[index]) {
	 	div.className = "interestButtons";
	 	selectedInterests[index] = false;
	 } else {
	 	div.className = "selectedInterestButtons";
	 	selectedInterests[index] = true;
	 }
	
  	 listView.refresh();

}

exports.finish = function() {
	frameModule.topmost().navigate("views/dashboardView/dashboardView");
}
