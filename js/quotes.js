const quotes = [
    {
        quote: "aaaa",
        author: "A",
    },
    {
        quote: "bbbb",
        author: "B",
    },
    {
        quote: "cccc",
        author: "C",
    },
    {
        quote: "dddd",
        author: "D",
    },
    {
        quote: "eeee",
        author: "E",
    },
    {
        quote: "ffff",
        author: "F",
    },
    {
        quote: "gggg",
        author: "G",
    },
    {
        quote: "hhhh",
        author: "H",
    },
    {
        quote: "iiii",
        author: "I",
    },
    {
        quote: "jjjj",
        author: "J",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
