const classA = [
  {
    name: "Arlan",
    grade: 9.8
  },

  {
    name: "Rosalha",
    grade: 10
  },

  {
    name: "Diego",
    grade: 6
  },

  {
    name: "Mayk",
    grade: 7
  },

  {
    name: "Giuberto",
    grade: 1
  }
]

const classB = [
  {
    name: "Cleber",
    grade: 7
  },

  {
    name: "Isa",
    grade: 5
  },

  {
    name: "Vitor",
    grade: 3
  },

  {
    name: "Alexandre",
    grade: 10
  },
]

function calculateAverage(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  };

  const average = sum / students.length
  return average

};


function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} average: ${average}. Congrats`)
  } else {
    console.log(`${turma} average: ${average}. Is not good.`)
  };
};


function markAsFlunked(student) {
  student.flunked = false;
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`${student.name} flunked`)
  }
}

function studentsFlunked(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student)
  }
}
const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsFlunked(classA)
studentsFlunked(classB)