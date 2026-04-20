
let students = [
  { name: 'Aisha', marks: { math: 85, english: 78, science: 92 } },
  { name: 'Bilal', marks: { math: 74, english: 88, science: 80 } },
  { name: 'Cyrus', marks: { math: 91, english: 67, science: 88 } },
];

// Print each student's marks for every subject
students.forEach(student => {
  console.log(`Student: ${student.name}`);
  for (let [subject, mark] of Object.entries(student.marks)) {
    console.log(`  ${subject}: ${mark}`);
  }
});

// Calculate total and average per student
students.forEach(student => {
  let marks = Object.values(student.marks);
  let total = marks.reduce((sum, value) => sum + value, 0);
  let average = total / marks.length;
  console.log(`${student.name} - Total: ${total}, Average: ${average.toFixed(2)}`);
});

// Calculate average mark for each subject across all students
let subjectTotals = {};
let subjectCounts = {};
students.forEach(student => {
  for (let [subject, mark] of Object.entries(student.marks)) {
    subjectTotals[subject] = (subjectTotals[subject] || 0) + mark;
    subjectCounts[subject] = (subjectCounts[subject] || 0) + 1;
  }
});

for (let subject in subjectTotals) {
  let average = subjectTotals[subject] / subjectCounts[subject];
  console.log(`${subject} average: ${average.toFixed(2)}`);
}
//