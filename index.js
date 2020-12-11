let theme = localStorage.getItem("theme");

if (theme === null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }
  localStorage.setItem("theme", mode);
}

// function handleSubmit(e) {
//   alert("submitted");
//   e.stopPropagation();
// }

// window.onload = function () {
//   document
//     .getElementById("contact-form")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();
//       // generate a five digit number for the contact_number variable
//       this.contact_number.value = (Math.random() * 100000) | 0;
//       // these IDs from the previous steps
//       emailjs.sendForm("service_80kazz4", "template_p9n1zrs", "contact-form", this).then(
//         function () {
//           alert("Message sent successfully! Thank you for reaching out");
//           document.getElementById("contact-form").reset();
//         },
//         function (error) {
//           alert("Sending failed. Please try again");
//           console.log("FAILED...", error);
//         }
//       );
//     });
// };
