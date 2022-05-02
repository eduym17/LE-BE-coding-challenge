const Reader = require('./lib/utils/Reader');
const DataService = require('./lib/services/DataService');
const DataController = require('./lib/controllers/DataController');

const allStudents = Reader.readJsonFile("visualpartners.json");

// console.log(DataService.certifiedStudents(allStudents));

// console.log(DataController.certifiedStudents(allStudents));

// console.log(DataService.above500Credits(allStudents));