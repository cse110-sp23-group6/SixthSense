class e extends HTMLElement{_this=this;constructor(){super(),this.shadow=this.attachShadow({mode:"open"});var e=document.createElement("div"),o=(e.innerHTML=`
  <div id="sound-button" class="sound-button">
    <img id="volume-icon" src="assets/images/volume-level-3.svg" alt="Volume Icon">
    <input type="range" min="0" max="1" value="1" step="0.01" class="volume-slider" id="volume-slider">
  </div>
`,document.createElement("style"));o.textContent=`
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
`,this.shadow.appendChild(e),this.shadow.appendChild(o),this._this=this}async connectedCallback(){const o=this,t=this.shadow.getElementById("volume-icon"),u=this.shadow.getElementById("volume-slider");var e=localStorage.getItem("lastVolume")?Number(localStorage.getItem("lastVolume")):.5,e=(this.backgroundSound=new Audio("assets/sounds/background-music.mp3"),this.backgroundSound.volume=e,u.value=e,localStorage.getItem("lastBackgroundSoundTime")?Number(localStorage.getItem("lastBackgroundSoundTime")):.5);this.backgroundSound.currentTime=e,this.backgroundSound.loop=!0,this.backgroundSound.play().catch(e=>{console.warn(e)}),this.updateVolume=function(){o.backgroundSound.volume=u.value;let e;window.localStorage.setItem("lastVolume",u.value),e=0===o.backgroundSound.volume?"0":o.backgroundSound.volume<.33?"1":o.backgroundSound.volume<.66?"2":"3",t.src=`assets/images/volume-level-${e}.svg`,this.setAttribute("volume",u.value)},this.updateVolume(),this.unmutedVolume=u.value,u.addEventListener("input",this.updateVolume),t.addEventListener("click",function(){0==o.backgroundSound.volume?0==u.value?(o.backgroundSound.volume=1,u.value=1):(o.backgroundSound.volume=o.unmutedVolume,u.value=o.unmutedVolume):(o.unmutedVolume=o.backgroundSound.volume,o.backgroundSound.volume=0,u.value=0),o.updateVolume()}),u.addEventListener("change",this.updateVolume),u.addEventListener("mousemove",this.updateVolume),window.addEventListener("beforeunload",async function(e){window.localStorage.setItem("lastBackgroundSoundTime",o.backgroundSound.currentTime)})}}function o(){var e=document.querySelector("volume-control"),o=new Audio("assets/sounds/button-hover.mp3");o.volume=e.getAttribute("volume")/20,o.currentTime=0,o.play().catch(e=>{console.warn(e)})}customElements.define("volume-control",e);export{o as playButtonHoverSound};