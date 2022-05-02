const Reader = require('./../lib/utils/Reader');
const DataService = require('./../lib/services/DataService');

describe('Tests for data service', () => {
  test('1) Review length of allStudents JSON file', () => {
    const allStudents = Reader.readJsonFile("visualpartners.json");
    const numberOfStudents = Object.keys(allStudents).length;
    expect(numberOfStudents).toBe(51);
  });

  test('2) Review number of certified students', () => {
    const allStudents = Reader.readJsonFile("visualpartners.json");
    const numberOfCertifiedStudents = Object.keys(DataService.certifiedStudents(allStudents)).length;
    expect(numberOfCertifiedStudents).toBe(29);
  });

  test('3) Review number of students with more than 500 credits', () => {
    const allStudents = Reader.readJsonFile("visualpartners.json");
    const numberOfStudentsAbove500Credits = Object.keys(DataService.above500Credits(allStudents)).length;
    expect(numberOfStudentsAbove500Credits).toBe(27);
  });
});
