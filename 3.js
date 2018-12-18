var studentsRating = {
  kolya: 30,
  stepa: 20,
  grisha: 48,
  vera: 28,
  vika: 48,
  tolik: 31
};


function bestStudentRating(obj) {
  var bestStudent = [],
      maxRating = 0;

  for(var key in obj) {
    if (obj[key] > maxRating) {
      maxRating = obj[key];
    }
  };

  for(var key in obj) {
    if (obj[key] == maxRating) {
      bestStudent.push(key);
    }
  }

  console.log(bestStudent);
}

bestStudentRating(studentsRating);
