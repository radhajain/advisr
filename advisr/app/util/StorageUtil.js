var appSettings = require("application-settings");


//MATTHEW - add classes and matched classes here
var interests = ["Building with my hands", "Mathematical Proofs", "Current Affairs", "Coding Projects", 
				"The economy", "Evaluating human perspectives", "Discussing Art" ,"Psychology", "Critiquing Society",
				"Law & Justice", "Literature", "Complex Electrical Systems", "Filmmaking", "Creating Art",
				"Clean energy", "Theatre", "Foreign Languages", "Human Computer Interaction"];

var CS = [
	{core: ["CS106A", "CS106B", "CS107", "CS103", "CS109", "CS147", "CS247"]},
	{electives: ["CS193", "CS108", "CS148", "CS142", "CS210A"]}];




exports.isOnboardingComplete = function() {
  return appSettings.getBoolean('onboardingComplete');
};

exports.setOnboardingComplete = function() {
  appSettings.setBoolean('onboardingComplete', true);
};


exports.setUpDB = function() {
  appSettings.setString('majors', JSON.stringify([]));
  appSettings.setString('minors', JSON.stringify([]));
}



exports.setMajors = function(list) {
	appSettings.setString('majors', JSON.stringify(list));
}

exports.getMajors = function() {
	return JSON.parse(appSettings.getString('majors')) || [];
}

exports.setMinors = function(list) {
	appSettings.setString('minors', JSON.stringify(list));
}

exports.getMinors = function() {
	return JSON.parse(appSettings.getString('minors')) || [];
}