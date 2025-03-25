document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let responseMessage = document.getElementById("response-message");
    responseMessage.textContent = "Thank you! Your message was sended!";
    responseMessage.style.color = "green";

    setTimeout(() => (responseMessage.textContent = ""), 3000);
  });
