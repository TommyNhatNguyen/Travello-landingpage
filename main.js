import $ from "jquery";

$(document).ready(function () {
  // Handler for .ready() called.
  $(".currentlang").on("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    $(".dropdownlang").toggle();
  });
});
