/**
 * File Name: emotions2.js
 * Purpose: randomly show quotes and save results to local storage in "emotions2"
 */

/**
 * function eventListener when loaded
 * purpose:
 * @param quotes - the quotes to be shown categorized by emotion
 * @param {array} emotions - the 5 emotions
 * @param buttonContainer - documentID of div where we will be adding buttons
 * @param randomQuoteIndex - index of the quote (randomized) of the category
 * @param randomQuote - the quote to be displayed
 * @param button - each button that will be added
 *
 * @return emotions2 - name of the emotion that the person chose
 */
document.addEventListener('DOMContentLoaded', function () {
  // Object with quotes for each emotion
  const quotes = {
    joy: [
      'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.',
      'The future belongs to those who believe in the beauty of their dreams.',
      'The best way to cheer yourself up is to try to cheer somebody else up.' 
    ],
    sadness: [
      'The greater your capacity to love, the greater your capacity to feel the pain.',
      'The walls we build around us to keep out the hurt also keep out the joy.',
      'People cry not because they’re weak. It’s because they’ve been strong for too long.'
    ],
    disgust: [
      'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
      'Disgust is the one human emotion that guarantees loyalty.',
      'I\'m not arguing, I\'m just explaining why I\'m right.'
    ],
    fear: [
      'Worrying about outcomes over which I have no control is punishing myself before the universe has decided whether I ought to be punished.',
      'Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.',
      'Our anxiety does not empty tomorrow of its sorrows, but only empties today of its strengths.'
    ],
    anger: [
      'Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.',
      'Never go to bed mad. Stay up and fight.',
      'It\'s not about avoiding the things that make you angry; it\'s about learning how to control your reactions to them.'
    ]
  }

  // Array of emotions
  const emotions = ['joy', 'sadness', 'disgust', 'fear', 'anger']

  // Randomly shuffle the array
  for (let i = emotions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [emotions[i], emotions[j]] = [emotions[j], emotions[i]]
  }

  // Create buttons and append them to the container
  const buttonContainer = document.getElementById('buttonContainer');
  emotions.forEach(emotion => {
    // choose random quote from each category
    const randomQuoteIndex = Math.floor(Math.random() * quotes[emotion].length)
    const randomQuote = quotes[emotion][randomQuoteIndex]

    // create button
    const button = document.createElement('button')
    button.classList.add('button')
    button.textContent = randomQuote
    // when they click a button, you send the emotion to local storage
    button.addEventListener('click', function () {
      const emotion2 = {
        emotion,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('emotion2', JSON.stringify(emotion2))
    })
    // add it to the page
    buttonContainer.appendChild(button)
  })
})

document.getElementById('back').addEventListener('click', function () {
  location.href = 'emotions1.html';
})

document.getElementById('next').addEventListener('click', function () {
  location.href = 'reading.html';
})
