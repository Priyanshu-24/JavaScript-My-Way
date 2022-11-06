let gp = document.getElementById("grandparent");
let p = document.getElementById("parent");
let c = document.getElementById("child");

gp.addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked");
  },
  true
);

p.addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);

c.addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  true
);
