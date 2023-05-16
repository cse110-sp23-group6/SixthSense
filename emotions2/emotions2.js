/* array of quotes corresponding to the five core emotions */
let joyQuotes = {
    0: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    1: "The future belongs to those who believe in the beauty of their dreams.",
    2: "The best way to cheer yourself up is to try to cheer somebody else up." ,
};

let sadnessQuotes = {
    0: "The greater your capacity to love, the greater your capacity to feel the pain.",
    1: "The walls we build around us to keep out the hurt also keep out the joy.",
    2: "People cry not because they’re weak. It’s because they’ve been strong for too long.",
};

let disgustQuotes = {
    0: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    1: "Disgust is the one human emotion that guarantees loyalty.",
    2: "I'm not arguing, I'm just explaining why I'm right.",
};

let fearQuotes = {
    0: "Worrying about outcomes over which I have no control is punishing myself before the universe has decided whether I ought to be punished.",
    1: "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
    2: "Our anxiety does not empty tomorrow of its sorrows, but only empties today of its strengths.",
};

let angerQuotes = {
    0: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    1: "Never go to bed mad. Stay up and fight.",
    2: "It's not about avoiding the things that make you angry; it's about learning how to control your reactions to them.",
};

//window.addEventListener('DOMContentLoaded', init);

/* generates new quotes each time the window loads */
window.onload = function() {
    let joyButton = document.getElementById("joy");
    let sadnessButton = document.getElementById("sadness");
    let disgustButton = document.getElementById("disgust");
    let fearButton = document.getElementById("fear");
    let angerButton = document.getElementById("anger");

    let rand;
    rand = randomInt(3);
    setQuote(rand, joyButton);
    rand = randomInt(3);
    setQuote(rand, sadnessButton);
    rand = randomInt(3);
    setQuote(rand, disgustButton);
    rand = randomInt(3);
    setQuote(rand, fearButton);
    rand = randomInt(3);
    setQuote(rand, angerButton);
};

/**
 * Function that takes in a value and outputs a random integer that ranges
 * 0 to max.
 * 
 * @param {*} max - maximum possible int to be generated.
 * @returns the randomly generated integer.
 */
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Finds the quote corresponding to the randomly generated integer then fills the
 * content of the button with that quote.
 * 
 * @param {*} int - the randomly generated integer.
 * @param {*} button - the button to place the quote in.
 */
function setQuote(int, button) {
    let attribute = button.getAttribute('id');
    let array = eval(`${attribute}Quotes`);
    let quote = array[int];
    button.innerText = quote;
}