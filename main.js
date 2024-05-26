// Add JS here
var count = 0;

var ok = false;
// Define an array of quotes
const quotes = [
  "Shaswati, your beauty shines brighter than any star in the night sky. You captivate my heart with every smile.",
  "Just like your name, Shaswati, you bring endless beauty and grace into my life. You are a constant source of wonder for me.",
  "The world may have many beautiful things, but none compare to the way my heart feels when I'm with you, Shaswati.",
  "They say love is blind, but with you, Shaswati, I see the world in a whole new light, filled with your radiance.",
  "Every moment spent with you, Shaswati, feels like a dream. You are my perfect reality.",
];
var quote = " E cutie ";
function printRandomQuote() {
  // Get a random quote from the array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote = quotes[randomIndex];

  // Print the quote to the console
  console.log(quote);
  document.getElementById("texty").innerHTML = quote;
}

// Optionally, add a function to clear the interval if needed
function stopPrintingQuotes() {
  clearInterval(intervalId);
}
function heartburst() {
  document.getElementById("heart").className = "hearty";
  ok = true;
  const intervalId = setInterval(printRandomQuote, 4000);
}

function ok() {
  ok = true;
  if (ok == true) {
    document.getElementById("heart").className = "hearty";
  }
}
function copium() {
  count++;
  switch (count) {
    case 1:
      document.getElementById("text2").innerHTML =
        "But he loves you so much &#128546";
      break;
    case 2:
      document.getElementById("text2").innerHTML =
        "he cant live without you &#128546";
      break;
    case 3:
      document.getElementById("text2").innerHTML =
        "he will die if you dont accept &#128557";
      break;
    case 4:
      document.getElementById("text2").innerHTML =
        "You really dont like him? &#128557";
      break;
    case 5:
      count = 0;
      copium();
      break;
  }
}
