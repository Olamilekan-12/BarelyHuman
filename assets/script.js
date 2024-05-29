const openSidebar = document.getElementById("open__menu__sidebar");
const closeSidebar = document.getElementById("close__menu__sidebar");
const menuSidebar = document.getElementById("menuSidebar");
const innerMenuSidebar = document.getElementById("innerMenuSlider");

//mobile search
const openSearchPopUp = document.getElementById("open__search__popup");
const closeSearchPopUp = document.getElementById("close__top__search");
const searchPopUp = document.getElementById("search__popup");

openSearchPopUp.addEventListener("click", () => {
  searchPopUp.style.top = 0;
});
closeSearchPopUp.addEventListener("click", () => {
  searchPopUp.style.top = -80 + "px";
});

//quick add
const quickAddBtn = document.querySelectorAll(".quick__add__btn");
const quickAddSlider = document.getElementById("quickAddSlider");
const innerQuickAddSlider = document.getElementById("innerQuickAddSlider");
const closeQuickAddSlider = document.getElementById("close__quick__slider");
const sliderDetails = document.getElementById("slider__details");

quickAddBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {});
});

closeQuickAddSlider.addEventListener("click", () => {
  quickAddSlider.style.left = -100 + "%";
});

quickAddSlider.addEventListener("click", () => {
  quickAddSlider.style.left = -100 + "%";
});

innerQuickAddSlider.addEventListener("click", (e) => {
  e.stopPropagation();
});

//menu slider

openSidebar.addEventListener("click", () => {
  menuSidebar.style.left = 0;
});

closeSidebar.addEventListener("click", () => {
  menuSidebar.style.left = -100 + "%";
});

menuSidebar.addEventListener("click", () => {
  menuSidebar.style.left = -100 + "%";
});

innerMenuSidebar.addEventListener("click", (e) => {
  e.stopPropagation();
});

// cart drawer

function openCartDrawer() {
  document.querySelector("#cart__drawer").classList.add("open__cart__drawer");
  quickAddSlider.style.left = -100 + "%";
}
function closeCartDrawer() {
  document
    .querySelector("#cart__drawer")
    .classList.remove("open__cart__drawer");
}

async function updateCarDrawer() {
  const response = await fetch(`/?section_id=cart-drawer`);
  const text = await response.text();
  const html = document.createElement("div");
  html.innerHTML = text;
  const newBox = html.querySelector(".cart__drawer").innerHTML;
  document.querySelector(".cart__drawer").innerHTML = newBox;
  window.location.reload();
}

document.querySelectorAll("form[action='/cart/add']").forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    //submit with ajax
    await fetch("/cart/add", {
      method: "post",
      body: new FormData(form),
    });
    quickAddSlider.style.left = -100 + "%";
    await updateCarDrawer();
  });
});

document.querySelectorAll(".close__cart__bar, .cart__drawer").forEach((el) => {
  el.addEventListener("click", () => {
    closeCartDrawer();
  });
});

document.querySelectorAll(".close__cart__bar, .cart__drawer").forEach((el) => {
  el.addEventListener("click", () => {
    closeCartDrawer();
  });
});

document
  .querySelector("#inner__cart__drawer")
  .addEventListener("click", (e) => {
    e.stopPropagation();
  });

document.querySelectorAll("a[href='/cart']").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    openCartDrawer();
  });
});
