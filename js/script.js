// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Create the quotes array
var quotes = [
    {quote: "Do what you feel in your heart to be right, for you’ll be criticized anyway.", source: "Eleanor Roosevelt", tag: "inspirational"},
    {quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.", source: "Michael Jordan", tag: "sports"},
    {quote: "I don't confuse greatness with perfection. To be great anyhow is…the higher achievement.", source: "Lois McMaster Bujold", citation: "Mirror Dance", year: 1994, "tag": "inspirational"},
    {quote: "Once the realization is accepted that even between the closest human beings infinite distances continue to exist, a wonderful living side by side can grow up, if they succeed in loving the distance between them which makes it possible for each to see each other whole against the sky.", source: "Rainer Maria Rilke", tag: "love"},
    {quote: "Great things in business are never done by one person. They're done by a team of people.", source: "Steve Jobs", citation: "60 Minutes", year: 2003, tag: "business"}
];
// Store the index of the last quote that was picked
var lastQuoteIndex = 0;

// Create the backgrounds array
var backgrounds = ["#36b55c", "#4682B4", "#7100B2", "#474545", "#922626", "#6660a7"];

function getRandomQuote() {
    
    // Get number of quotes in quotes array
    var numQuotes = quotes.length;
    // Get a random index
    // Math.random() * numQuotes produces value 0 through numQuotes
    // Math.floor() rounds down to integer
    var randomIndex = Math.floor(Math.random() * numQuotes);
    
    // Prevent the same quote from being picked
    while (randomIndex === lastQuoteIndex) {
        randomIndex = Math.floor(Math.random() * numQuotes);
    }
    
    // Set the last quote index
    lastQuoteIndex = randomIndex;
    
    // Return the random quote
    return quotes[randomIndex];
    
}

function printQuote() {
    
    // Get the random quote
    var quote = getRandomQuote();
    
    // Start the HTML
    var html = "";
    
    // Check if there's a tag
    if (quote.tag) {
        // add the tag
        html += "<span class='tag'>(" + quote.tag + ")</span>";
    }
    
    // Add the quote and source
    html += "<p class='quote'>" + quote.quote;
    html += "</p><p class='source'>" + quote.source;
    
    // Check to see if there's a citation
    if (quote.citation) {
        // Add citation
        html += " <span class='citation'>" + quote.citation + "</span>";
    }
    
    // Check to see if there's a year
    if (quote.year) {
        // Add year
        html += " <span class='year'>" + quote.year + "</span>";
    }
    
    // Close p tag
    html += "</p>";
    
    // Display HTML by accessing innerHTML property on the quote box
    document.querySelector("#quote-box").innerHTML = html;
    
    // Change the background!
    changeBackground();
    
}

function changeBackground() {
    
    // Pick a random index
    var randomIndex = Math.floor(Math.random() * backgrounds.length);
    // Get the color
    var color = backgrounds[randomIndex];
    
    // Set background
    document.querySelector("body").style.background = color;
    
}


// Refresh quote after 30 seconds
setInterval(printQuote, 30000);