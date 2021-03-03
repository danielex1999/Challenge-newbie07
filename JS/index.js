const share = document.querySelector("#share");
const boton = document.querySelector("#botoncito");
console.log(boton);
boton.addEventListener("click", () => {
  if (share.style.display == "none") {
    share.style.display = "flex";
  } else {
    share.style.display = "none";
  }
});
