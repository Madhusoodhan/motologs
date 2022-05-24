const quotes = [
    `"Life is not about waiting for the storms to pass: it’s about learning how to ride in the rain!" - Anonymous`,
    `"You do not need a therapist if you own a motorcycle, any kind of motorcycle!" ― Dan Aykroyd`,
    `"Take a journey, soar like an eagle, there are so many roads to explore, so little time.”- Anonymous`
]

const getQuote = () =>{ 
    return quote = quotes[Math.floor (Math.random() * quotes.length)];
}

module.exports.getQuote = getQuote;