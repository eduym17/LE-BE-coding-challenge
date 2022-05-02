class DataService {
  static certifiedStudents(students) {
    const certifiedStudents = students.filter((student) => student.haveCertification == true);
    return certifiedStudents;
  }

  static above500Credits(students) {
    const above500Credits = students.filter((student) => student.credits > 500);
    return above500Credits;
  }
}

module.exports = DataService;
