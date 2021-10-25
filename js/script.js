Splitting();
setContactForm();

// RESOURCE https://www.youtube.com/watch?v=vc9rgFHr098
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  const form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  const status = document.getElementById("form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    const storage = window.localStorage;
    const nameContact = document.getElementById("name").value;
    const emailContact = document.getElementById("email").value;
    storage.setItem("name", nameContact);
    storage.setItem("mail", emailContact);

    form.reset();
    setContactForm();
    status.innerHTML = "";
    // Create IMG element
    const succesIcon = document.createElement("img");
    succesIcon.src = "images/check.svg";

    // Create P element
    const succesText = document.createElement("p"); // creates a paragraph element
    succesText.innerHTML =
      "Thanks " + nameContact + "! Your message has been send."; // adds the movie titles to paragraph elements

    status.appendChild(succesIcon);
    status.appendChild(succesText);
    // status.innerHTML = "Thanks!";

    status.classList.add("succes");
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    console.log(xhr);
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

// set searchbar with latest search item
function setContactForm() {
  // checks the local storage and updates the input field with the value
  let storageValueName = localStorage.getItem("name");
  let storageValueMail = localStorage.getItem("mail");
  let nameContact = document.getElementById("name");
  let emailContact = document.getElementById("email");
  nameContact.value = storageValueName;
  emailContact.value = storageValueMail;
}

// change adobe images
const image = document.querySelector(".adobeIcon");
let currentPos = 0;
const images = ["ps.svg", "id.svg", "ai.svg", "xd.svg"];

function nextImage() {
  if (++currentPos >= images.length) currentPos = 0;

  image.src = "images/icons/" + images[currentPos];
}

setInterval(nextImage, 3000);
