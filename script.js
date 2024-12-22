document.getElementById("next1").addEventListener("click", function () {
  document.querySelector(".container").style.display = "none";
  document.getElementById("letter-container").style.display = "block";
});

document.getElementById("next2").addEventListener("click", function () {
  document.getElementById("letter-container").style.display = "none";
  document.getElementById("heart-container").style.display = "block";
});

document.getElementById("finish").addEventListener("click", function () {
  window.close();
});
