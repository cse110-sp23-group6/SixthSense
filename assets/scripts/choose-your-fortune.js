const SECONDS_PER_DAY = 86400

document.addEventListener("DOMContentLoaded", function () {
  const headerText = document.getElementById('header-text');
  const text = headerText.textContent;
  let html = ''

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      html += '<span class="header-hidden">&nbsp;</span>';
    } else {
      html += `<span class="header-hidden">${text[i]}</span>`;
    }
  }

  headerText.innerHTML = html;

  let delay = 100 // time in milliseconds between each character
  document.querySelectorAll('.header-hidden').forEach(function (elem) {
    setTimeout(function () {
      elem.style.opacity = 1;
    }, delay);
    delay += 100;
  });
});

const loveDiv = document.getElementById('love-div')
loveDiv.addEventListener('click', function () {
  handleNavigation('love')
})

const careerDiv = document.getElementById('career-div')
careerDiv.addEventListener('click', function () {
  handleNavigation('career')
})

const healthDiv = document.getElementById('health-div')
healthDiv.addEventListener('click', function () {
  handleNavigation('health')
})

const friendsAndFamilyDiv = document.getElementById('friends-and-family-div')
friendsAndFamilyDiv.addEventListener('click', function () {
  handleNavigation('friends_and_family')
})

function handleNavigation(type) {
  const emotion1Obj = JSON.parse(localStorage.getItem('emotion1'))
  const emotion2Obj = JSON.parse(localStorage.getItem('emotion2'))
  const currentUnixTimestamp = Date.now() / 1000.0

  // If no emotion1 is set or emotion1 was set > 12 hours ago, redirect to emotion1
  if (emotion1Obj == null ||
    emotion1Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > SECONDS_PER_DAY / 2) {
    window.location.assign('emotions1.html?reading=' + type)
    // If no emotion2 is set or emotion2 was set > 12 hours ago, redirect to emotion1
  } else if (emotion2Obj == null ||
    emotion2Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > SECONDS_PER_DAY / 2) {
    window.location.assign('emotions2.html?reading=' + type)
  } else {
    window.location.assign('reading.html?reading=' + type)
  }
}
