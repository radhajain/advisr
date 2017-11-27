var view = require("ui/core/view");
var app = require("tns-core-modules/application");
var orientationModule = require("nativescript-screen-orientation");
var frameModule = require("ui/frame");
var observable = require("data/observable");
var layout = require("ui/layouts/grid-layout");
var StorageUtil = require("~/util/StorageUtil");
var statusBar = require("nativescript-status-bar");

var page;
var listView;
var chosenMajors;
var chosenMinors;
var pageData;
var selectedInterests;
var container;
var interests = ["Building with my hands", "Mathematical Proofs", "Current Affairs", "Coding Projects", 
				"The economy", "Evaluating human perspectives", "Discussing Art" ,"Psychology", "Critiquing Society",
				"Law & Justice", "Literature", "Complex Electrical Systems", "Filmmaking", "Creating Art",
				"Clean energy", "Theatre", "Foreign Languages", "Human Computer Interaction"];
var majors = [ "Art", "Anthropology", "Comparative Literature", "Computer Science", "Economics", "History",  "Modern Languages",
				"MS&E", "Polical Science",  "Psychology"];


				

exports.pageNavigating = function(args) {
    page = args.object;
    orientationModule.orientationCleanup();
    pageData = new observable.Observable();
  	page.bindingContext = pageData;
  	statusBar.hide();
};

exports.pageLoaded = function(args) {
	orientationModule.setCurrentOrientation("landscape");	
	container = page.getElementById("slides-container");
	listView = page.getViewById('interest-list-view');
	selectedInterests = [];
	for (var i = 0; i < interests.length; i++) {
		selectedInterests.push(false);
	}
	initPickers();
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


//LIST PICKERS FOR MAJORS/MINORS


exports.showMajor1Picker = function(args) {
	var button = args.object;
	button.class = "selectOnClick";
    pageData.set("showMajor1Picker", true);
}

exports.getMajor1SelectedIndex = function(args) {
	var picker = page.getElementById("major1picker");
	chosenMajors[0] = majors[picker.selectedIndex];
    pageData.set("major1", majors[picker.selectedIndex]);
    pageData.set("showMajor1Picker", false);
    var button = page.getElementById("major1button")
    button.class= "selectSet";
}

exports.showMajor2Picker = function(args) {
	var button = args.object;
	button.class = "selectOnClick";
    pageData.set("showMajor2Picker", true);
}

exports.getMajor2SelectedIndex = function(args) {
	var picker = page.getElementById("major2picker");
	chosenMajors[1] = majors[picker.selectedIndex];
    pageData.set("major2", majors[picker.selectedIndex]);
    pageData.set("showMajor2Picker", false);
    var button = page.getElementById("major2button")
    button.class= "selectSet";
}

exports.showMajor3Picker = function(args) {
	var button = args.object;
	button.class = "selectOnClick";
    pageData.set("showMajor3Picker", true);
}

exports.getMajor3SelectedIndex = function(args) {
	var picker = page.getElementById("major3picker");
	chosenMajors[2] = majors[picker.selectedIndex];
    pageData.set("major3", majors[picker.selectedIndex]);
    pageData.set("showMajor3Picker", false);
    var button = page.getElementById("major3button")
    button.class= "selectSet";
}

exports.showMinor1Picker = function(args) {
	var button = args.object;
	button.class = "selectOnClick";
    pageData.set("showMinor1Picker", true);
}

exports.getMinor1SelectedIndex = function(args) {
	var picker = page.getElementById("minor1picker");
	chosenMinors[0] = majors[picker.selectedIndex];
    pageData.set("minor1", majors[picker.selectedIndex]);
    pageData.set("showMinor1Picker", false);
    var button = page.getElementById("minor1button")
    button.class= "selectSet";
}

exports.showMinor2Picker = function(args) {
	var button = args.object;
	button.class = "selectOnClick";
    pageData.set("showMinor2Picker", true);
}

exports.getMinor2SelectedIndex = function(args) {
	var picker = page.getElementById("minor2picker");
	chosenMinors[1] = majors[picker.selectedIndex];
    pageData.set("minor2", majors[picker.selectedIndex]);
    pageData.set("showMinor2Picker", false);
    var button = page.getElementById("minor2button")
    button.class= "selectSet";
}

exports.showMinor3Picker = function(args) {
	var button = args.object;
	button.class = "selectOnClick";
    pageData.set("showMinor3Picker", true);
}

exports.getMinor3SelectedIndex = function(args) {
	var picker = page.getElementById("minor3picker");
	chosenMinors[2] = majors[picker.selectedIndex];
    pageData.set("minor3", majors[picker.selectedIndex]);
    pageData.set("showMinor3Picker", false);
    var button = page.getElementById("minor3button")
    button.class= "selectSet";
}



exports.addMajorField = function() {
	pageData.set("showMajor3", true);
}

exports.addMinorField = function() {
	pageData.set("showMinor3", true);
}

exports.goToInterests = function () {
	StorageUtil.setMajors(chosenMajors);
	StorageUtil.setMinors(chosenMinors);
	exports.disablePickers();
	container.nextSlide();
}

exports.goToDescription = function() {
	container.previousSlide();
	exports.disablePickers();
}


var initPickers = function () {
	chosenMajors= [];
	chosenMinors = [];
  	pageData.set("majorList", majors);
  	exports.disablePickers();
  	pageData.set("showMajor3", false);
  	pageData.set("showMinor3", false);
  	pageData.set("major1", "Select a major");
	pageData.set("major2", "Select a major");
	pageData.set("major3", "Select a major");
	pageData.set("minor1", "Select a minor");
	pageData.set("minor2", "Select a minor");
	pageData.set("minor3", "Select a minor");
}

exports.disablePickers = function() {
	pageData.set("showMajor1Picker", false);
  	pageData.set("showMinor1Picker", false);
  	pageData.set("showMajor2Picker", false);
  	pageData.set("showMinor2Picker", false);
  	pageData.set("showMajor3Picker", false);
  	pageData.set("showMinor3Picker", false);
  	unfocusButtons();
}

var unfocusButtons = function() {
	var button1 = page.getElementById("major1button")
    button1.class= "selectSet";
    var button2 = page.getElementById("major2button")
    button2.class= "selectSet";
    var button3 = page.getElementById("major3button")
    button3.class= "selectSet";
    var button4 = page.getElementById("minor1button")
    button4.class= "selectSet";
    var button5 = page.getElementById("minor2button")
    button5.class= "selectSet";
    var button6 = page.getElementById("minor3button")
    button6.class= "selectSet";
}


exports.finish = function() {
	StorageUtil.setOnboardingComplete();
	frameModule.topmost().navigate("views/dashboardView/dashboardView");
}
