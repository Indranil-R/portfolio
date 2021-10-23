function toggle() {
  sub = document.getElementById("dropdown");
  img = document.getElementById("menuimg");

  if (sub.style.display != "none" && img.src != "Images/menu_white.svg") {
    sub.style.display = "none";
    img.src = "Images/menu_white.svg";
  } else {
    sub.style.display = "block";
    img.src = "Images/close_white.svg";
  }
}

function thanks() {
  alert(
    "Your Response has been Saved !!  Thank you very much 😊 for checking my website !!"
  );
}
