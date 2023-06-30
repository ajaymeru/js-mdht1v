const compareStudents = (a, b) => {
  // Compare the total marks of the two students.
  const totalMarksA = a.chemistry + a.biology;
  const totalMarksB = b.chemistry + b.biology;
  if (totalMarksA !== totalMarksB) {
    return totalMarksA - totalMarksB;
  }

  // If the total marks are the same, compare the biology marks.
  const biologyMarksA = a.biology;
  const biologyMarksB = b.biology;
  if (biologyMarksA !== biologyMarksB) {
    return biologyMarksB - biologyMarksA;
  }

  // If the biology marks are the same, compare the date of birth.
  const dobA = new Date(a.dob);
  const dobB = new Date(b.dob);
  return dobA - dobB;
};

const testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

const testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

const sortedTestCase1 = testCase1.sort(compareStudents);
const sortedTestCase2 = testCase2.sort(compareStudents);

console.log(sortedTestCase1);
console.log(sortedTestCase2);
