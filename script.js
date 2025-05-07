const students = [
  {
    name: "Ahmed",
    age: 20,
    image: "student1.avif",
    gender: "male",
  },
  {
    name: "Maha",
    age: 22,
    image: "student2.avif",
    gender: "female",
  },
  {
    name: "Omar",
    age: 19,
    image: "student3.webp",
    gender: "male",
  },
];

const container = document.createElement("div");
let body = document.body;

students.forEach((student) => {
  const card = document.createElement("div");
  card.style.display = "inline-block";
  card.style.textAlign = "center";
  card.style.margin = "10px";

  // image
  const img = document.createElement("img");
  img.src = student.image;
  img.alt = `${student.name}, age ${student.age}`;
  img.title = `${student.name} (${student.age} years old)`;
  img.style.width = "150px";
  img.style.display = "block";
  card.appendChild(img);

  const info = document.createElement("p");
  info.textContent = `${student.name} is ${student.age} years old.`;
  info.style.color = student.gender === "male" ? "blue" : "purple";
  info.style.margin = "8px 0 0";
  card.appendChild(info);

  container.appendChild(card);
});
body.appendChild(container);
