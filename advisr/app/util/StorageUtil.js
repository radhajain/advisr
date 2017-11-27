var appSettings = require("application-settings");


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