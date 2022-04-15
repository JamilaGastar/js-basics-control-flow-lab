function scuberGreetingForFeet(rideValue){
  if (rideValue <= 400) {
 return 'This one is on me!';
  } else if (rideValue < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (rideValue >= 2500) {
    return 'No can do.';
  }
}

console.log(scuberGreetingForFeet(2500));

let city = 'NYC';
city;

function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

console.log(ternaryCheckCity('Pittsburgh'));

let tipDescription = "generous";

function switchOnCharmFromTip(tipDescription){
  switch (tipDescription) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default: 
      return "Bye."
  }
}

console.log(switchOnCharmFromTip("generous"));