/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// color variables
var red;
var yellow;
var blue;

//Timer variable
var setTimer;

//`quotes` array
var quotes = [
  {
    quote: 'Time waits for no one',
    source: 'Folklore',
    citation: 'https://www.actitime.com/time-management/best-time-quotes/',
    year: '1225',
    tags: '#inspiration'
  },
  {
    quote: 'Better three hours too soon than a minute too late',
    source: 'William Shakespeare',
    citation: 'The Merry Wives of Windsor',
    year: '1602',
    tags: '#inspiration'
  },
  {
    quote: 'Time is the most valuable thing a man can spend',
    source: 'Theophrastus',
    citation: 'https://www.actitime.com/time-management/best-time-quotes/',
    year: '1433',
    tags: '#inspiration'
  },
  {
    quote: 'The key is in not spending time, but in investing it.',
    source: 'Stephen R. Covey',
    citation: 'Time Management Matrix',
    year: '2016',
    tags: '#inspiration'
  },
  {
    quote: 'It’s not that we have little time, but more that we waste a good deal of it.',
    source: 'Seneca',
    citation: 'https://www.actitime.com/time-management/best-time-quotes/',
    year: '',
    tags: '#inspiration'
  },
  {
    quote: 'Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much can be done if we are always doing.',
    source: 'Thomas Jefferson',
    citation: 'https://www.actitime.com/time-management/best-time-quotes/',
    year: '',
    tags: '#inspiration'
  },
  {
    quote: 'Time takes it all, whether you want it to or not.',
    source: 'Steven King',
    citation: 'The Green Mile',
    year: '1996',
    tags: '#inspiration'
  },
  {
    quote: 'There is one kind of robber whom the law does not strike at, and who steals what is most precious to men: time.',
    source: 'Napoleon I',
    citation: 'https://www.actitime.com/time-management/best-time-quotes/',
    year: '',
    tags: '#motivational'
  },
  {
   quote: 'The two most powerful warriors are patience and time',
   source: 'Leo Tolstoy',
   citation: 'War and Peace',
   year: '1867',
   tags: '#inspiration'
  },
  {
    quote: 'Time is free, but it\’s priceless. You can\’t own it, but you can use it. You can\’t keep it, but you can spend it. Once you\’ve lost it you can never get it back.',
    source: 'Harvey Mackay',
    citation: 'https://www.actitime.com/time-management/best-time-quotes/',
    year: '',
    tags: '#inspirational'
  },
  {
    quote: 'You can\’t have a better tomorrow if you are thinking about yesterday all the time.',
    source: 'Charles F. Kettering',
    citation: 'https://www.actitime.com/time-management/best-time-quotes/',
    year: '',
    tags: '#inspirational'
  },
  {
    quote: 'Time flies over us, but leaves it\'s shadow behind',
    source: 'Nathaniel Hawthorne',
    citation: 'https://www.actitime.com/time-management/best-time-quotes/',
    year: '',
    tags: '#inspirational'
  },
  {
    quote: 'The best gift you could ever give someone is your TIME because you\'re giving them something that you\'ll never get back',
    source: 'Unknown',
    citation: 'https://en.paperblog.com/time-quotes-874431/',
    year: '',
    tags: '#inspirational'
  },
  {
    quote: 'The trouble is, you think you have time',
    source: 'Buddha',
    citation: 'https://en.paperblog.com/time-quotes-874431/',
    year: '',
    tags: '#inspirational'
  },
  {
    quote: 'Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity',
    source: 'Henry Van Dyke',
    citation: 'https://en.paperblog.com/time-quotes-874431/',
    year: '',
    tags: '#inspirational'
  },
  {
    quote: 'Taking time to do nothing, often brings everything into perspective',
    source: 'Doe Zantamata',
    citation: 'https://en.paperblog.com/time-quotes-874431/',
    year: '',
    tags: '#inspirational'
  }
];

// Without this function, the quotes are sent to print preview for printer LOL
function print(message) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = message;
}

// Get a random quote from Quotes Array using the Maths random function
function getRandomQuote() {
  var quoted = Math.floor(Math.random()  * quotes.length);
  for (var i = 0; i < quotes.length; i += 1) {
  return(quotes[quoted]);
  }
}
//console.log(quoted);
//(This was Used for testing before inclosing variable inside function)

// Construct a random color with each quote change
function randomColor() {
  var color;
  red = Math.floor(Math.random() * 256 );
  yellow = Math.floor(Math.random() * 56 );
  blue = Math.floor(Math.random() * 256 );
  color = 'rgb(' + red + ',' + yellow + ',' + blue + ')';
  return color;
}

// Set a timer to change quote every 10 seconds
function timer(){
time = setInterval( printQuote, 10000);
return time;
}
timer();

// Reset the timer if the generate new quote button is clicked
function clearTimer() {
clearInterval( timer );
}

/***
* Print the quote to the page inside the quote-box container
* and only print object values if exists
***/
  function printQuote() {
    var quotes = getRandomQuote();
    message = '<p class="quote">' + quotes.quote + '</p>';
    message += '<p class="source">' + quotes.source;
    if (quotes.citation) {
      message += '<span class="citation">' + quotes.citation + ' ' + '</span>';
    } else {
      message += '';
    }
    if (quotes.year) {
      message += '<span clas="year">' + quotes.year + ' ' + '</span>';
    } else {
      message += '';
    }
    if (quotes.tags) {
    message += '<span class="tags">' + quotes.tags + '</span>';
    } else {
      message += '';
    }
    message += '</p>';
    print(message);

clearTimer();
// Print random color to page
    randomColor();
document.getElementById('colors').style.backgroundColor = randomColor();
}

 //click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);


$(document).ready(function() {
$('body').ripples('show');
});
