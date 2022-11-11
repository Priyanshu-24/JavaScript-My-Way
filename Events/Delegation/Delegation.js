// it is based on event bubbling
// instead of adding an event handler to individual element we can add event listner to their parent

let parent = document.getElementById("parent");

parent.addEventListener("click", (e) => {
  console.log(e.target);
});
