const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.elements["name"].value;
  const linenumber = form.elements["number"].value;
  const email = form.elements["email"].value;
  const message = form.elements["message"].value;


  if (linenumber.length === 10) {
  
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);

    form.reset();
  } else {
    alert("Please enter a valid phone number.");
  }
});
