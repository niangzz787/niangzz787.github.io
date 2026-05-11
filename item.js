document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("quoteForm");
  const response = document.getElementById("response");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // optional: store in sessionStorage
    sessionStorage.setItem("name", document.getElementById("name").value);
    sessionStorage.setItem("email", document.getElementById("email").value);
    sessionStorage.setItem("phone", document.getElementById("phone").value);
    sessionStorage.setItem("message", document.getElementById("message").value);

    // show confirmation message
    response.innerText =
      "Your quote request has been submitted! We will contact you soon.";

    // clear form
    //form.reset();
  });

});