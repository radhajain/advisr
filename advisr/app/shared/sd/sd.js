var frameModule = require("ui/frame");
var menu;

exports.onLoaded = function(args) {
  menu = args.object;
};

exports.clickCalendar = function() {
	//Navigates to different pages
	frameModule.topmost().navigate("views/calendarView/calendarView");
}

exports.clickDashboard = function() {
	frameModule.topmost().navigate("views/dashboardView/dashboardView");
}