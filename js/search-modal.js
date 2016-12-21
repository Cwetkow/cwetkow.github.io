document.querySelector(".search-btn").addEventListener("click", function (event) {
  event.preventDefault();

  var modal = document.querySelector(".search-modal");

  if (modal.classList.contains("search-modal-show")) {
    modal.classList.remove("search-modal-show");
  } else {
    modal.classList.add("search-modal-show");
  }
});