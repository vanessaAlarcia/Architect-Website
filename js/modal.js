// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.addEventListener("click", openModal);
function openModal() {
  modal.style.display = "block";
  document.querySelector("body").style.overflow = 'hidden';
}

// When the user clicks on <span> (x), close the modal

span.addEventListener("click", closeModal);
function closeModal() {
  modal.style.display = "none";
  document.querySelector("body").style.overflow = 'visible';
}
