var appSettings = require("application-settings");


//MATTHEW - add classes and matched classes here
var interests = ["Building with my hands", "Mathematical Proofs", "Current Affairs", "Coding Projects",
				"The economy", "Evaluating human perspectives", "Discussing Art" ,"Psychology", "Critiquing Society",
				"Law & Justice", "Literature", "Complex Electrical Systems", "Filmmaking", "Creating Art",
				"Clean energy", "Theatre", "Foreign Languages", "Human Computer Interaction"];


// var matchedClasses = ["E40M", "Math 51H"... FILL IN ];


var Computer_Science_Array = [
	{core: [["CS107", 5, "Computer Organization and Systems"],
  ["CS110", 5, "Principles of Computer Systems"],
  ["CS103", 5, "Mathematical Foundations of Computing"],
  ["CS109", 5, "Introduction to Probability for Computer Scientists"],
  ["CS147", 5, "Introduction to Human-Computer Interaction Design"],
  ["CS247", 4, "Human-Computer Interaction Design Studio"]]},
	{electives: [["CS193A", 3, "Android Programming"],
  ["CS108", 4, "Object-Oriented Systems Design"],
  ["CS148", 4, "Introduction to Computer Graphics and Imaging"],
  ["CS142", 3, "Web Applications"],
  ["CS210A", 4, "Software Project Experience with Corporate Partners"]]}];

var Art_Array = [
  {core: [["ARTHIST 1A", 5, "Introduction to the Visual Arts: Prehistoric through Medieval"],
  ["ARTHIST 1B", 5, "Introduction to the Visual Arts: History of Western Art from the Renaissance to the Present"],
  ["ARTHIST 2", 5, "Asian Arts and Cultures"],
  ["ARTHIST 3", 5, "Introduction to World Architecture"],
  ["FILMSTUD 4", 5, "Introduction to Film Study"]
  ]}, {electives: [["ARTHIST 100N", 3, "The Artist in Ancient Greek Society"],
  ["ARTHIST 101", 4, "Introduction to Greek Art I: The Archaic Period"],
  ["ARTHIST 102", 4, "Introduction to Greek Art II: The Classical Period"],
  ["ARTHIST 105B", 5, "Medieval Journeys: Introduction through the Art and Architecture"],
  ["ARTHIST 106", 4, "Byzantine Art and Architecture"]]}
];

var Anthropology_Array = [
  {core: [["ANTHRO 90B", 5, "Theory of Cultural and Social Anthropology"],
  ["ANTHRO 90C", 5, "Theory of Ecological and Environmental Anthropology"],
  ["ANTHRO 901", 5, "Method and Evidence in Anthropology"],
  ["ANTHRO 193", 5, "Anthropology Capstone: Contemporary Debates in Anthropology"]]},
  {electives: [["ANTHRO 1", 5, "Introduction to Cultural and Social Anthropology"],
  ["ANTHRO 30Q", 4, "The Big Shift"],
  ["ANTHRO 39", 3, "Sense of Place"],
  ["ANTHRO 34", 5, "Animals and Us"],
  ["ANTHRO 42", 5, "Megacities"],
  ["ANTHRO 49", 5, "Violence and Belonging in the Middle East"],
  ["ANTHRO 90B", 4, "Theory of Cultural and Social Anthropology"],
  ["ANTHRO 91", 5, "Method and Evidence in Anthropology"],
  ["ANTHRO 106", 5, "Incas and their Ancestors: Peruvian Archaeology"],
  ["ANTHRO 126", 5, "Urban Culture in Global Perspective"],
  ["ANTHRO 136", 5, "The Anthropology of Global Supply Chains"],
  ["ANTHRO 140", 5, "Ethnography of Africa"],
  ["ANTHRO 149", 5, "South Asia: History, People, Politics"],
  ["ANTHRO 152", 5, "Ritual, Politics, Power"],
  ["ANTHRO 187", 5, "Nuclear Cultures"]]}
];

var Comparative_Literature_Array = [
  {core: [["COMPLIT 121", 5, "Poems, Poetry, Worlds"],
  ["COMPLIT 122", 5, "Literature as Performance"],
  ["COMPLIT 123", 5, "The Novel and the World"]]},

  {electives: [["COMPLIT 101", 5, "What Is Comparative Literature?"],
  ["COMPLIT 121", 5, "Poems, Poetry, Worlds"],
  ["COMPLIT 122", 5, "Literature as Performance"],
  ["COMPLIT 123", 5, "The Novel and the World"]
  ["COMPLIT 199", 5, "Senior Seminar"]]}
];

var Economics_Array = [
  {core: [["ECON 1", 5, "Principles of Economics"],
  ["ECON 50", 5, "Economic Analysis I"],
  ["ECON 51", 5, "Economic Analysis II"],
  ["ECON 52", 5, "Economic Analysis III"],
  ["ECON 102A", 5, "Introduction to Statistical Methods (Postcalculus) for Social Scientists"],
  ["ECON 102B", 5, "Applied Econometrics"]
  ]},
  {electives: [["ECON 102C", 5, "Advanced Topics in Econometrics"],
  ["ECON 111", 5, "Money and Banking"],
  ["ECON 112", 5, "Financial Markets and Institutions: Recent Developments"],
  ["ECON 113", 5, "Economics of Innovation"],
  ["ECON 118", 5, "Development Economics"],
  ["ECON 125", 5, "Economic Development, Microfinance, and Social Networks"],
  ["ECON 126", 5, "Economics of Health and Medical Care"],
  ["ECON 128", 5, "Economic Development: A Historical Perspective"],
  ["ECON 129", 5, "Credit markets and development: Some evidence from Latin America and the World"],
  ["ECON 135", 3, "Finance for Non-MBAs "],
  ["ECON 136", 5, "Market Design"],
  ["ECON 137", 5, "Decision Modeling and Information"],
  ["ECON 140", 5, "Introduction to Financial Economics"],
  ["ECON 141", 5, "Public Finance and Fiscal Policy"],
  ["ECON 145", 5, "Labor Economics"]
  ]}
];
var History_Array = [
  {core: [["HISTORY 1B", 5, "Global History: The Early Modern World, 1300 to 1800"]]},
  {electives: [["HISTORY 7S", 5, "Stanford Collects: A History of Collecting"],
  ["HISTORY 9S", 5, "Censorship & Propaganda: From Renaissance to Revolution"],
  ["HISTORY 22S", 5, "From 'superfluous women' to the 'Yolocaust': The Experience of War in 20th Century Europe "],
  ["HISTORY 37S", 5, "Love and Lust in the French Empire, 1830-1962"],
  ["HISTORY 45S", 5, "The Cold War and the Shaping of Modern Africa"],
  ["HISTORY 51S", 5, "American Travel, Tourism and Empire in the Pacific, 1880s-1970s"],
  ["HISTORY 68S", 5, "New Orleans: An American City?"],
  ["HISTORY 85S", 5, "A History of Strangers: Jews in the Mediterranean"],
  ["HISTORY 90S", 5, "The Forgotten War: The Korean War in Historical Perspective"]]}
];

var MSandE_Array = [
  {core: [["MS&E 120", 5, "Probabilistic Analysis"],
  ["MS&E 121", 5, "Introduction to Stochastic Modeling"],
  ["MS&E 125", 5, "Introduction to Applied Statistics"],
  ["MS&E 111", 5, "Introduction to Optimization"],
  ["MS&E 193", 5, "Technology and National Security"],
  ["MS&E 140", 5, "Accounting for Managers and Entrepreneurs"]]},
  {electives: [["MS&E 147", 5, "Finance and Society for non-MBAs"],
    ["MS&E 152", 5, "Introduction to Decision Analysis"],
    ["MS&E 145", 5, "Introduction to Investment Science"],
    ["MS&E 146", 5, "Corporate Financial Management"],
    ["MS&E 252", 5, "Decision Analysis I: Foundations of Decision Analysis"],
    ["MS&E 245A", 5, "Investment Science"],
    ["MS&E 245B", 5, "Advanced Investment Science"],
    ["MS&E 246", 5, "Financial Risk Analytics"],
    ["MS&E 112", 5, "Mathematical Programming and Combinatorial Optimization"]]}
];

var Political_Science_Array = [
  {core: [["POLISCI 29N", 3, "Mixed-Race Politics and Culture"],
  ["POLISCI 31N", 3, "Political Freedom: Rights, Justice, and Democracy in the Western Tradition"],
  ["POLISCI 31Q", 3, "Justice and the City"],
  ["POLISCI 102", 3, "Politics and Public Policy"],
  ["POLISCI 103", 3, "Justice"],
  ["POLISCI 114D", 3, "Democracy, Development, and the Rule of Law"],
  ["POLISCI 122", 3, "Introduction to American Law"]]},
  {electives: [["POLISCI 10N", 3, "International Organizations and the World Order"],
  ["POLISCI 11N", 3, "The Rwandan Genocide"],
  ["POLISCI 18N", 3, "Civil War and International Politics: Syria in Context"],
  ["POLISCI 43Q", 3, "Immigration Crisis? Policy Dilemmas in the US and Europe"],
  ["POLISCI 45N", 3, "Civil War Narratives"],
  ["POLISCI 101", 3, "Introduction to International Relations"],
  ["POLISCI 110C", 3, "America and the World Economy"],
  ["POLISCI 110D", 3, "War and Peace in American Foreign Policy"]]}
];

var Psychology_Array = [
  {core: [["PSYCH 1", 5, "Intorduction to Psychology"],
  ["PSYCH 10", 5, "Introduction to Statistical Methods"]
  ]},
  {electives: [["PSYCH 30", 3, "Introduction to Perception"],
  ["PSYCH 35", 3, "Minds and Machines"],
  ["PSYCH 45", 3, "Introduction to Learning and Memory"],
  ["PSYCH 50", 3, "Introduction to Cognitive Neuroscience"],
  ["PSYCH 60", 3, "Introduction to Developmental Psychology"],
  ["PSYCH 70", 4, "Self and Society: Introduction to Social Psychology"],
  ["PSYCH 75", 5, "Introduction to Cultural Psychology"],
  ["PSYCH 80", 3, "Introduction to Personality and Affective Science"],
  ["PSYCH 90", 3, "Introduction to Clinical Psychology"],
  ["PSYCH 95", 3, "Introduction to Abnormal Psychology"]
]}];


exports.getClasses = function(className) {
	if(className === "History"){
		return History_Array;
	} else if (className === "Art") {
		return Art_Array;
	}else if (className === "Anthropology") {
		return Anthropology_Array;
	} else if (className === "Economics") {
		return Economics_Array;
	}else if (className === "Computer Science") {
		return Computer_Science_Array
	}else if (className === "Comparative Literature") {
		return Comparative_Literature_Array
	}else if (className === "History") {
		return History_Array;
	}else if (className === "MS&E") {
		return MSandE_Array;
	} else if (className === "Psychology") {
		return Psychology_Array;
	} else if (className === "Political Science") {
		return Political_Science_Array;
	} else {
		return null;
	}
}


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


exports.setYear = function(year) {
	appSettings.setString('year', year);
}

exports.getYear = function() {
	return appSettings.getString('year');
}

exports.setName = function(name) {
	appSettings.setString('name', name);
}

exports.getName = function() {
	return appSettings.getString('name');
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