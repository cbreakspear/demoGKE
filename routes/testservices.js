var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
const request = require('request'); 


exports.landPage = function(req, res) {console.log('Landing Page');
  res.status(200).json('{"version":"1.6"}');
};

exports.getQuoteoftheDay = function (req, res) 
{
    quotes = [];

    q = { "id":"0", "quotation":"It is not only what you do, but also the attitude you bring to it that makes you a success.","author":"Don Schenck"};
    quotes.push(q);
    q = { "id":"1", "quotation":"Knowledge is power.","author":"Francis Bacon"};
    quotes.push(q);
    q = { "id":"2", "quotation":"Life is really simple, but we insist on making it complicated.","author":"Confucius"};
    quotes.push(q);
    q = { "id":"3", "quotation":"This above all, to thine own self be true.","author":"William Shakespeare"};
    quotes.push(q);
    q = { "id":"4", "quotation":"Never complain. Never explain.","author":"Katharine Hepburn"};
    quotes.push(q);
    q = { "id":"5", "quotation":"Do be do be dooo.","author":"Frank Sinatra"};
    quotes.push(q);
    q = { "id":"6", "quotation":"Get busy living. Or get busy dying","author":"Stephen King"};
    quotes.push(q);
    q = { "id":"7", "quotation":"I came, I saw, I conquered.","author":"Julius Caesar"};
    quotes.push(q);
    q = { "id":"8", "quotation":"Practice makes perfect.","author":"Vince Lombardi"};
    quotes.push(q)
    q = { "id":"9", "quotation":"That which does not kill us makes us stronger","author":"Friedrich Nietzsche"};
    quotes.push(q);
    q = { "id":"10", "quotation":"Life is what happens when you re busy making other plans.","author":"John Lennon"};
    quotes.push(q);

    const id = Math.floor(Math.random() * 10);
    
 
      res.send(quotes[id]);
  
    console.log('Sending Quote of the Day');
};

exports.getTest = function(req, res) {console.log('Reaching service for testing container');
res.status(200).json('You have reached the SERVICE :)');
};

exports.getDateandTime = function(req, res, getval) {
    

  let date_time = new Date();

// get current date
// adjust 0 before single digit date
let date = ("0" + date_time.getDate()).slice(-2);

// get current month
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

// get current year
let year = date_time.getFullYear();

// get current hours
let hours = date_time.getHours();

// get current minutes
let minutes = date_time.getMinutes();

// get current seconds
let seconds = date_time.getSeconds();

// prints date & time in YYYY-MM-DD HH:MM:SS format
//console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
        res.status(200).json(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)
    
      console.log('Sending Date and Time : ' + year + "-" + month + "-" + date);
     
};








