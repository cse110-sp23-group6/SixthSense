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

    const love_div = document.getElementById("love_div");
    love_div.addEventListener("click", function() {
        navigateToEmotion("love");
    });

    const career_div = document.getElementById("career_div");
    career_div.addEventListener("click", function() {
        navigateToEmotion("career");
    });
    
    const health_div = document.getElementById("health_div");
    health_div.addEventListener("click", function() {
        navigateToEmotion("health");
    });

    const friends_and_family_div = document.getElementById("friends_and_family_div");
    friends_and_family_div.addEventListener("click", function() {
        navigateToEmotion("friends_and_family");
    });
});

function navigateToEmotion(type) {
    window.location.assign("emotions1.html?reading=" + type);
}