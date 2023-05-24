import { READINGS, EMOTIONS_TABLE, READING_TYPES } from "./constants.js";
import { randomArrayItem } from "./helpers.js";

const SECONDS_PER_DAY = 86400;

async function init() {
	const urlParams = new URLSearchParams(window.location.search);
	const currentUnixTimestamp = Date.now() / 1000.;

	let readingType = urlParams.get("reading");
	if (readingType == null || !READING_TYPES.includes(readingType)) {
		window.location.href = "choose-your-fortune.html";
	}

	const auraImage = document.getElementById("aura-image");
	const readingBox = document.getElementById("reading");

	const emotion1Obj = JSON.parse(localStorage.getItem("emotion1"));
	const emotion2Obj = JSON.parse(localStorage.getItem("emotion2"));

	// If no emotion1 is set or emotion1 was set > 12 hours ago, redirect to emotion1
	if (emotion1Obj == null ||
			emotion1Obj.emotion == null ||
			currentUnixTimestamp - emotion1Obj.timestamp > SECONDS_PER_DAY / 2) {
		window.location.href = "emotion1.html" + window.location.search;
	}

	// If no emotion2 is set or emotion2 was set > 12 hours ago, redirect to emotion1
	if (emotion2Obj == null ||
			emotion2Obj.emotion == null ||
			currentUnixTimestamp - emotion1Obj.timestamp > SECONDS_PER_DAY / 2) {
		window.location.href = "emotions2.html" + window.location.search;
	}

	const emotion1 = emotion1Obj.emotion;
	const emotion2 = emotion2Obj.emotion;
	const overallEmotion = EMOTIONS_TABLE[emotion1][emotion2];
	
	let reading = randomArrayItem(READINGS[readingType][overallEmotion]);
	auraImage.src = `assets/emotion_auras/${overallEmotion}.gif`;

	readingBox.textContent = reading;
}

window.addEventListener('DOMContentLoaded', init);
