var parent = document.querySelector(".modal-parent"),
    btn = document.querySelector("button"),
    X = document.querySelector(".X"),
    section = document.querySelector("section");

btn.addEventListener("click", ()=>{
  parent.style.display = "block";
  section.style.filter = "blur(10px)"
});


X.addEventListener("click", ()=>{
  parent.style.display = "none";
  section.style.filter = "blur(0px)"
});


parent.addEventListener("click", (e)=>{
  if (e.target.className == "modal-parent") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)"
  }
})

