// RecipeCard.js

const VOLUME_CONTROL_STYLE = `
  .sound-button {
    position: fixed;
    top: 30px;
    left: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .volume-slider {
    position: absolute;
    top: 35%;
    left: calc(100%);
    transform: translateY(-50%,-50%);
    width: 120px;
    height: 15px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    background-color: purple;
    border-radius: 10px;
    box-shadow: 0 2px 5px #0000004d;
  }

  /* Sound Button Animations */
  .sound-button:hover .volume-slider {
    width: 100px;
    height: 15px;
    opacity: 1;
    cursor: pointer;
  }

  #volume-icon {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`

const VOLUME_CONTROL_HTML = `
  <div id="sound-button" class="sound-button">
    <img id="volume-icon" src="assets/images/volume-level-3.svg" alt="Volume Icon">
    <input type="range" min="0" max="1" value="1" step="0.01" class="volume-slider" id="volume-slider">
  </div>
`

class VolumeControl extends HTMLElement {
  _this = this;

  constructor() {
    super(); // Inheret everything from HTMLElement

    this.shadow = this.attachShadow({ mode: 'open' })
    const volumeControlContainer = document.createElement('div');

    volumeControlContainer.innerHTML = VOLUME_CONTROL_HTML;

    const style = document.createElement('style');
    style.textContent = VOLUME_CONTROL_STYLE;

    this.shadow.appendChild(volumeControlContainer);
    this.shadow.appendChild(style);
    this._this = this;
  }

  /**
   * Runs once everything is initialized
   */
  async connectedCallback() {
    let _this = this;

    const volumeIcon = this.shadow.getElementById('volume-icon');
    const volumeSlider = this.shadow.getElementById('volume-slider');

    const storedVolume = localStorage.getItem('lastVolume') ? Number(localStorage.getItem('lastVolume')) : 0.5;
    const backgroundSound = new Audio('assets/sounds/background-music.mp3');
    backgroundSound.volume = storedVolume; // Set the initial volume
    // Set the volume slider to reflect the initial volume
    volumeSlider.value = storedVolume;
    backgroundSound.currentTime = 0; // Reset the background sound to start
    backgroundSound.loop = true; // Enable looping
    // Catch any errors from not being able to play audio due to activity
    backgroundSound.play().catch((e) => {console.warn(e);}); // Play the background sound

    /**
     * function name: updateVolume
     * purpose: update the volume of sound effects icon
     * 
     * @const volumelevel: level of volume ranges from 0 to 3
     */
    this.updateVolume = function () {
      backgroundSound.volume = volumeSlider.value;
      let volumeLevel;

      window.localStorage.setItem('lastVolume', volumeSlider.value);

      if (backgroundSound.volume === 0) {
        volumeLevel = "0";
      } else if (backgroundSound.volume < 0.33) {
        volumeLevel = "1";
      } else if (backgroundSound.volume < 0.66) {
        volumeLevel = "2";
      } else {
        volumeLevel = "3";
      }

      volumeIcon.src = `assets/images/volume-level-${volumeLevel}.svg`;

      this.setAttribute('volume', volumeSlider.value);
    }
    this.updateVolume();

    this.unmutedVolume = volumeSlider.value;

    volumeSlider.addEventListener('input', this.updateVolume);
    volumeIcon.addEventListener('click', function () {
      if (backgroundSound.volume == 0) {
        if (volumeSlider.value == 0) {
          backgroundSound.volume = 1;
          volumeSlider.value = 1;
        } else {
          backgroundSound.volume = _this.unmutedVolume;
          volumeSlider.value = _this.unmutedVolume;
        }
      } else {
        _this.unmutedVolume = backgroundSound.volume;
        backgroundSound.volume = 0;
        volumeSlider.value = 0;
      }
      _this.updateVolume();
    });

    volumeSlider.addEventListener('change', this.updateVolume);
    volumeSlider.addEventListener('mousemove', this.updateVolume);
  }
}

/**
 * function name: playButtonHoverSound
 * purpose: Plays the button hover sound
 */
export function playButtonHoverSound() {
  const volumeControl = document.querySelector("volume-control");
  const buttonHoverSound = new Audio("assets/sounds/button-hover.mp3");
  buttonHoverSound.volume = (volumeControl.getAttribute("volume")) / 20; // change volume according sound bar
  buttonHoverSound.currentTime = 0; // Reset the sound to start

  // Catch any errors from not being able to play audio due to activity
  buttonHoverSound.play().catch((e) => {console.warn(e);}); // Play the background sound
}

customElements.define("volume-control", VolumeControl);