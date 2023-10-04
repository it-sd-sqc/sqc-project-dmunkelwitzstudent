let bodyTag = document.querySelector("body");

function darkMode() {
  if(bodyTag.className == "") {
    bodyTag.className = "dark";
  } else {
    bodyTag.className = "";
  }
}