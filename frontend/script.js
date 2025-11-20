const form = document.getElementById("rub");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("nam").value.trim();
  const telephone = document.getElementById("tel").value.trim();
  const email = document.getElementById("m").value.trim();
  const residence = document.getElementById("resi").value.trim();
  const address = document.getElementById("add").value.trim();
  const town = document.getElementById("tow").value.trim();
  const education = document.getElementById("high").value.trim();
  const job = document.getElementById("cur").value.trim();
  const skills = document.getElementById("skil").value.trim();
  const salary = document.getElementById("sal").value.trim();

  //check if any input field is empty
  if (
    !name ||
    !telephone ||
    !email ||
    !residence ||
    !address ||
    !town ||
    !education ||
    !job ||
    !skills ||
    !salary
  ) {
    alert("please fill all required fields!");
    return false;
  }

  //if all fields are filled as required
  console.log({
    name,
    telephone,
    email,
    residence,
    address,
    town,
    education,
    job,
    skills,
    salary,
  });

  fetch("https://finale-1-1.onrender.com/api/details", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name,
    telephone,
    email,
    residence,
    address,
    town,
    education,
    job,
    skills,
    salary,
  }),
})
  .then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then(() => alert("Data submitted successfully"))
  .catch((error) => alert("Error: " + error.message));

  
  //clearing the form after submission
form.reset();

//redirect to index.html after two seconds of submission
setTimeout(function () {
window.location.href = "index.html";}, 1000);
});
//"http://localhost:5000/api/details"
