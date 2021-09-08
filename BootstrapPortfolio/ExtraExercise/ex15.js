var myNumber = prompt("Enter your favorate day of the week!");
var theResponse;

switch (myNumber) {
    case "Monday":
        theResponse = "Let's win the week!"
        break;
    case "Tuesday":
        theResponse = "Taco day!";
        break;
    case "Wednesday":
        theResponse = "Halway there!";
        break;
    case "Thursday":
        theResponse = "It's the new friday!";
        break;
    case "Friday":
        theResponse = "TGIF yay!";
        break;
    case "Saturday":
        theResponse = "What a day!";
        break;
    case "Sunday":
        theResponse = "Sunday = Funday!";
        break;
    default:
        theResponse = "I haven't heard of that one!";
        break;
}

alert (theResponse);