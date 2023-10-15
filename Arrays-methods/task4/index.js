const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter((name) => !studentsForRetake.includes(name))
    .map((name) => 'Good job, ' + name);

const allStudentsList = ['Den', 'John', 'Ann', 'Mike'];
const studentsForRetake = ['John', 'Mike'];

console.log(getMessagesForBestStudents(allStudentsList, studentsForRetake));
