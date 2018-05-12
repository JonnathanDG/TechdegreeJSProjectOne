// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Array of quotes to be displayed
var quotes = [
    {
        quote: "Be brave. Take risks. Nothing can substitute experience.",
        source: "Paulo Coelho",
        category: "entrepreneurship"
    },
    {
        quote: "Failure will never overtake me if my determination to succeed is strong enough.",
        source: "Og Mandino",
        category: "entrepreneurship"
    },
    {
        quote: "Beware of little expenses. A small leak will sink a great ship.",
        source: "Benjamin Franklin",
        category: "finance"
    },
    {
        quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
        source: "Confucius",
        category: "history"
    },
    {
        quote: "Life was always a matter of waiting for the right moment to act.",
        source: "Paulo Coelho",
        citation: "Paulo Coelho Quotes. BrainyQuote.com. Xplore Inc, 2018. 12 May 2018. https://www.brainyquote.com/quotes/paulo_coelho_381740",
        year: "2018",
        category: "experience"
    }
];

//Gets a quote randomly
function getRandomQuote(quotesList){

    //Gets the size of the quote list
    var numberOfQuotes = quotesList.length;
    
    //Generates a random number
    var randomNumber = Math.floor((Math.random() * numberOfQuotes));

    //Returns a random quote from the list
    return quotesList[randomNumber];


}

//Prints the quote into the website
function printQuote(){
    
    //Holds a quote object
    var quote = getRandomQuote(quotes);

    var html = "";

    //Creates the message
    html += '<p class="quote">' + quote.quote + '</p>';

    //if the quote has citation and year then is printed
    if( quote.hasOwnProperty('citation') && quote.hasOwnProperty('year') ){

        html += '<p class="source">' + quote.source + 
                '<span class="citation">' + quote.citation + '</span>'
                + '<span class="year">'+ quote.year + '</span>'
                + '</p>';

    } else {

        html += '<p class="source">' + quote.source + '</p>';
    }

    // Prints the data into the DOM
    document.getElementById('quote-box').innerHTML = html;

    //Changes the background everytime a new quote message is created
    changeBodyBackgroundColor();

    //Refresh the website every 30 seconds
    window.setTimeout(printQuote, 30000);
}

//Changes the body background randomly
function changeBodyBackgroundColor(){
   
    //Generates a random number
    var red = Math.floor((Math.random() * 260));
    var green = Math.floor((Math.random() * 260 ));
    var blue = Math.floor((Math.random() * 260));

    document.body.style.backgroundColor = 'rgb('+ red + ',' + green + ',' + blue + ')';
}

//Calls the printQuote Method to change the DOM
printQuote();


