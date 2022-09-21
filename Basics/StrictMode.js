"use strict";

// we cannot declare a variable without var, let or const

firstName = "Priyanshu"; // this will give error in case of strict mode
console.log(firstName);

function thisKaFunda() {
  console.log(this);
}

thisKaFunda(); // in this case this will be undefined ...refer OOP
