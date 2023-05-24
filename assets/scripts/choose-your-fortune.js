const SECONDS_PER_DAY = 86400;

$(document).ready(function() {
    let headerText = $('#header-text');
    let text = headerText.text();
    let html = '';

    for(let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            html += '<span class="header-hidden">&nbsp;</span>';
        } else {
            html += `<span class="header-hidden">${text[i]}</span>`;
        }
    }

    headerText.html(html);

    let delay = 100; // time in milliseconds between each character
    $('.header-hidden').each(function() {
        $(this).delay(delay).animate({opacity: 1}, 200);
        delay += 100;
    });

    const love_div = document.getElementById("love-div");
    love_div.addEventListener("click", function() {
        handleNavigation("love");
    });

    const career_div = document.getElementById("career-div");
    career_div.addEventListener("click", function() {
        handleNavigation("career");
    });
    
    const health_div = document.getElementById("health-div");
    health_div.addEventListener("click", function() {
        handleNavigation("health");
    });

    const friends_and_family_div = document.getElementById("friends-and-family-div");
    friends_and_family_div.addEventListener("click", function() {
        handleNavigation("friends_and_family");
    });
});

function handleNavigation(type) {
	const emotion1Obj = JSON.parse(localStorage.getItem("emotion1"));
	const emotion2Obj = JSON.parse(localStorage.getItem("emotion2"));
	const currentUnixTimestamp = Date.now() / 1000.;

	// If no emotion1 is set or emotion1 was set > 12 hours ago, redirect to emotion1
	if (emotion1Obj == null ||
			emotion1Obj.emotion == null ||
			currentUnixTimestamp - emotion1Obj.timestamp > SECONDS_PER_DAY / 2) {
        window.location.assign("emotions1.html?reading=" + type);
        // If no emotion2 is set or emotion2 was set > 12 hours ago, redirect to emotion1
    } else if (emotion2Obj == null ||
			emotion2Obj.emotion == null ||
			currentUnixTimestamp - emotion1Obj.timestamp > SECONDS_PER_DAY / 2) {
        window.location.assign("emotions2.html?reading=" + type);
	} else {
        window.location.assign("reading.html?reading=" + type);
    }
}