const students = [
  {
    name: "Ahmed",
    age: 20,
    image: "student1.avif",
  },
  {
    name: "Maha",
    age: 22,
    image: "student2.avif",
  },
  {
    name: "Omar",
    age: 19,
    image: "student3.webp",
  },
];

let addToBody = document.body;
const container = document.createElement("div");

students.forEach((student) => {
  const img = document.createElement("img");
  img.src = student.image;
  img.alt = `${student.name}, age ${student.age}`;
  img.title = `${student.name} (${student.age} years old)`;

  img.style.width = "150px";
  img.style.margin = "10px";
  container.appendChild(img);
});

addToBody.appendChild(container);
