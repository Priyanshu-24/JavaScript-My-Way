let gp = document.getElementById("grandparent");
let p = document.getElementById("parent");
let c = document.getElementById("child");

gp.addEventListener("click", () => {
  console.log("Grandparent Clicked");
});

p.addEventListener("click", () => {
  console.log("Parent Clicked");
});

c.addEventListener("click", () => {
  console.log("Child Clicked");
});
