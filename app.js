btn = document.querySelector(".card__btn");
listitems = document.querySelectorAll(".card__listitem");

listitems.forEach((listitem) => {
  listitem.addEventListener("click", () => {
    listitems.forEach((item) => {
      if (item !== listitem) {
        item.classList.remove("active");
      }
    });
    listitem.classList.toggle("active");
  });
  listitem.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
    listitems.forEach((item) => {
      if (item !== listitem) {
        item.classList.remove("active");
      }
    });
    listitem.classList.toggle("active");
  }
  });
});

btn.addEventListener("click", () => {
  input = document.querySelector(".active");
  if (input !== null) {
    btn.parentElement.classList.add("submit");
    rated = document.querySelector(".rated");
    rated.classList.add("submit");
    rated.querySelector(".card__feed__response").innerText =input.innerText;
  }
});
