const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
     {
        text: "It's a bad day not a bad life.",
        author: "Unknown"
    },
     {
        text: "Don't look at the entire staircase but at the next step.",
        author: "Unknown"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
     {
        text: "When you're tired learn to rest, don't quit",
        author: "Unknown"
    },
    {
        text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
        author: "Roy T. Bennett"
    },
    {
        text: "I learned that courage was not the absence of fear, but the triumph over it.",
        author: "Nelson Mandela"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Unknown"
    },
    {
        text: "Great things never come from comfort zones.",
        author: "Unknown"
    },
    {
        text: "Dream it. Wish it. Do it.",
        author: "Unknown"
    },
    {
        text: "Success doesn't just find you. You have to go out and get it.",
        author: "Unknown"
    },
     {
        text: "Instead of focusing so much on a To Do List, I'm starting a To Be List. Things I Want To Be Happy Calm Loving Healthy Awesome .",
        author: " Nanea Hoffman"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Unknown"
    },
    {
        text: "Dream bigger. Do bigger.",
        author: "Unknown"
    },
    {
        text: "Don't stop when you're tired. Stop when you're done.",
        author: "Unknown"
    },
    {
        text: "Wake up with determination. Go to bed with satisfaction.",
        author: "Unknown"
    },
    {
        text: "Do something today that your future self will thank you for.",
        author: "Sean Patrick Flanery"
    },
    {
        text: "Little things make big days.",
        author: "Unknown"
    },
    {
        text: "It's going to be hard, but hard does not mean impossible.",
        author: "Unknown"
    },
    {
        text: "Don't wait for opportunity. Create it.",
        author: "Unknown"
    },
    {
        text: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
        author: "Unknown"
    },
    {
        text: "The key to success is to focus on goals, not obstacles.",
        author: "Unknown"
    },
    {
        text: "Dream it. Believe it. Build it.",
        author: "Unknown"
    }
];

let lastQuoteIndex = -1;

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const generateBtn = document.getElementById('generateBtn');

function getRandomQuote() {
    let randomIndex;
    
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex && quotes.length > 1);
    
    lastQuoteIndex = randomIndex;
    return quotes[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    
    setTimeout(() => {
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = quote.author;
        
        quoteText.style.transition = 'opacity 0.5s ease';
        quoteAuthor.style.transition = 'opacity 0.5s ease';
        
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
    }, 300);
}

generateBtn.addEventListener('click', displayQuote);

window.addEventListener('load', () => {
    setTimeout(displayQuote, 500);
});