// Step 1: Create an array of student objects
const students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 19,
    score: 85,
    courses: ["Math", "Physics"]
  },
  {
    firstName: "Sarah",
    lastName: "Lee",
    age: 20,
    score: 92,
    courses: ["Biology", "Chemistry"]
  },
  {
    firstName: "David",
    lastName: "Smith",
    age: 21,
    score: 78,
    courses: ["English", "History"]
  },
  {
    firstName: "Emily",
    lastName: "Johnson",
    age: 18,
    score: 88,
    courses: ["Art", "Design"]
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    age: 22,
    score: 81,
    courses: ["Computer Science", "Math"]
  }
];

// Step 2: Use destructuring and map to create descriptive strings
const studentDescriptions = students.map(({ firstName, lastName, age, score, courses }) => {
  return `${firstName} ${lastName} is ${age} years old and scored ${score}. He/She is taking: ${courses.join(", ")}`;
});

console.log("Mapped Student Descriptions:");
console.log(studentDescriptions);

// Step 3: Use forEach to log each student's details nicely
console.log("\nStudent Details:");
students.forEach(({ firstName, lastName, age, score, courses }, index) => {
  console.log(`\nStudent ${index + 1}:`);
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Score: ${score}`);
  console.log(`Courses: ${courses.join(", ")}`);
});
