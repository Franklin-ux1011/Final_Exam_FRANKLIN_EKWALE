window.addEventListener("DOMContentLoaded", () => {
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");
    let skills = prompt("Enter your skills (comma separated):");

    if (!name) name = "Anonymous";
    if (!age || isNaN(age)) age = "N/A";
    if (!skills) skills = "None";

    const skillsArray = skills.split(",").map(skill => skill.trim());

    if (!isNaN(age)) {
        age = Number(age);
        if (age < 18) alert("You are a minor");
        else if (age <= 60) alert("You are an adult");
        else alert("You are a senior citizen");
    }

    const studentInfo = document.getElementById("student-info");
    studentInfo.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Skills:</strong> ${skillsArray.join(", ")}</p>
    `;
});



const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Parasite"];
const moviesList = document.getElementById("movies-list");

movies.forEach(movie => {
    const li = document.createElement("li");
    li.textContent = movie;
    moviesList.appendChild(li);
});

function calculateSquare(number) {
    return number * number;
}
const squareResults = document.getElementById("square-results");

[2, 5, 9].forEach(num => {
    const p = document.createElement("p");
    p.textContent = `Square of ${num} = ${calculateSquare(num)}`;
    squareResults.appendChild(p);
});

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
document.getElementById("loop-sum").textContent = "Sum of numbers 1 to 5 = " + sum;


const btn = document.getElementById("change-bg");
btn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});


const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";
    document.getElementById("form-message").textContent = "";

    if (nameInput === "") {
        document.getElementById("name-error").textContent = "Name is required";
        valid = false;
    }
    if (email === "" || !email.includes("@")) {
        document.getElementById("email-error").textContent = "Valid email is required";
        valid = false;
    }
    if (message === "") {
        document.getElementById("message-error").textContent = "Message cannot be empty";
        valid = false;
    }

    if (valid) {
        document.getElementById("form-message").textContent = "Form submitted successfully!";
        form.reset();
    }
});
