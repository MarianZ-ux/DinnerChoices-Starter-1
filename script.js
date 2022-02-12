// Here we ask the user if they eat steak, and store the result (true/false) in a letiable.
let eatSteak = confirm("do you eat steak?");

// print the value of eatSteak to see what confirm() returns
console.log(eatSteak);

// If the user eats steak (eatSteak === true) add "Here's a steak!" to the p#steakMessage
if (eatSteak) {
  steakMessage.innerText = "here's a steak!";
}
// If the above condition isn't met (eatSteak !== true), add "Here's a tofu stir fry!" instead.
else {
  steakMessage.innerText = "here's a tofu stir fry!";
}

// Ask the user what year they were born, and store their response to a letiable.
let bornYear = prompt("what year were you born?");

// If the user was born before 2000, add "SAKE SAKE SAKE!" to the p#sakeMessage
if (bornYear < 2000) {
  sakeMessage.innerText = "SAKE SAKE SAKE"; 
}

// If the user was born after 2000, add "No Sake for you!" to the p#sakeMessage
else if (bornYear > 2000) {
  sakeMessage.innerText = "No Sake for you :(";
}

// If neither of the previous conditions was true (birthYear === 2000) we add "You inched by!" to the p#sakeMessage
else {
  sakeMessage.innerText = "You incehd by! extra shot for you! :)";
}