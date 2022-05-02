const Reader = require('../utils/Reader');
const DataService = require('../services/DataService');

class DataController {
  static certifiedStudents() {
    const allStudents = Reader.readJsonFile("visualpartners.json");
    return DataService.certifiedStudents(allStudents);
  }

  static above500Credits() {
    const allStudents = Reader.readJsonFile("visualpartners.json");
    return DataService.above500Credits(allStudents);
  }
}

module.exports = DataController;
