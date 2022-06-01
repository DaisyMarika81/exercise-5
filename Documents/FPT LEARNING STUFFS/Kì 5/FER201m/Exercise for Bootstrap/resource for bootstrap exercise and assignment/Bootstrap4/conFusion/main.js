var btn = document.getElementById("button-login");
// Get the button that opens the modal
var btn1 = document.getElementById("reserve-button");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  btn.setAttribute("data-target", "#loginModal");
  btn.setAttribute("data-toggle", "modal");
};

btn1.onclick = function () {
  btn1.setAttribute("data-target", "#myModal");
  btn1.setAttribute("data-toggle", "modal");
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
