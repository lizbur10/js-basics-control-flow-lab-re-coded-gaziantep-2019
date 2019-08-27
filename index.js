function scuberGreetingForFeet(numFeet){
  // Write your code here!
  let message = "Let's go!";
  if (numFeet <= 400) {
    message = "This one is on me!";
  } else if (numFeet > 2500) {
    message = "No can do."
  } else if (numFeet > 2000) {
    message = "I will gladly take your thirty bucks.";
  }
  return message;
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === "NYC") ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tipDescrip){
  // Write your code here!
  let message;
  switch (tipDescrip) {
  case "generous":
    message = "Thank you so much.";
    break;
  case "not as generous":
    message = "Thank you.";
    break;
  default:
    message = "Bye."
    break;
  }
  return message;
}